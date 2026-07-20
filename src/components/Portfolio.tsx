const PROJECTS = [
  {
    name: "The Victorian",
    tag: "Hospitality booking site",
    description:
      "A boutique short-let booking site with live availability, dynamic pricing, and a reservation flow tailored to a Victorian townhouse rental in Belfast.",
  },
  {
    name: "MyStayPerks",
    tag: "Guest-perks SaaS platform",
    description:
      "A perks and offers platform for short-let hosts, letting guests unlock local deals and letting hosts create AI-suggested offers in minutes.",
  },
  {
    name: "GallowareOS",
    tag: "System integration platform",
    description:
      "Website created from scratch for an upcoming Linux-based OS flavour.",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-dark-bg relative overflow-hidden py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="blob h-[24rem] w-[24rem] bg-brand-2/25 -top-24 left-1/4" />
        <div className="blob h-[20rem] w-[20rem] bg-ai-accent/15 bottom-0 right-10" style={{ animationDelay: "3s" }} />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="bg-ai-accent/15 text-ai-accent inline-block rounded-full px-4 py-1.5 text-sm font-semibold">
            Our work
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Portfolio
          </h2>
          <p className="text-dark-muted mt-4 text-lg leading-relaxed">
            A selection of client projects built with AI-assisted development.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <div
              key={project.name}
              className="border-dark-border bg-dark-surface group overflow-hidden rounded-3xl border shadow-[0_2px_12px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              <div className="bg-gradient-brand relative flex aspect-[16/10] items-center justify-center overflow-hidden">
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
                <p className="text-ai-accent text-xs font-bold uppercase tracking-wide">
                  {project.tag}
                </p>
                <h3 className="mt-1 font-heading text-lg font-semibold text-white">
                  {project.name}
                </h3>
                <p className="text-dark-muted mt-2 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
