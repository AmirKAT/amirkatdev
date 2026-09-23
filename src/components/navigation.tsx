"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Wordmark } from "@/components/wordmark";
import { cn } from "@/lib/cn";
import { navigation, startProject } from "@/lib/site";

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 48rem)");

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

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function close() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink">
      <Container className="flex h-[var(--header-height)] items-center justify-between gap-6">
        <Link href="/" aria-label="AmirKAT home" onClick={close}>
          <Wordmark />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-sm text-stone transition-colors duration-fast ease-out-soft hover:text-cream",
                  active && "text-cream",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href={startProject.href} size="sm">
            {startProject.label}
          </Button>
        </div>

        <button
          type="button"
          className="text-sm tracking-wide text-cream md:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </Container>

      {open ? (
        <nav
          id="mobile-navigation"
          aria-label="Primary"
          className="border-t border-line bg-ink md:hidden"
        >
          <Container className="flex flex-col py-4">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={close}
                  className={cn(
                    "py-3 text-lg text-cream-muted transition-colors duration-fast hover:text-cream",
                    active && "text-cream",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button href={startProject.href} className="mt-4 w-full" onClick={close}>
              {startProject.label}
            </Button>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
