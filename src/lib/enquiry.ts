export const projectTypes = [
  "Business website",
  "Web app / SaaS",
  "E-commerce",
  "Landing page",
  "Something else",
] as const;

export const budgets = [
  "Under €1,000",
  "€1,000–€2,500",
  "€2,500–€5,000",
  "€5,000–€10,000",
  "€10,000+",
] as const;

export const timelines = ["ASAP", "2–4 weeks", "1–2 months", "2–3 months", "Flexible"] as const;

export type ProjectType = (typeof projectTypes)[number];
export type Budget = (typeof budgets)[number];
export type Timeline = (typeof timelines)[number];

export type Enquiry = {
  projectType: ProjectType;
  budget: Budget;
  timeline: Timeline;
  message: string;
  name: string;
  email: string;
};

export type EnquiryResult =
  | { status: "sent" }
  | { status: "unavailable" }
  | { status: "invalid"; message: string };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isOneOf<T extends string>(value: string, options: readonly T[]): value is T {
  return options.some((option) => option === value);
}

export function parseEnquiry(input: {
  projectType?: string;
  budget?: string;
  timeline?: string;
  message?: string;
  name?: string;
  email?: string;
  website?: string;
}): { ok: true; enquiry: Enquiry; honeypot: boolean } | { ok: false; message: string } {
  const projectType = input.projectType?.trim() ?? "";
  const budget = input.budget?.trim() ?? "";
  const timeline = input.timeline?.trim() ?? "";
  const message = input.message?.trim() ?? "";
  const name = input.name?.trim() ?? "";
  const email = input.email?.trim() ?? "";

  if (!isOneOf(projectType, projectTypes)) {
    return { ok: false, message: "Choose what you are looking to build." };
  }

  if (!isOneOf(budget, budgets)) {
    return { ok: false, message: "Choose an approximate budget." };
  }

  if (!isOneOf(timeline, timelines)) {
    return { ok: false, message: "Choose a timeline." };
  }

  if (!message) {
    return { ok: false, message: "A sentence or two is enough." };
  }

  if (message.length > 4000) {
    return { ok: false, message: "That note is a little long. The first 4,000 characters are enough." };
  }

  if (!name) {
    return { ok: false, message: "What should I call you?" };
  }

  if (name.length > 80) {
    return { ok: false, message: "That name is a little long." };
  }

  if (!emailPattern.test(email) || email.length > 200) {
    return { ok: false, message: "That email doesn't look quite right." };
  }

  return {
    ok: true,
    honeypot: Boolean(input.website?.trim()),
    enquiry: { projectType, budget, timeline, message, name, email },
  };
}
