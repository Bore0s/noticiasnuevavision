import Link from "next/link"
import { sections } from "@/lib/news"

export function SiteFooter() {
  return (
    <footer className="mt-4 border-t border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-10 text-center">
        <p className="font-masthead text-3xl text-foreground">Nueva Visión</p>
        <nav
          aria-label="Secciones"
          className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-meta text-[11px] uppercase tracking-[0.14em] text-muted-foreground"
        >
          {sections.map((s) => (
            <Link key={s.slug} href={`/seccion/${s.slug}`} className="transition-colors hover:text-primary">
              {s.name}
            </Link>
          ))}
          <Link href="/quienes-somos" className="transition-colors hover:text-primary">
            ¿Quiénes somos?
          </Link>
        </nav>
        <p className="mt-6 font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nueva Visión. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
