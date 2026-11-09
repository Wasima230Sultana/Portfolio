import Image from "next/image";

// TODO: replace the placeholder social hrefs (#) with your real profile URLs.

function ArrowRightIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden="true">
      <path d="M5 12h14m0 0-6-6m6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
    </svg>
  );
}


function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 1.5 13.8 9 21.5 12 13.8 15 12 22.5 10.2 15 2.5 12 10.2 9z" />
    </svg>
  );
}

const socials = [
  { label: "GitHub", href: "https://github.com/Wasima230Sultana", icon: <GithubIcon /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/wasima-sultana", icon: <LinkedinIcon /> },
];

export default function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-svh scroll-mt-16 items-center overflow-hidden bg-background">
      {/* Background glows — dark and light variants, swapped by the theme toggle */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 hidden dark:block"
        style={{
          backgroundImage:
            "radial-gradient(70% 60% at 78% 35%, rgba(124, 58, 237, 0.38), transparent 65%), radial-gradient(55% 55% at 10% 85%, rgba(168, 85, 247, 0.16), transparent 70%), linear-gradient(180deg, #150b31 0%, #0d0722 55%, #0a0616 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 block dark:hidden"
        style={{
          backgroundImage:
            "radial-gradient(70% 60% at 78% 35%, rgba(124, 58, 237, 0.16), transparent 65%), radial-gradient(55% 55% at 10% 85%, rgba(168, 85, 247, 0.12), transparent 70%), linear-gradient(180deg, #f4efff 0%, #f8f6ff 55%, #ffffff 100%)",
        }}
      />
      <div aria-hidden="true" className="absolute -left-32 top-1/3 -z-10 h-80 w-80 rounded-full bg-violet-600/25 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-24 right-0 -z-10 h-96 w-96 rounded-full bg-fuchsia-600/15 blur-3xl" />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-4 pb-20 pt-28 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:pb-24 lg:pt-32">
        {/* Left: intro */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-600/30 bg-violet-600/10 px-4 py-1.5 text-sm font-medium text-violet-700 backdrop-blur dark:border-violet-400/30 dark:bg-violet-500/15 dark:text-violet-200">
            <span aria-hidden="true">👋</span> Hello, I&apos;m
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Wasima{" "}
            <span className="bg-gradient-to-r from-violet-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent dark:from-violet-400 dark:via-violet-500 dark:to-fuchsia-500">
              Sultana
            </span>
          </h1>

          <p className="relative mt-4 inline-block text-2xl font-bold italic text-foreground sm:text-3xl">
            Frontend Developer
            <svg
              viewBox="0 0 240 12"
              fill="none"
              className="absolute -bottom-3 left-0 h-3 w-[115%]"
              aria-hidden="true"
            >
              <path
                d="M3 9C60 3 170 2 237 7"
                stroke="url(#role-underline)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="role-underline" x1="0" y1="0" x2="240" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7c3aed" className="dark:[stop-color:#a78bfa]" />
                  <stop offset="1" stopColor="#c026d3" className="dark:[stop-color:#e879f9]" />
                </linearGradient>
              </defs>
            </svg>
          </p>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            I&apos;m a CSE student and passionate frontend developer who loves building modern,
            user-friendly web applications with Next.js, React and TypeScript.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 font-semibold text-white shadow-xl shadow-violet-600/30 transition hover:from-violet-500 hover:to-fuchsia-500"
            >
              View My Projects
              <ArrowRightIcon className="transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-edge bg-foreground/[0.05] px-6 py-3 font-semibold text-foreground backdrop-blur transition hover:bg-foreground/10 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              <MailIcon />
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="grid h-11 w-11 place-items-center rounded-full border border-edge bg-foreground/[0.05] text-muted transition hover:-translate-y-0.5 hover:border-violet-500 hover:text-violet-600 dark:border-white/15 dark:bg-white/5 dark:text-white/80 dark:hover:border-violet-400 dark:hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right: portrait */}
        <div className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-violet-600/35 via-fuchsia-500/20 to-violet-500/10 blur-2xl dark:from-violet-600/45 dark:via-fuchsia-500/25 dark:to-violet-500/10"
          />
          {/* Angular accent shape, like the reference */}
          <div
            aria-hidden="true"
            className="absolute left-0 top-[6%] h-36 w-36 -rotate-12 rounded-[2rem] bg-gradient-to-br from-violet-500/35 to-fuchsia-500/10 blur-[1px] lg:h-44 lg:w-44 dark:from-violet-500/45 dark:to-fuchsia-500/10"
          />
          {/* Orbit ring + sparkles */}
          <div
            aria-hidden="true"
            className="absolute inset-x-[-8%] top-1/2 h-[64%] -translate-y-1/2 rotate-[-16deg] rounded-[50%] border border-violet-400/50 dark:border-white/25"
          />
          <span
            aria-hidden="true"
            className="absolute left-[4%] top-[36%] h-2 w-2 rounded-full bg-violet-500 shadow-[0_0_14px_5px_rgba(139,92,246,0.3)] dark:bg-white dark:shadow-[0_0_14px_5px_rgba(255,255,255,0.55)]"
          />
          <span
            aria-hidden="true"
            className="absolute bottom-[28%] right-[6%] h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_12px_4px_rgba(167,139,250,0.5)] dark:bg-violet-300 dark:shadow-[0_0_12px_4px_rgba(196,181,253,0.7)]"
          />
          <SparkleIcon className="absolute right-[16%] top-[10%] h-5 w-5 rotate-12 text-violet-400 dark:text-white/70" />
          <SparkleIcon className="absolute bottom-[12%] left-[14%] h-3.5 w-3.5 -rotate-12 text-violet-400/80 dark:text-violet-300/80" />

          <div className="float-bob relative mx-auto aspect-square w-[78%] max-w-[400px]">
            <div
              aria-hidden="true"
              className="absolute -inset-[3px] rounded-full bg-gradient-to-br from-violet-400/70 via-fuchsia-500/40 to-violet-600/60 shadow-[0_30px_70px_-20px_rgba(124,58,237,0.75)]"
            />
            <Image
              src="/images/me.png"
              alt="Portrait of Wasima Sultana"
              fill
              sizes="(max-width: 1024px) 78vw, 400px"
              className="rounded-full object-cover object-[center_30%]"
              preload
            />
          </div>

          <div
            aria-hidden="true"
            className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 rotate-2 text-right font-hand text-3xl leading-[1.15] text-violet-700 dark:text-white/90 xl:block"
          >
            Build
            <br />
            Innovate
            <br />
            Grow
            <svg viewBox="0 0 120 10" fill="none" className="ml-auto mt-1 h-2.5 w-24 text-violet-500 dark:text-violet-400">
              <path d="M2 7c30-4 70-4 116-2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
