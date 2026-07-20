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
    <section id="home" className="relative overflow-hidden pt-32 pb-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob h-[26rem] w-[26rem] bg-primary/50 -top-32 -left-32" />
        <div className="blob h-[22rem] w-[22rem] bg-accent/40 top-40 -right-24" style={{ animationDelay: "2s" }} />
        <div className="blob h-[18rem] w-[18rem] bg-pink/30 bottom-0 left-1/3" style={{ animationDelay: "4s" }} />
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="glass mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold text-primary shadow-sm">
            <Sparkle className="h-4 w-4 animate-float-slow" />
            AI-assisted development studio
          </div>

          <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            We build software,{" "}
            <span className="bg-gradient-to-r from-primary via-fuchsia-500 to-accent bg-clip-text text-transparent">
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
                key={item.label}
                className={`rounded-full bg-gradient-to-r ${item.color} px-4 py-2 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(0,0,0,0.15)] transition-transform hover:scale-105`}
              >
                {item.label}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="cursor-pointer rounded-full bg-gradient-to-r from-primary to-primary-dark px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(99,102,241,0.45)] transition-transform hover:scale-105"
            >
              Start a project
            </a>
            <a
              href="#portfolio"
              className="glass cursor-pointer rounded-full px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:scale-105"
            >
              See our work
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/30 via-fuchsia-400/20 to-accent/30 blur-xl" />
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/60 shadow-[0_30px_70px_rgba(79,70,229,0.25)]">
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

            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />

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
      </div>
    </section>
  );
}
