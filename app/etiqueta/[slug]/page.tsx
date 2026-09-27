import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowLeft, Tag } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { NewsCard } from "@/components/news-grid"
import { getAllKeywords, getByKeyword, getKeywordBySlug } from "@/lib/news"

export function generateStaticParams() {
  return getAllKeywords().map((k) => ({ slug: k.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const keyword = getKeywordBySlug(slug)
  if (!keyword) return { title: "Etiqueta no encontrada — Nueva Visión" }
  return {
    title: `${keyword.label} — Nueva Visión`,
    description: `Todas las noticias de Nueva Visión relacionadas con ${keyword.label}.`,
  }
}

export default async function KeywordPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const keyword = getKeywordBySlug(slug)
  if (!keyword) notFound()

  const items = getByKeyword(slug)

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-meta text-xs font-semibold uppercase tracking-[0.12em] text-primary transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Volver a portada
        </Link>

        <header className="mt-6 border-b-2 border-foreground pb-6">
          <p className="flex items-center gap-2 font-meta text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
            <Tag className="h-3.5 w-3.5" aria-hidden="true" />
            Palabra clave
          </p>
          <h1 className="mt-2 font-headline text-4xl font-black md:text-5xl">{keyword.label}</h1>
          <p className="mt-3 max-w-3xl font-body text-lg leading-relaxed text-muted-foreground">
            {items.length === 1
              ? "1 noticia relacionada con este tema."
              : `${items.length} noticias relacionadas con este tema.`}
          </p>
        </header>

        {items.length > 0 ? (
          <div className="grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((article) => (
              <NewsCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <p className="py-16 text-center font-body text-muted-foreground">
            No hay noticias con esta etiqueta por el momento.
          </p>
        )}
      </main>

      <SiteFooter />
    </div>
  )
}
