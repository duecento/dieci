"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");
  const email = ["hello", "@", "dieciai", ".com"].join("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("sent"), 600);
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 rounded-3xl border border-border bg-surface p-8 shadow-sm sm:p-12 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Let&apos;s build something together
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
            Tell us about your project and we&apos;ll get back to you within
            one business day.
          </p>

          <div className="mt-8 space-y-3 text-sm text-muted">
            <p>
              <span className="font-medium text-foreground">Email: </span>
              <a href={`mailto:${email}`} className="cursor-pointer hover:text-foreground">
                {email}
              </a>
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
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
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
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
              className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
            />
          </div>

          <button
            type="submit"
            disabled={status !== "idle"}
            className="w-full cursor-pointer rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-70"
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
