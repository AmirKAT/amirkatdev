"use server";

import { parseEnquiry, type Enquiry, type EnquiryResult } from "@/lib/enquiry";

type EnquiryInput = {
  projectType?: string;
  budget?: string;
  timeline?: string;
  message?: string;
  name?: string;
  email?: string;
  website?: string;
};

const enquiryRecipients = ["amir-katal@hotmail.com", "amirkatal96@gmail.com"] as const;

function resendConfigured() {
  return Boolean(process.env.RESEND_API_KEY && process.env.RESEND_FROM_EMAIL);
}

function supabaseConfigured() {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
}

function enquiryText(enquiry: Enquiry) {
  return [
    `Name: ${enquiry.name}`,
    `Email: ${enquiry.email}`,
    `Looking to build: ${enquiry.projectType}`,
    `Budget: ${enquiry.budget}`,
    `Timeline: ${enquiry.timeline}`,
    "",
    enquiry.message,
  ].join("\n");
}

async function sendWithResend(enquiry: Enquiry) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM_EMAIL,
      to: [...enquiryRecipients],
      reply_to: enquiry.email,
      subject: `Project enquiry from ${enquiry.name}`,
      text: enquiryText(enquiry),
    }),
  });

  return response.ok;
}

async function saveWithSupabase(enquiry: Enquiry) {
  const url = process.env.SUPABASE_URL?.replace(/\/$/, "");
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const response = await fetch(`${url}/rest/v1/enquiries`, {
    method: "POST",
    headers: {
      apikey: key ?? "",
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      name: enquiry.name,
      email: enquiry.email,
      project_type: enquiry.projectType,
      budget: enquiry.budget,
      timeline: enquiry.timeline,
      message: enquiry.message,
    }),
  });

  return response.ok;
}

export async function submitEnquiry(input: EnquiryInput): Promise<EnquiryResult> {
  const parsed = parseEnquiry(input);

  if (!parsed.ok) {
    return { status: "invalid", message: parsed.message };
  }

  if (parsed.honeypot) {
    return { status: "sent" };
  }

  const sendEmail = resendConfigured();
  const saveEnquiry = supabaseConfigured();

  if (!sendEmail && !saveEnquiry) {
    return { status: "unavailable" };
  }

  const results = await Promise.all([
    sendEmail ? sendWithResend(parsed.enquiry) : Promise.resolve(true),
    saveEnquiry ? saveWithSupabase(parsed.enquiry) : Promise.resolve(true),
  ]);

  if (results.some((ok) => !ok)) {
    return {
      status: "invalid",
      message: "That didn't go through. Please try again in a moment.",
    };
  }

  return { status: "sent" };
}
