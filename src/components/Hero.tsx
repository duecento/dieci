"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Sparkle from "./Sparkle";

const SLIDES = [
  "/images/hero/1181216.jpg",
  "/images/hero/12899162.jpg",
  "/images/hero/36733322.jpg",
  "/images/hero/3931500.jpg",
  "/images/hero/7793678.jpg",
  "/images/hero/7988218.jpg",
];

const OFFERINGS = ["Web Apps", "Mobile Apps", "System Apps", "AI Integration"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-primary">
            <Sparkle className="h-4 w-4" />
            AI-assisted development studio
          </div>

          <h1 className="font-heading text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            We build software,{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              faster and smarter
            </span>
            , with AI at the core.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            Dieci AI designs and ships AI-assisted web, mobile, and system
            applications — and helps you weave AI into the systems you
            already run.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {OFFERINGS.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="cursor-pointer rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Start a project
            </a>
            <a
              href="#portfolio"
              className="cursor-pointer rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-background"
            >
              See our work
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
          {SLIDES.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt="Dieci AI team collaborating on software development"
              fill
              priority={i === 0}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className={`object-cover transition-opacity duration-1000 ease-in-out ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {SLIDES.map((src, i) => (
              <button
                key={src}
                type="button"
                aria-label={`Show slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 cursor-pointer rounded-full transition-all ${
                  i === index ? "w-6 bg-white" : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
