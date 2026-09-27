import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { NewsCard } from "@/components/news-grid"
import { sections, getSection, getBySection, getEditorForSection } from "@/lib/news"

export function generateStaticParams() {
  return sections.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const section = getSection(slug)
  if (!section) return { title: "Sección no encontrada — Nueva Visión" }
  return {
    title: `${section.name} — Nueva Visión`,
    description: section.description,
  }
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const section = getSection(slug)
  if (!section) notFound()

  const items = getBySection(slug)
  const editor = getEditorForSection(slug)

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-10">
        <header className="border-b-2 border-foreground pb-6">
          <p className="font-meta text-[11px] font-bold uppercase tracking-[0.25em] text-accent">Sección</p>
          <h1 className="mt-2 font-headline text-4xl font-black md:text-5xl">{section.name}</h1>
          <p className="mt-3 max-w-3xl font-body text-lg leading-relaxed text-muted-foreground">
            {section.description}
          </p>
          {editor && (
            <div className="mt-5 flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-muted">
                <Image src={editor.photo || "/placeholder.svg"} alt={editor.name} fill sizes="40px" className="object-cover" />
              </div>
              <p className="font-meta text-xs uppercase tracking-[0.1em] text-muted-foreground">
                Edita esta sección: <span className="text-foreground">{editor.name}</span>
              </p>
            </div>
          )}
        </header>

        {items.length > 0 ? (
          <div className="grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((article) => (
              <NewsCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <p className="py-16 text-center font-body text-muted-foreground">
            No hay noticias en esta sección por el momento.
          </p>
        )}
      </main>

      <SiteFooter />
    </div>
  )
}
