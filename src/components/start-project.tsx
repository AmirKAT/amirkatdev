"use client";

import { useEffect, useId, useRef, useState, useTransition } from "react";
import { submitEnquiry } from "@/app/actions/enquiry";
import { Button } from "@/components/button";
import { Heading } from "@/components/heading";
import { cn } from "@/lib/cn";
import { budgets, parseEnquiry, projectTypes, timelines, type EnquiryResult } from "@/lib/enquiry";

const steps = [
  {
    key: "projectType",
    prompt: "What are you looking to build?",
    options: projectTypes,
  },
  {
    key: "budget",
    prompt: "What's your approximate budget?",
    options: budgets,
  },
  {
    key: "timeline",
    prompt: "What's your timeline?",
    options: timelines,
  },
] as const;

type ChoiceKey = (typeof steps)[number]["key"];

type Answers = {
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
  name: string;
  email: string;
  website: string;
};

const emptyAnswers: Answers = {
  projectType: "",
  budget: "",
  timeline: "",
  message: "",
  name: "",
  email: "",
  website: "",
};

const fieldClassName =
  "mt-2 min-h-12 w-full rounded-sm border border-line bg-transparent px-4 py-3 text-base text-cream outline-none transition-colors duration-fast placeholder:text-stone focus:border-cream/40";

export function StartProjectForm({ questionLevel = 3 }: { questionLevel?: 2 | 3 }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(emptyAnswers);
  const [notice, setNotice] = useState("");
  const [result, setResult] = useState<EnquiryResult | null>(null);
  const [pending, startTransition] = useTransition();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const advanceTimer = useRef<number | null>(null);
  const seen = useRef({ step, result });
  const statusId = useId();

  useEffect(() => {
    if (seen.current.step === step && seen.current.result === result) {
      return;
    }

    seen.current = { step, result };
    headingRef.current?.focus();
  }, [step, result]);

  useEffect(() => {
    return () => {
      if (advanceTimer.current !== null) {
        window.clearTimeout(advanceTimer.current);
      }
    };
  }, []);

  function clearAdvance() {
    if (advanceTimer.current !== null) {
      window.clearTimeout(advanceTimer.current);
      advanceTimer.current = null;
    }
  }

  function goBack() {
    clearAdvance();
    setNotice("");
    setStep((current) => Math.max(0, current - 1));
  }

  function choose(key: ChoiceKey, value: string) {
    setAnswers((current) => ({ ...current, [key]: value }));
    setNotice("");
    clearAdvance();
    advanceTimer.current = window.setTimeout(() => {
      setStep((current) => Math.min(current + 1, 4));
    }, 280);
  }

  function continueFromNote() {
    if (!answers.message.trim()) {
      setNotice("A sentence or two is enough.");
      return;
    }

    setNotice("");
    setStep(4);
  }

  function send(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (step !== 4) {
      return;
    }

    const parsed = parseEnquiry(answers);
    if (!parsed.ok) {
      setNotice(parsed.message);
      return;
    }

    setNotice("");
    startTransition(async () => {
      const response = await submitEnquiry(answers);
      if (response.status === "invalid") {
        setNotice(response.message);
        return;
      }

      setResult(response);
    });
  }

  if (result?.status === "sent") {
    return (
      <div className="max-w-xl motion-safe:animate-step">
        <Heading
          ref={headingRef}
          level={questionLevel}
          size="title"
          tabIndex={-1}
          className="outline-none"
        >
          I&apos;ll read this and write back.
        </Heading>
        <p className="mt-4 text-body text-cream-muted">Thanks, {answers.name.trim()}.</p>
      </div>
    );
  }

  const choice = step < 3 ? steps[step] : null;

  const status = notice || (result?.status === "unavailable"
    ? "This can't be sent from the site yet. Nothing was emailed or saved."
    : "");

  return (
    <form
      className="max-w-xl"
      onSubmit={send}
      noValidate
      aria-describedby={status ? statusId : undefined}
    >
      <div
        className="mb-6"
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={5}
        aria-valuenow={step + 1}
        aria-valuetext={`Step ${step + 1} of 5`}
      >
        <p className="font-mono text-[0.6875rem] tracking-[0.08em] text-stone">
          {String(step + 1).padStart(2, "0")}
          <span className="mx-2 text-line">/</span>
          05
        </p>
        <ol className="mt-4 flex gap-2">
          {Array.from({ length: 5 }, (_, index) => (
            <li key={index} className="flex-1">
              <span
                className={cn(
                  "block h-px motion-safe:transition-colors motion-safe:duration-base",
                  index <= step ? "bg-burgundy" : "bg-line",
                )}
              />
            </li>
          ))}
        </ol>
      </div>

      <div key={step} className="motion-safe:animate-step">
        {choice ? (
          <ChoiceStep
            headingRef={headingRef}
            questionLevel={questionLevel}
            prompt={choice.prompt}
            options={choice.options}
            selected={answers[choice.key]}
            onChoose={(value) => choose(choice.key, value)}
          />
        ) : null}

        {step === 3 ? (
          <div>
            <Heading
              ref={headingRef}
              level={questionLevel}
              size="title"
              id="project-note"
              tabIndex={-1}
              className="outline-none"
            >
              Tell me about the project
            </Heading>
            <textarea
              id="project-note-field"
              name="message"
              aria-labelledby="project-note"
              aria-required="true"
              value={answers.message}
              onChange={(event) => {
                setAnswers((current) => ({ ...current, message: event.target.value }));
                setNotice("");
              }}
              rows={7}
              placeholder="What it is, who it's for, and anything you already know."
              className={cn(fieldClassName, "mt-8 resize-y")}
            />
          </div>
        ) : null}

        {step === 4 ? (
          <div>
            <Heading
              ref={headingRef}
              level={questionLevel}
              size="title"
              id="reply-heading"
              tabIndex={-1}
              className="outline-none"
            >
              Where should I reply?
            </Heading>
            <div className="mt-8 space-y-5" role="group" aria-labelledby="reply-heading">
              <label className="block" htmlFor="enquiry-name">
                <span className="text-small text-stone">Name</span>
                <input
                  id="enquiry-name"
                  name="name"
                  value={answers.name}
                  onChange={(event) => {
                    setAnswers((current) => ({ ...current, name: event.target.value }));
                    setNotice("");
                  }}
                  autoComplete="name"
                  aria-required="true"
                  className={fieldClassName}
                />
              </label>
              <label className="block" htmlFor="enquiry-email">
                <span className="text-small text-stone">Email</span>
                <input
                  id="enquiry-email"
                  name="email"
                  type="email"
                  value={answers.email}
                  onChange={(event) => {
                    setAnswers((current) => ({ ...current, email: event.target.value }));
                    setNotice("");
                  }}
                  autoComplete="email"
                  aria-required="true"
                  className={fieldClassName}
                />
              </label>
            </div>
            <label className="hidden" aria-hidden="true">
              Website
              <input
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={answers.website}
                onChange={(event) =>
                  setAnswers((current) => ({ ...current, website: event.target.value }))
                }
              />
            </label>
          </div>
        ) : null}

        {status ? (
          <p id={statusId} role="status" className="mt-6 max-w-md text-small text-cream">
            {status}
          </p>
        ) : null}

        <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          {step > 0 ? (
            <Button variant="ghost" onClick={goBack} disabled={pending} className="min-h-12">
              Back
            </Button>
          ) : null}
          {step === 3 ? (
            <Button type="button" size="lg" onClick={continueFromNote} className="w-full sm:w-auto">
              Continue
            </Button>
          ) : null}
          {step === 4 ? (
            <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
              {pending ? "Sending…" : "Start a conversation"}
            </Button>
          ) : null}
        </div>
      </div>
    </form>
  );
}

function ChoiceStep({
  headingRef,
  questionLevel,
  prompt,
  options,
  selected,
  onChoose,
}: {
  headingRef: React.RefObject<HTMLHeadingElement | null>;
  questionLevel: 2 | 3;
  prompt: string;
  options: readonly string[];
  selected: string;
  onChoose: (value: string) => void;
}) {
  const promptId = useId();

  return (
    <div>
      <Heading
        ref={headingRef}
        id={promptId}
        level={questionLevel}
        size="title"
        tabIndex={-1}
        className="outline-none"
      >
        {prompt}
      </Heading>
      <div className="mt-8 border-t border-line" role="group" aria-labelledby={promptId}>
        {options.map((option) => {
          const active = selected === option;

          return (
            <button
              key={option}
              type="button"
              aria-pressed={active}
              onClick={() => onChoose(option)}
              className={cn(
                "flex min-h-14 w-full items-center justify-between gap-6 border-b border-line py-4 text-left text-body transition-colors duration-fast",
                active ? "text-cream" : "text-cream-muted hover:text-cream",
              )}
            >
              {option}
              <span
                className={cn(
                  "h-px shrink-0 bg-burgundy motion-safe:transition-[width] motion-safe:duration-base",
                  active ? "w-8" : "w-0",
                )}
                aria-hidden="true"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
