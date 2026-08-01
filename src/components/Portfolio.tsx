import Image from "next/image";
import Sparkle from "./Sparkle";

const PROJECTS = [
  {
    name: "The Victorian",
    category: "Online booking",
    tags: ["Calendar API sync", "Website design", "AEO/SEO optimisation"],
    aiTools: ["Claude Code", "Higgsfield", "Claude Cowork", "Copilot"],
    description:
      "A boutique short-let booking site with live availability, dynamic pricing, and a reservation flow tailored to a Victorian townhouse rental in Belfast.",
    image: "/images/portfolio/thevictorian.webp",
    url: "https://victorianbelfast.com",
  },
  {
    name: "MyStayPerks",
    category: "Business app",
    tags: ["Greenfield", "AI content generation", "Hybrid mobile app"],
    aiTools: ["Claude Code", "Gemini Flash", "Gemini Flash-lite"],
    description:
      "A perks and offers platform for short-let hosts, letting guests unlock local deals and letting hosts create AI-suggested offers in minutes.",
    image: "/images/portfolio/mystayperks.png",
    url: "https://mystayperks.com",
  },
  {
    name: "GallowareOS",
    category: "Website",
    tags: ["Web design", "Logo creation", "AEO/SEO optimisation"],
    aiTools: ["Claude Code"],
    description:
      "Website created from scratch for an upcoming Linux-based OS flavour.",
    image: "/images/portfolio/galloware.webp",
    url: "https://galloware.net",
  },
  {
    name: "Comfort Studio",
    category: "IT/AI Consulting",
    tags: ["Website review", "Manual & AI-assisted evaluation", "SEO/AEO analysis"],
    aiTools: ["Claude Cowork"],
    description:
      "Assignment to generate a report for Comfort Studio's e-commerce website: identifying issues, evaluating risks, and suggesting improvements and AI enhancements.",
    image: "/images/portfolio/comfortstudio.png",
    url: null,
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

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <div
              key={project.name}
              className="border-dark-border bg-dark-surface group overflow-hidden rounded-3xl border shadow-[0_2px_12px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Opens in new tab"
                  className="relative block aspect-[24/9] cursor-pointer overflow-hidden"
                >
                  <Image
                    src={project.image}
                    alt="Opens in new tab"
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
                  />
                  <Sparkle className="absolute left-3 top-2.5 h-4 w-4 text-white drop-shadow" />
                </a>
              ) : (
                <div
                  title="Confidential report - NDA agreement"
                  className="relative aspect-[24/9] overflow-hidden"
                >
                  <Image
                    src={project.image}
                    alt="Confidential report - NDA agreement"
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
                  />
                  <Sparkle className="absolute left-3 top-2.5 h-4 w-4 text-white drop-shadow" />
                </div>
              )}
              <div className="p-6">
                <p className="text-ai-accent text-xs font-bold uppercase tracking-wide">
                  {project.category}
                </p>
                <h3 className="mt-1 font-heading text-lg font-semibold text-white">
                  {project.name}
                </h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-ai-accent/10 border-ai-accent/30 text-ai-accent rounded-full border px-2.5 py-1 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.aiTools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-gradient-brand rounded-full px-2.5 py-1 text-xs font-medium text-white"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <p className="text-dark-muted mt-3 text-sm leading-relaxed">
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
