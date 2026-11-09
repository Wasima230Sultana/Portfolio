// Evaluated once at module load (build time), so prerendering sees a stable
// value — `new Date()` inside the component body fails Cache Components.
const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-edge bg-foreground/[0.02]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 py-8 sm:px-6 md:grid md:grid-cols-3 md:items-center md:gap-4">
        <div className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-600 text-sm font-extrabold text-white shadow-md shadow-violet-600/40">
            WS
          </span>
          <span className="text-left">
            <span className="block text-[15px] font-bold tracking-tight text-foreground">
              Wasima Sultana
            </span>
            <span className="block text-xs text-muted">Frontend Developer</span>
          </span>
        </div>

        <p className="text-center text-sm text-muted">
          © {year} Wasima Sultana. All rights reserved.
        </p>

        <p className="flex items-center gap-2 text-sm font-medium text-foreground md:justify-end">
          <span>Code</span>
          <span aria-hidden="true" className="text-violet-500">
            •
          </span>
          <span>Create</span>
          <span aria-hidden="true" className="text-violet-500">
            •
          </span>
          <span>Inspire</span>
          <span aria-hidden="true" role="img" aria-label="love">
            ❤️
          </span>
        </p>
      </div>
    </footer>
  );
}
