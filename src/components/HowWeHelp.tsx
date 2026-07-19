const USE_CASES = [
  {
    title: "Custom web applications",
    description:
      "From marketing sites to full SaaS platforms, built with modern frameworks and AI-accelerated workflows to ship faster without cutting corners.",
    icon: (
      <path d="M4 5a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5zM4 9h16M9 21V9" />
    ),
  },
  {
    title: "Mobile apps, iOS & Android",
    description:
      "Native and cross-platform mobile apps designed for real users, backed by AI features like smart search, recommendations, and automation.",
    icon: (
      <path d="M9 3h6a2 2 0 012 2v14a2 2 0 01-2 2H9a2 2 0 01-2-2V5a2 2 0 012-2zM11 18h2" />
    ),
  },
  {
    title: "System & backend engineering",
    description:
      "Reliable backends, integrations, and internal tools — architected to scale, monitored properly, and maintainable long after launch.",
    icon: (
      <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v3H4V6zM4 15a2 2 0 012-2h12a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3z" />
    ),
  },
  {
    title: "AI integration for existing apps",
    description:
      "Already have a product? We add AI where it counts — chat assistants, content generation, predictive features — into your current stack.",
    icon: (
      <path d="M12 2c0 3 1 5.5 2 6.5S19 10 22 10c-3 0-5.5 1-6.5 2S12 15.5 12 18c0-2.5-1-4.5-2-5.5S5 10 2 10c3 0 5.5-1 6.5-2S12 5 12 2z" />
    ),
  },
  {
    title: "AI strategy & consulting",
    description:
      "Not sure where AI fits yet? We audit your workflows and product, then map a practical, ROI-focused plan for adopting it.",
    icon: (
      <path d="M9 12l2 2 4-4M12 3l8 4v5c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4z" />
    ),
  },
];

export default function HowWeHelp() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          How can we help you?
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Whichever stage you&apos;re at, our team pairs hands-on engineering
          with practical AI expertise.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {USE_CASES.map((item, i) => (
          <div
            key={item.title}
            className={`rounded-3xl border border-border bg-surface p-7 shadow-sm transition-transform duration-200 hover:scale-[1.02] ${
              i === 0 ? "lg:col-span-2" : ""
            }`}
          >
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {item.icon}
              </svg>
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
