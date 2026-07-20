const USE_CASES = [
  {
    title: "Websites",
    description:
      "New builds or redesigns of existing sites — fast, modern, and easy for your team to keep updated, with AI-assisted content and SEO baked in.",
    color: "bg-gradient-brand-1",
    icon: (
      <path d="M4 5a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5zM4 9h16M9 21V9" />
    ),
  },
  {
    title: "Custom web applications",
    description:
      "From marketing sites to full SaaS platforms, built with modern frameworks and AI-accelerated workflows to ship faster without cutting corners.",
    color: "bg-gradient-brand-2",
    icon: (
      <path d="M9.75 17L4.5 12l5.25-5M14.25 7l5.25 5-5.25 5" />
    ),
  },
  {
    title: "Mobile apps, iOS & Android",
    description:
      "Native and cross-platform mobile apps designed for real users, backed by AI features like smart search, recommendations, and automation.",
    color: "bg-gradient-brand-3",
    icon: (
      <path d="M9 3h6a2 2 0 012 2v14a2 2 0 01-2 2H9a2 2 0 01-2-2V5a2 2 0 012-2zM11 18h2" />
    ),
  },
  {
    title: "System & backend engineering",
    description:
      "Reliable backends, integrations, and internal tools — architected to scale, monitored properly, and maintainable long after launch.",
    color: "bg-gradient-brand-4",
    icon: (
      <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v3H4V6zM4 15a2 2 0 012-2h12a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3z" />
    ),
  },
  {
    title: "AI integration for existing apps",
    description:
      "Already have a product? We add AI where it counts — chat assistants, content generation, predictive features — into your current stack.",
    color: "bg-gradient-brand-5",
    icon: (
      <path d="M12 2c0 3 1 5.5 2 6.5S19 10 22 10c-3 0-5.5 1-6.5 2S12 15.5 12 18c0-2.5-1-4.5-2-5.5S5 10 2 10c3 0 5.5-1 6.5-2S12 5 12 2z" />
    ),
  },
  {
    title: "AI strategy & consulting",
    description:
      "Not sure where AI fits yet? We audit your workflows and product, then map a practical, ROI-focused plan for adopting it.",
    color: "bg-gradient-brand-6",
    icon: (
      <path d="M9 12l2 2 4-4M12 3l8 4v5c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4z" />
    ),
  },
];

export default function HowWeHelp() {
  return (
    <section id="services" className="relative mx-auto max-w-6xl px-6 py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob h-[24rem] w-[24rem] bg-brand-2/15 top-0 right-0" />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full bg-brand-1/10 px-4 py-1.5 text-sm font-semibold text-brand-1">
          What we do
        </span>
        <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          How we can help you?
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
            className={`group relative overflow-hidden rounded-3xl border border-border bg-surface p-7 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(79,70,229,0.18)] ${
              i === 0 ? "lg:col-span-2" : ""
            }`}
          >
            <div
              className={`${item.color} absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-10 transition-transform duration-300 group-hover:scale-125`}
            />
            <div
              className={`${item.color} relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-[0_6px_16px_rgba(0,0,0,0.15)]`}
            >
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
            <h3 className="relative font-heading text-lg font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="relative mt-2 text-sm leading-relaxed text-muted">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
