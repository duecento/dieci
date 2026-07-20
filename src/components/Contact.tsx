"use client";

import { useState } from "react";
import Sparkle from "./Sparkle";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");
  const email = ["hello", "@", "dieciai", ".com"].join("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("sent"), 600);
  }

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob h-[24rem] w-[24rem] bg-brand-2/20 top-0 left-1/2 -translate-x-1/2" />
      </div>

      <div className="relative grid gap-12 overflow-hidden rounded-3xl border border-border bg-surface p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:p-12 lg:grid-cols-2">
        <div
          aria-hidden="true"
          className="bg-gradient-brand absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-20 blur-2xl"
        />

        <div className="relative">
          <div className="text-ai-accent mb-4 inline-flex items-center gap-2 rounded-full bg-ai-accent/10 px-4 py-1.5 text-sm font-semibold">
            <Sparkle className="h-4 w-4" />
            Let&apos;s talk
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Let&apos;s build something together
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
            Tell us about your project and we&apos;ll get back to you within
            one business day.
          </p>

          <div className="mt-8 space-y-3 text-sm text-muted">
            <p>
              <span className="font-medium text-foreground">Email: </span>
              <a href={`mailto:${email}`} className="text-brand-1 hover:text-brand-2 cursor-pointer">
                {email}
              </a>
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="relative space-y-4">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <button
            type="submit"
            disabled={status !== "idle"}
            className="bg-gradient-brand w-full cursor-pointer rounded-full px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(79,70,229,0.4)] transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
          >
            {status === "sent"
              ? "Message sent"
              : status === "submitting"
                ? "Sending…"
                : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}
