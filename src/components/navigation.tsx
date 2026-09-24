"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Wordmark } from "@/components/wordmark";
import { cn } from "@/lib/cn";
import { navigation, startProject } from "@/lib/site";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 64rem)");

    function onChange() {
      if (media.matches) {
        setOpen(false);
      }
    }

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const menu = menuRef.current;
    const menuButton = menuButtonRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusable = () =>
      menu ? [...menu.querySelectorAll<HTMLElement>("a, button")] : [];

    focusable()[0]?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const items = focusable();
      const first = items[0];
      const last = items[items.length - 1];

      if (!first || !last) {
        return;
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      menuButton?.focus();
    };
  }, [open]);

  function close() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-ink/75 pt-[env(safe-area-inset-top,0px)] shadow-[0_18px_40px_-28px_rgb(0_0_0/0.85)] backdrop-blur-md">
      <Container className="flex items-center justify-between gap-4 py-2.5 sm:gap-6 sm:py-3 lg:py-4">
        <Link href="/" aria-label="AmirKAT home" onClick={close} className="shrink-0">
          <Wordmark />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="quiet-link inline-flex min-h-11 items-center text-sm text-stone"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={startProject.href} size="md">
            {startProject.label}
          </Button>
        </div>

        <button
          type="button"
          ref={menuButtonRef}
          className="relative size-11 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span
            aria-hidden="true"
            className={cn(
              "absolute left-3 h-px w-5 bg-cream motion-safe:transition-transform motion-safe:duration-base motion-safe:ease-out-soft",
              open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-4",
            )}
          />
          <span
            aria-hidden="true"
            className={cn(
              "absolute top-1/2 left-3 h-px w-5 -translate-y-1/2 bg-cream motion-safe:transition-opacity motion-safe:duration-fast",
              open && "opacity-0",
            )}
          />
          <span
            aria-hidden="true"
            className={cn(
              "absolute left-3 h-px w-5 bg-cream motion-safe:transition-transform motion-safe:duration-base motion-safe:ease-out-soft",
              open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-4",
            )}
          />
        </button>
      </Container>

      <div
        className={cn(
          "absolute inset-x-0 top-full h-[calc(100svh-var(--header-height))] overflow-y-auto border-t border-line bg-ink lg:hidden motion-safe:transition-opacity motion-safe:duration-base motion-safe:ease-out-soft",
          open ? "visible opacity-100" : "pointer-events-none invisible opacity-0",
        )}
      >
        <nav
          ref={menuRef}
          id="mobile-navigation"
          aria-label="Primary"
          aria-hidden={!open}
          inert={!open}
        >
          <Container className="flex flex-col py-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="flex min-h-12 items-center text-lg text-cream transition-colors duration-fast"
              >
                {item.label}
              </Link>
            ))}
            <Button href={startProject.href} className="mt-4 w-full" onClick={close}>
              {startProject.label}
            </Button>
          </Container>
        </nav>
      </div>
    </header>
  );
}
