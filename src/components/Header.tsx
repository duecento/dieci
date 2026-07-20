"use client";

import { useState } from "react";
import Sparkle from "./Sparkle";

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
      <div className="glass flex items-center justify-between rounded-2xl px-5 py-3 shadow-[0_8px_30px_rgba(99,102,241,0.12)]">
        <a href="#home" className="flex items-center gap-1.5 font-heading text-lg font-bold tracking-tight text-foreground">
          <Sparkle className="h-4 w-4 text-primary" />
          Dieci
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">AI</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="cursor-pointer text-sm font-medium text-muted transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden cursor-pointer rounded-full bg-gradient-to-r from-primary to-primary-dark px-5 py-2 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(99,102,241,0.4)] transition-transform hover:scale-105 md:inline-block"
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
        <nav className="glass mt-2 flex flex-col gap-1 rounded-2xl p-3 shadow-sm md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-primary/10 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="cursor-pointer rounded-lg bg-gradient-to-r from-primary to-primary-dark px-3 py-2 text-center text-sm font-semibold text-white"
          >
            Get in touch
          </a>
        </nav>
      )}
    </header>
  );
}
