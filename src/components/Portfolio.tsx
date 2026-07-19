const PROJECTS = [
  {
    name: "The Victorian",
    tag: "Hospitality booking site",
    description:
      "A boutique short-let booking site with live availability, dynamic pricing, and a reservation flow tailored to a Victorian townhouse rental in Belfast.",
    gradient: "from-indigo-500 to-violet-600",
  },
  {
    name: "MyStayPerks",
    tag: "Guest-perks SaaS platform",
    description:
      "A perks and offers platform for short-let hosts, letting guests unlock local deals and letting hosts create AI-suggested offers in minutes.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    name: "GallowareOS",
    tag: "System integration platform",
    description:
      "A systems-level platform integrating operational tooling and automation, built for reliability and long-term maintainability.",
    gradient: "from-slate-700 to-slate-900",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
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
            className="overflow-hidden rounded-3xl border border-border bg-surface shadow-sm transition-transform duration-200 hover:scale-[1.02]"
          >
            <div
              className={`relative flex aspect-[16/10] items-center justify-center bg-gradient-to-br ${project.gradient}`}
            >
              <div className="absolute left-4 top-4 flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
              </div>
              <span className="font-heading text-2xl font-semibold text-white/95">
                {project.name}
              </span>
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
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
