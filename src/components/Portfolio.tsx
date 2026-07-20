const PROJECTS = [
  {
    name: "The Victorian",
    tag: "Hospitality booking site",
    description:
      "A boutique short-let booking site with live availability, dynamic pricing, and a reservation flow tailored to a Victorian townhouse rental in Belfast.",
    gradient: "from-indigo-500 via-primary to-violet-600",
  },
  {
    name: "MyStayPerks",
    tag: "Guest-perks SaaS platform",
    description:
      "A perks and offers platform for short-let hosts, letting guests unlock local deals and letting hosts create AI-suggested offers in minutes.",
    gradient: "from-emerald-400 via-accent to-teal-600",
  },
  {
    name: "GallowareOS",
    tag: "System integration platform",
    description:
      "A systems-level platform integrating operational tooling and automation, built for reliability and long-term maintainability.",
    gradient: "from-sky-500 via-blue-600 to-slate-800",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative mx-auto max-w-6xl px-6 py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob h-[22rem] w-[22rem] bg-pink/20 bottom-0 -left-24" />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
          Our work
        </span>
        <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Portfolio
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          A selection of client projects built with AI-assisted development.
        </p>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <div
            key={project.name}
            className="group overflow-hidden rounded-3xl border border-border bg-surface shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
          >
            <div
              className={`relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient}`}
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_60%)]"
              />
              <div className="absolute left-4 top-4 flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
              </div>
              <span className="relative font-heading text-2xl font-bold text-white drop-shadow-sm transition-transform duration-300 group-hover:scale-105">
                {project.name}
              </span>
            </div>
            <div className="p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-primary">
                {project.tag}
              </p>
              <h3 className="mt-1 font-heading text-lg font-semibold text-foreground">
                {project.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
