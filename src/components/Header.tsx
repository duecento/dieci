"use client";

import { useState } from "react";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "How We Help" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-6xl">
      <div className="flex items-center justify-between rounded-2xl border border-border bg-surface/80 px-5 py-3 shadow-sm backdrop-blur-md">
        <a href="#home" className="font-heading text-lg font-semibold tracking-tight text-foreground">
          Dieci<span className="text-primary">AI</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="cursor-pointer text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden cursor-pointer rounded-full bg-primary px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-dark md:inline-block"
        >
          Get in touch
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="cursor-pointer p-1 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {open && (
        <nav className="mt-2 flex flex-col gap-1 rounded-2xl border border-border bg-surface p-3 shadow-sm md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-background hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="cursor-pointer rounded-lg bg-primary px-3 py-2 text-center text-sm font-medium text-white"
          >
            Get in touch
          </a>
        </nav>
      )}
    </header>
  );
}
