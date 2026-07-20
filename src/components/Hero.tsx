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

const OFFERINGS = [
  { label: "Web Apps", color: "from-primary to-primary-dark" },
  { label: "Mobile Apps", color: "from-accent to-emerald-600" },
  { label: "System Apps", color: "from-sky to-blue-600" },
  { label: "AI Integration", color: "from-pink to-fuchsia-600" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative flex min-h-[92vh] items-center overflow-hidden">
      <div className="absolute inset-0 -z-20">
        {SLIDES.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt="Dieci AI team collaborating on software development"
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover transition-opacity duration-1000 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob h-[26rem] w-[26rem] bg-primary/40 -top-32 -left-32" />
        <div className="blob h-[22rem] w-[22rem] bg-accent/30 top-40 right-10" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-28 pb-16">
        <div className="max-w-2xl">
          <div className="glass mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white shadow-sm">
            <Sparkle className="h-4 w-4 animate-float-slow" />
            AI-assisted development studio
          </div>

          <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let&apos;s make your website successful
          </h1>

          <p className="mt-5 max-w-xl text-xl font-medium leading-snug text-white/95">
            We build/improve your website, apps, and systems{" "}
            <span className="bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-emerald-300 bg-clip-text text-transparent">
              faster and smarter
            </span>
            , with AI at the core.
          </p>

          <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/80">
            Dieci AI designs and ships AI-assisted web, mobile, and system
            applications — and helps you weave AI into the systems you
            already run.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {OFFERINGS.map((item) => (
              <span
                key={item.label}
                className={`rounded-full bg-gradient-to-r ${item.color} px-4 py-2 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(0,0,0,0.35)] transition-transform hover:scale-105`}
              >
                {item.label}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="cursor-pointer rounded-full bg-gradient-to-r from-primary to-primary-dark px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(99,102,241,0.55)] transition-transform hover:scale-105"
            >
              Start a project
            </a>
            <a
              href="#portfolio"
              className="glass cursor-pointer rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              See our work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
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
    </section>
  );
}
