import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { editors, getSection } from "@/lib/news"

export const metadata: Metadata = {
  title: "¿Quiénes somos? — Nueva Visión",
  description:
    "Conoce al equipo editorial de Nueva Visión: los responsables de cada sección del periódico.",
}

const intro =
  "Somos un equipo editorial en etapa de formación profesional, comprometido con el ejercicio de un periodismo ético, analítico e independiente. Nueva Visión nace de la exigencia académica para ofrecer información rigurosa y de impacto. Cada sección está respaldada por el trabajo crítico de nuestros editores; conoce a quienes construyen nuestra plataforma día a día."

export default function QuienesSomosPage() {
  const director = editors.find((e) => e.note === "Director")
  const team = editors.filter((e) => e.note !== "Director")

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-10">
        <header className="border-b-2 border-foreground pb-8">
          <p className="font-meta text-[11px] font-bold uppercase tracking-[0.25em] text-accent">Nueva Visión</p>
          <h1 className="mt-2 font-headline text-4xl font-black md:text-6xl">¿Quiénes somos?</h1>
          <p className="mt-4 max-w-3xl font-body text-lg leading-relaxed text-muted-foreground">{intro}</p>
        </header>

        {/* Dirección editorial destacada */}
        {director && (
          <DirectorCard editor={director} />
        )}

        {/* Equipo editorial */}
        <section aria-labelledby="equipo" className="py-10">
          <div className="mb-6 border-b-2 border-foreground pb-3">
            <h2 id="equipo" className="font-headline text-2xl font-bold">
              Equipo editorial
            </h2>
            <p className="mt-2 max-w-3xl font-body text-sm leading-relaxed text-muted-foreground">
              El orden de nuestros editores acompaña al cintillo de secciones del periódico.
            </p>
          </div>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((editor, index) => {
              const section = getSection(editor.section)
              return (
                <li
                  key={`${editor.section}-${editor.name}`}
                  className="group relative flex flex-col overflow-hidden border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                    <Image
                      src={editor.photo || "/placeholder.svg"}
                      alt={`Retrato de ${editor.name}, ${editor.role}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 384px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <span className="absolute left-0 top-4 bg-primary px-3 py-1 font-meta text-[11px] font-bold uppercase tracking-[0.16em] text-primary-foreground">
                      {section?.name}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-baseline gap-2">
                      <span className="font-headline text-3xl font-black leading-none text-border transition-colors group-hover:text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-headline text-2xl font-bold leading-tight">{editor.name}</h3>
                    </div>
                    <p className="mt-2 font-meta text-sm uppercase tracking-[0.08em] text-muted-foreground">
                      {editor.role}
                    </p>
                    {editor.note && (
                      <p className="mt-2 inline-flex w-fit items-center gap-1 border border-accent/40 bg-accent/10 px-2 py-0.5 font-meta text-[10px] font-bold uppercase tracking-[0.12em] text-accent">
                        {editor.note}
                      </p>
                    )}
                    {section && (
                      <Link
                        href={`/seccion/${section.slug}`}
                        className="mt-4 inline-flex items-center gap-1 font-meta text-[11px] font-semibold uppercase tracking-[0.12em] text-primary transition-colors hover:text-accent"
                      >
                        Ver sección
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                </li>
              )
            })}
          </ul>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

function DirectorCard({ editor }: { editor: (typeof editors)[number] }) {
  const section = getSection(editor.section)
  return (
    <section aria-labelledby="direccion" className="py-10">
      <h2 id="direccion" className="sr-only">
        Dirección
      </h2>
      <div className="grid gap-0 overflow-hidden border border-border bg-card md:grid-cols-[minmax(0,320px)_1fr]">
        <div className="relative aspect-[4/3] w-full bg-muted md:aspect-auto">
          <Image
            src={editor.photo || "/placeholder.svg"}
            alt={`Retrato de ${editor.name}, ${editor.role}`}
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center p-6 md:p-8">
          <p className="inline-flex w-fit items-center gap-1.5 bg-accent px-3 py-1 font-meta text-[11px] font-bold uppercase tracking-[0.16em] text-accent-foreground">
            <Star className="h-3.5 w-3.5" aria-hidden="true" />
            {editor.note}
          </p>
          <h3 className="mt-4 font-headline text-4xl font-black leading-tight md:text-5xl">{editor.name}</h3>
          <p className="mt-2 font-meta text-sm uppercase tracking-[0.1em] text-muted-foreground">{editor.role}</p>
          <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-muted-foreground">
            Lidera la línea editorial de Nueva Visión y coordina la cobertura internacional, velando por el rigor y la
            independencia de cada publicación.
          </p>
          {section && (
            <Link
              href={`/seccion/${section.slug}`}
              className="mt-5 inline-flex w-fit items-center gap-1 font-meta text-[11px] font-semibold uppercase tracking-[0.12em] text-primary transition-colors hover:text-accent"
            >
              Ver sección {section.name}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
