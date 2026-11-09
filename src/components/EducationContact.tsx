// TODO: replace the placeholder social hrefs ("#") with your real profile URLs.

const timeline = [
  {
    period: "2023 – Present",
    title: "Bachelor of Science (B.Sc.) in Computer Science and Engineering",
    org: "Metropolitan University, Sylhet, Bangladesh",
    note: "CGPA: 3.96/4.00 | Expected Graduation: 2027",
  },
  {
    period: "2025 (3 Months)",
    title: "Artificial Intelligence Intern",
    org: "Kryzotech, Dhaka, Bangladesh",
  },
];

const email = "wasimasultana230@gmail.com";
const phone = "+8801751686285";
function CapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 shrink-0 text-violet-500" aria-hidden="true">
      <path d="M12 2.5 1.8 7.7 12 12.9l10.2-5.2z" />
      <path
        d="M6 10.7V15c0 1.72 2.69 3.1 6 3.1s6-1.38 6-3.1v-4.3L12 13.9z"
        opacity="0.7"
      />
      <path
        d="M21.4 8.3v6.1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="21.4" cy="15.6" r="1.4" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className="h-6 w-6 shrink-0 text-violet-500"
      aria-hidden="true"
    >
      <path d="M22 2 11 13" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 2 15 22l-4-9-9-4z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="3" />
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

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.79a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.34 1.83.58 2.79.7A2 2 0 0 1 22 16.92Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EnvelopeIllustration() {
  return (
    <svg viewBox="0 0 280 220" className="w-full max-w-[260px]" role="img" aria-label="Illustration of an envelope">
      <defs>
        <linearGradient id="env-front" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#c4b5fd" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="env-flap" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#a78bfa" />
          <stop offset="1" stopColor="#6d28d9" />
        </linearGradient>
        <linearGradient id="env-plane" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ddd6fe" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>

      <ellipse cx="145" cy="120" rx="120" ry="88" fill="#7c3aed" opacity="0.16" />

      {/* dashed orbit */}
      <path
        d="M36 96C70 44 168 26 244 58"
        fill="none"
        stroke="#a78bfa"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="7 9"
        opacity="0.85"
      />
      {/* paper plane at orbit end */}
      <g transform="translate(238 44) rotate(14)">
        <path d="M0 8 30 0 12 26 8 15z" fill="url(#env-plane)" />
        <path d="M0 8l30-8-18 26-4-11z" fill="#8b5cf6" opacity="0.85" />
      </g>

      {/* envelope */}
      <g transform="rotate(-7 140 130)">
        <rect x="66" y="74" width="150" height="102" rx="16" fill="#4c1d95" />
        <rect x="72" y="84" width="138" height="88" rx="13" fill="url(#env-front)" />
        <path d="M72 96 141 143 210 96" fill="none" stroke="#ede9fe" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M72 165l48-38M210 165l-48-38" fill="none" stroke="#6d28d9" strokeWidth="3" strokeLinecap="round" opacity="0.55" />
        <path d="M66 74h150l-14 24H80z" fill="url(#env-flap)" opacity="0.9" />
      </g>

      <path d="M258 96l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="#c4b5fd" />
    </svg>
  );
}

const socials = [
  { label: "GitHub", href: "https://github.com/Wasima230Sultana", icon: <GithubIcon /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/wasima-sultana", icon: <LinkedinIcon /> },
  { label: "Email", href: `mailto:${email}`, icon: <MailIcon className="h-5 w-5" /> },
];

export default function EducationContact() {
  return (
    <section aria-label="Education, experience and contact" className="relative">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8">
        {/* Education & Experience */}
        <article
          id="experience"
          className="scroll-mt-24 rounded-3xl border border-edge bg-foreground/[0.03] p-7 sm:p-9"
        >
          <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground sm:text-[26px]">
            <CapIcon />
            Education &amp; Experience
          </h2>

          <ol className="relative mt-8 space-y-7">
            <span
              aria-hidden="true"
              className="absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-500 via-violet-500/40 to-transparent"
            />
            {timeline.map((item) => (
              <li key={item.title} className="grid grid-cols-[12px_1fr] gap-x-4 sm:gap-x-5">
                <span
                  aria-hidden="true"
                  className="relative z-10 mt-1.5 h-3 w-3 rounded-full bg-violet-500 shadow-[0_0_12px_3px_rgba(139,92,246,0.45)] ring-4 ring-violet-500/15"
                />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-violet-400">{item.period}</p>
                  <div className="mt-1.5 sm:flex sm:gap-5">
                    <p className="text-[15px] font-bold leading-snug text-foreground sm:w-40 sm:shrink-0">
                      {item.title}
                    </p>
                    <div className="mt-1 sm:mt-0">
                      <p className="text-sm text-muted">{item.org}</p>
                      {item.note && (
                        <p className="mt-1 text-sm text-muted">{item.note}</p>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </article>

        {/* Contact Me */}
        <article
          id="contact"
          className="relative scroll-mt-24 overflow-hidden rounded-3xl border border-edge bg-foreground/[0.03] p-7 sm:p-9"
        >
          <div aria-hidden="true" className="absolute -right-10 top-1/2 hidden -translate-y-1/2 lg:block">
            <EnvelopeIllustration />
          </div>

          <div className="relative lg:max-w-[62%]">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground sm:text-[26px]">
              <SendIcon />
              Contact Me
            </h2>

            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              Let&apos;s connect! Feel free to reach out for collaboration, opportunities, or just to
              say hi.
            </p>

            {/* <ul className="mt-6 space-y-3">
              <li>
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-3 text-[15px] font-medium text-foreground transition hover:text-violet-500 dark:hover:text-violet-400"
                >
                  <MailIcon className="h-4 w-4 shrink-0 text-violet-500" />
                  {email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-[15px] font-medium text-foreground">
                <span className="shrink-0 text-violet-500">
                  <PinIcon />
                </span>
                Sylhet, Bangladesh
              </li>
            </ul> */}
            <ul className="mt-6 space-y-4">
  {/* Email */}
  <li>
    <a
      href={`mailto:${email}`}
      className="inline-flex items-center gap-3 text-sm font-medium text-foreground transition hover:text-violet-500"
    >
      <MailIcon className="h-4 w-4 shrink-0 text-violet-500" />
      {email}
    </a>
  </li>

  {/* Phone */}
  <li>
    <a
      href={`tel:${phone}`}
      className="inline-flex items-center gap-3 text-sm font-medium text-foreground transition hover:text-violet-500"
    >
      <span className="shrink-0 text-violet-500">
        <PhoneIcon />
      </span>
      {phone}
    </a>
  </li>

  {/* Location */}
  <li className="flex items-center gap-3 text-sm font-medium text-foreground">
    <span className="shrink-0 text-violet-500">
      <PinIcon />
    </span>
    Sylhet, Bangladesh
  </li>
</ul>

            <div className="mt-7 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-edge bg-foreground/[0.05] text-muted transition hover:-translate-y-0.5 hover:border-violet-400/50 hover:text-violet-500 dark:hover:text-violet-400"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <a
                href={`mailto:${email}`}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 font-semibold text-white shadow-xl shadow-violet-600/30 transition hover:from-violet-500 hover:to-fuchsia-500"
              >
                Send Message
                <ArrowRightIcon className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
