import Link from "next/link"

const nav = [
  { label: "Política", href: "/seccion/politica" },
  { label: "Nacional", href: "/seccion/nacional" },
  { label: "Economía", href: "/seccion/economia" },
  { label: "Internacional", href: "/seccion/internacional" },
  { label: "Espectáculos", href: "/seccion/espectaculos" },
  { label: "Deportes", href: "/seccion/deportes" },
  { label: "Cine", href: "/seccion/cine" },
  { label: "¿Quiénes somos?", href: "/quienes-somos" },
]

export function SiteHeader() {
  const today = "Martes, 29 de septiembre de 2026"

  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between border-b border-border/60 py-2 font-meta text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
          <span>{today}</span>
          <span className="hidden sm:inline">Edición Español</span>
        </div>

        <div className="flex flex-col items-center gap-1 py-6 text-center">
          <Link
            href="/"
            className="font-masthead text-5xl font-bold leading-none tracking-tight text-foreground sm:text-6xl md:text-7xl"
          >
            Nueva Visión
          </Link>
          <p className="font-meta text-sm italic text-muted-foreground">
            Información clara, visión nueva
          </p>
        </div>

        <nav
          aria-label="Secciones"
          className="flex items-center justify-center gap-x-6 gap-y-2 flex-wrap border-t border-border py-3 font-meta text-xs font-semibold uppercase tracking-[0.1em]"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
