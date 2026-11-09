'use client'
import {
  ExpressIcon,
  FirebaseIcon,
  GitIcon,
  GithubIcon,
  JavascriptIcon,
  MatplotlibIcon,
  MongodbIcon,
  NodejsIcon,
  NumpyIcon,
  NextjsIcon,
  PandasIcon,
  PythonIcon,
  ReactIcon,
  SklearnIcon,
  TailwindIcon,
  TypescriptIcon,
} from "@/components/skill-icons";
import { useState } from "react";

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4" aria-hidden="true">
      <path d="M5 12h14m0 0-6-6m6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-violet-500" aria-hidden="true">
      <path d="M12 1.5 13.8 9 21.5 12 13.8 15 12 22.5 10.2 15 2.5 12 10.2 9z" />
    </svg>
  );
}

function BarsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-violet-500" aria-hidden="true">
      <rect x="3" y="13" width="4.5" height="8" rx="1.2" />
      <rect x="9.75" y="7" width="4.5" height="14" rx="1.2" />
      <rect x="16.5" y="3" width="4.5" height="18" rx="1.2" />
    </svg>
  );
}
const skills = [
  { name: "React", color: "#61DAFB", Icon: ReactIcon },
  { name: "Next.js", color: "#ffffff", light: "#000000", Icon: NextjsIcon },
  { name: "TypeScript", color: "#3178C6", Icon: TypescriptIcon },
  { name: "JavaScript", color: "#F7DF1E", Icon: JavascriptIcon },
  { name: "Tailwind CSS", color: "#06B6D4", Icon: TailwindIcon },
  { name: "Node.js", color: "#5FA04E", Icon: NodejsIcon },
  { name: "Express.js", color: "#ffffff", light: "#000000", Icon: ExpressIcon },
  { name: "Python", color: "#3776AB", Icon: PythonIcon },
  { name: "MongoDB", color: "#47A248", Icon: MongodbIcon },
  { name: "Git & GitHub", color: "#e4e4e7", light: "#181717", Icon: GitIcon, Second: GithubIcon },
  { name: "Firebase", color: "#FFCA28", Icon: FirebaseIcon },
  { name: "Scikit-learn", color: "#F7931E", Icon: SklearnIcon },
  { name: "NumPy", color: "#4D77CF", Icon: NumpyIcon },
  // pandas/matplotlib brand blues are very dark, so they get a lightened
  // counterpart for the dark theme (inverse of the white-logo case).
  { name: "Pandas", color: "#A5A9F5", light: "#150458", Icon: PandasIcon },
  { name: "Matplotlib", color: "#6BA5E0", light: "#11557C", Icon: MatplotlibIcon },
];

function LaptopIllustration() {
  return (
    <svg viewBox="0 0 320 300" className="w-full max-w-sm" role="img" aria-label="Illustration of a laptop showing code">
      <defs>
        <linearGradient id="lap-screen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2b1c5e" />
          <stop offset="1" stopColor="#150c33" />
        </linearGradient>
        <linearGradient id="lap-chip" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#a78bfa" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="lap-base" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3b2a75" />
          <stop offset="1" stopColor="#1d1445" />
        </linearGradient>
        <linearGradient id="lap-cube" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8b5cf6" />
          <stop offset="1" stopColor="#6d28d9" />
        </linearGradient>
      </defs>

      <ellipse cx="165" cy="150" rx="135" ry="115" fill="#7c3aed" opacity="0.13" />
      <path d="M64 46l4 11 11 4-11 4-4 11-4-11-11-4 11-4z" fill="#c4b5fd" />
      <path d="M286 148l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="#c4b5fd" opacity="0.8" />

      <rect x="66" y="54" width="196" height="136" rx="14" fill="url(#lap-screen)" stroke="#8b5cf6" strokeWidth="3" />
      <path d="M84 78h34M84 92h22" stroke="#6d28d9" strokeWidth="5" strokeLinecap="round" />
      <text x="164" y="152" textAnchor="middle" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="54" fontWeight="700" fill="#a78bfa">
        &lt;/&gt;
      </text>
      <rect x="228" y="74" width="30" height="30" rx="9" fill="url(#lap-chip)" />
      <text x="243" y="94" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="13" fontWeight="700" fill="#ffffff">
        AI
      </text>

      <path d="M50 196h228l17 30c1.5 2.6-.4 5.9-3.4 5.9H36.4c-3 0-4.9-3.3-3.4-5.9z" fill="url(#lap-base)" stroke="#7c3aed" strokeWidth="2.5" />
      <path d="M138 208h44" stroke="#c4b5fd" strokeWidth="4" strokeLinecap="round" opacity="0.7" />

      <g stroke="#8b5cf6" strokeWidth="2.5" strokeLinejoin="round">
        <path d="M27 207l16-8 16 8-16 8z" fill="#8b5cf6" />
        <path d="M27 207v16l16 8v-16z" fill="#6d28d9" />
        <path d="M59 207v16l-16 8v-16z" fill="url(#lap-cube)" />
        <path d="M264 215l13-6.5 13 6.5-13 6.5z" fill="#8b5cf6" />
        <path d="M264 215v13l13 6.5v-13z" fill="#6d28d9" />
        <path d="M290 215v13l-13 6.5v-13z" fill="url(#lap-cube)" />
        <path d="M42 124l11-5.5 11 5.5-11 5.5z" fill="#8b5cf6" />
        <path d="M42 124v11l11 5.5v-11z" fill="#6d28d9" />
        <path d="M64 124v11l-11 5.5v-11z" fill="url(#lap-cube)" />
      </g>
    </svg>
  );
}

export default function About() {
  const [showAllSkills, setShowAllSkills] = useState(false);

  return (
    <section aria-label="About me and skills" className="relative">
<div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 xl:gap-10">        {/* About Me */}
        <article
          id="about"
          className="relative scroll-mt-24 overflow-hidden rounded-3xl border border-violet-400/25 bg-gradient-to-br from-[#211553] via-[#161036] to-[#0e0926] p-6 sm:p-9 lg:flex lg:items-center lg:p-10 xl:p-12"
        >
          <div aria-hidden="true" className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="relative flex flex-col items-center gap-6 sm:flex-row sm:items-center lg:flex-col xl:flex-row xl:gap-7">
  <div className="hidden shrink-0 sm:block lg:hidden xl:block">
    <LaptopIllustration />
  </div>

  <div className="min-w-0 flex-1 text-center sm:text-left lg:text-center xl:text-left">
    <h2 className="flex items-center justify-center gap-3 text-2xl font-bold text-white sm:justify-start lg:justify-center xl:justify-start xl:text-3xl">
      <StarIcon />
      About Me
    </h2>

    <p className="mt-5 text-base leading-8 text-zinc-300 lg:text-lg">
      I&apos;m Wasima Sultana, a Computer Science and Engineering student at Metropolitan
      University. I enjoy solving problems, exploring new technologies, and building
      projects that make an impact.
    </p>

    <a
      href="#projects"
      className="group mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-600/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-fuchsia-600/30"
    >
      Learn More
      <ArrowRightIcon />
    </a>
  </div>
</div>
        </article>

        {/* My Skills */}
        <div id="skills" className="scroll-mt-24 overflow-hidden rounded-3xl border border-edge bg-foreground/[0.03] p-6 sm:p-9 lg:p-10 xl:p-12">
          <h2 className="flex items-center justify-center gap-3 text-2xl font-bold text-foreground sm:justify-start xl:text-3xl">
  <BarsIcon />
  My Skills
</h2>
          {/* Auto-scrolling slider: the track holds the list twice so the
              -50% keyframe loops seamlessly. Second copy is hidden from AT. */}
          {/* <div className="skills-marquee mt-7 overflow-hidden">
            <div className="skills-track">
              {[0, 1].map((copy) => (
                <ul key={copy} className="flex" aria-hidden={copy === 1 ? "true" : undefined}>
                  {skills.map(({ name, color, light, Icon, Second }) => (
                    <li
                      key={`${copy}-${name}`}
                      className="group mr-3 flex w-[104px] shrink-0 flex-col items-center gap-2.5 rounded-xl border border-edge bg-foreground/[0.04] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:bg-violet-500/10 sm:mr-4 lg:w-[116px] lg:p-4">
                      <span
                        className="skill-logo flex h-11 w-11 items-center justify-center"
                        style={{ "--skill-color": color, "--skill-color-light": light ?? color } as React.CSSProperties}
                      >
                        <Icon className="h-9 w-9 transition-transform group-hover:scale-110" />
                        {Second && <Second className="-ml-3 h-6 w-6 opacity-90 transition-transform group-hover:scale-110" />}
                      </span>
                      <span className="whitespace-nowrap text-center text-xs font-medium text-muted">
                        {name}
                      </span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div> */}
          



<div className="mt-8">
  {/* Mobile & Tablet: Animated Skills */}
  <div className="skills-marquee overflow-hidden lg:hidden">
    <div className="skills-track">
      {[0, 1].map((copy) => (
        <ul
          key={copy}
          className="flex"
          aria-hidden={copy === 1 ? "true" : undefined}
        >
          {skills.map(({ name, color, light, Icon, Second }) => (
            <li
              key={`${copy}-${name}`}
              className="group mr-3 flex w-[104px] shrink-0 flex-col items-center gap-2.5 rounded-xl border border-edge bg-foreground/[0.04] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:bg-violet-500/10"
            >
              <span
                className="skill-logo flex h-11 w-11 items-center justify-center"
                style={{
                  "--skill-color": color,
                  "--skill-color-light": light ?? color,
                } as React.CSSProperties}
              >
                <Icon className="h-9 w-9 transition-transform group-hover:scale-110" />
                {Second && (
                  <Second className="-ml-3 h-6 w-6 opacity-90" />
                )}
              </span>

              <span className="whitespace-nowrap text-center text-xs font-medium text-muted">
                {name}
              </span>
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>

  {/* Desktop: Compact Skills Grid */}
  <div className="hidden lg:block">
    <ul className="grid grid-cols-3 xl:grid-cols-4 gap-2">
      {skills
        .slice(0, showAllSkills ? skills.length : 8)
        .map(({ name, color, light, Icon, Second }) => (
          <li
            key={name}
            className="group flex items-center gap-2 rounded-xl border border-edge bg-foreground/[0.04] px-3 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/50 hover:bg-violet-500/10"
          >
            <span
              className="skill-logo flex h-9 w-5 shrink-0 items-center justify-center"
              style={{
                "--skill-color": color,
                "--skill-color-light": light ?? color,
              } as React.CSSProperties}
            >
              <Icon className="h-7 w-5 transition-transform duration-300 group-hover:scale-110" />
              {Second && (
                <Second className="-ml-2 h-5 w-5 opacity-90" />
              )}
            </span>

            <span className="text-xs font-semibold text-foreground/80 transition-colors group-hover:text-violet-500">
              {name}
            </span>
          </li>
        ))}
    </ul>

    {/* View More / View Less */}
    {skills.length > 8 && (
      <button
        type="button"
        onClick={() => setShowAllSkills((prev) => !prev)}
        aria-expanded={showAllSkills}
        className="mx-auto mt-5 flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2.5 text-sm font-semibold text-violet-500 transition-all duration-300 hover:bg-violet-500/20"
      >
        {showAllSkills ? "Show Less" : "View All Skills"}

        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`h-4 w-4 transition-transform duration-300 ${
            showAllSkills ? "rotate-180" : ""
          }`}
        >
          <path
            d="m6 9 6 6 6-6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    )}
  </div>
</div>




        </div>
      </div>
    </section>
  );
}
