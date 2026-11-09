import Image from "next/image";
import { GithubIcon } from "@/components/skill-icons";

const projects = [
  {
    title: "Kindora",
    description: "A community volunteering platform to create and join social events.",
    image: "/images/Kindora.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "MongoDB Atlas", "Better Auth", "Vercel"],
    live: "https://kindora-client-ten.vercel.app/",
    github: "https://github.com/Wasima230Sultana/Kindora_client",
  },
  {
    title: "ShadowPrep",
    description: "A study preparation platform with mock tests, notes and progress tracking.",
    image: "/images/ShadowPrep.png",
    tags: ["React", "JavaScript", "Tailwind", "Firebase Authentication", "React Speech Recognition","MongoDB Atlas", "Render"],
    live: "https://shadowprep-3164b.web.app/",
    github: "https://github.com/Wasima230Sultana/shadowPrep",
  },
  {
    title: "Bazar Dor",
    description: "Check local commodity prices across Bangladesh.",
    image: "/images/BazarDor.png",
    tags: ["Next.js", "React", "Tailwind","TypeScript", "Better Auth", "MongoDB", "Vercel"],
    live: "https://bazar-dor-cyan.vercel.app/",
    github: "https://github.com/Wasima230Sultana/Bazar-Dor",
  },
];

function GridIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-violet-500" aria-hidden="true">
      <rect x="3" y="3" width="8" height="8" rx="2" />
      <rect x="13" y="3" width="8" height="8" rx="2" />
      <rect x="3" y="13" width="8" height="8" rx="2" />
      <rect x="13" y="13" width="8" height="8" rx="2" />
    </svg>
  );
}

function ArrowRightIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden="true">
      <path d="M5 12h14m0 0-6-6m6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4" aria-hidden="true">
      <path d="M14 4h6v6M20 4 10 14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const externalProps = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function FeaturedProjects() {
  return (
    <section id="projects" aria-labelledby="featured-heading" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-edge bg-foreground/[0.03] p-6 sm:p-9">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-violet-400/30 bg-violet-500/15">
                <GridIcon />
              </span>
              <div>
                <h2 id="featured-heading" className="text-2xl font-bold text-foreground sm:text-[26px]">
                  Featured Projects
                </h2>
                <p className="mt-1 text-sm text-muted">Some of my recent work</p>
              </div>
            </div>
            <a
              href="https://github.com/Wasima230Sultana?tab=repositories"
              {...externalProps}
              className="group inline-flex items-center gap-2 pt-2 text-sm font-semibold text-foreground transition hover:text-violet-500 dark:hover:text-violet-400"
            >
              View All Projects
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <li key={project.title} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-edge bg-foreground/[0.04] transition hover:-translate-y-1 hover:border-violet-400/50 hover:shadow-xl hover:shadow-violet-600/10">
                  <a
                    href={project.live}
                    {...externalProps}
                    aria-label={`${project.title} live demo`}
                    className="relative block aspect-[16/9] overflow-hidden bg-black/40"
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </a>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-md border border-violet-600/25 bg-violet-600/10 px-2.5 py-1 text-xs font-medium text-violet-700 dark:border-violet-400/30 dark:bg-violet-500/10 dark:text-violet-200"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap items-center gap-3 pt-1">
                      <a
                        href={project.live}
                        {...externalProps}
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition hover:from-violet-500 hover:to-fuchsia-500"
                      >
                        Live Demo
                        <ExternalIcon />
                      </a>
                      <a
                        href={project.github}
                        {...externalProps}
                        className="inline-flex items-center gap-2 rounded-full border border-edge bg-foreground/[0.05] px-4 py-2 text-sm font-semibold text-foreground transition hover:border-violet-400/50 hover:text-violet-600 dark:hover:border-violet-400/50 dark:hover:text-violet-300"
                      >
                        <GithubIcon className="h-4 w-4" />
                        GitHub
                      </a>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
