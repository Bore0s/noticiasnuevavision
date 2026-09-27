import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { RelatedBox } from "@/components/related-box"
import { KeywordBox } from "@/components/keyword-box"
import { articles, getArticle, getSection, getBySection, getRelatedByKeywords } from "@/lib/news"
import type { Article } from "@/lib/news"

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return { title: "Noticia no encontrada — Nueva Visión" }
  return {
    title: `${article.title} — Nueva Visión`,
    description: article.summary,
  }
}

function buildBoxes(article: Article) {
  const used = new Set<string>([article.slug])

  // Right box: noticias que comparten palabras clave con esta noticia.
  const relatedItems = getRelatedByKeywords(article, 4)
  relatedItems.forEach((a) => used.add(a.slug))

  // Bottom box: más noticias de la misma sección aún no mostradas.
  const bottomSection = getSection(article.section)
  const bottomItems = bottomSection
    ? getBySection(bottomSection.slug)
        .filter((a) => !used.has(a.slug))
        .slice(0, 3)
    : []

  return { relatedItems, bottomSection, bottomItems }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const section = getSection(article.section)
  const { relatedItems, bottomSection, bottomItems } = buildBoxes(article)

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-8">
        <Link
          href={section ? `/seccion/${section.slug}` : "/"}
          className="inline-flex items-center gap-2 font-meta text-xs font-semibold uppercase tracking-[0.12em] text-primary transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Volver a {section?.name ?? "portada"}
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          {/* Main column */}
          <div className="min-w-0">
            <article className="mx-auto max-w-3xl">
              <header className="border-b border-border pb-6">
                <Link
                  href={section ? `/seccion/${section.slug}` : "/"}
                  className="font-meta text-[11px] font-bold uppercase tracking-[0.2em] text-primary transition-colors hover:text-accent"
                >
                  {section?.name}
                </Link>
                <h1 className="mt-3 font-headline text-3xl font-black leading-tight text-balance sm:text-4xl md:text-5xl">
                  {article.title}
                </h1>
                <p className="mt-4 font-body text-lg italic leading-relaxed text-muted-foreground">
                  {article.summary}
                </p>
                <p className="mt-5 font-meta text-xs uppercase tracking-[0.1em] text-muted-foreground">
                  Por {article.author} · {article.date} · {article.readTime}
                </p>
              </header>

              <figure className="my-8">
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 768px"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-2 font-meta text-xs text-muted-foreground">
                  {article.imageAlt}
                </figcaption>
              </figure>

              <div className="space-y-6">
                {article.body.map((paragraph, i) => (
                  <p key={i} className="font-body text-lg leading-[1.8] text-pretty text-foreground/90">
                    {paragraph}
                  </p>
                ))}
              </div>

              <p className="mt-10 border-t border-border pt-6 font-meta text-sm text-muted-foreground">
                {article.author} — Nueva Visión
              </p>

              <KeywordBox keywords={article.keywords} />
            </article>

            {/* Bottom box: más noticias de la misma sección */}
            {bottomSection && bottomItems.length > 0 && (
              <div className="mx-auto mt-12 max-w-3xl">
                <RelatedBox
                  eyebrow="Más de la sección"
                  title={bottomSection.name}
                  description={bottomSection.description}
                  href={`/seccion/${bottomSection.slug}`}
                  articles={bottomItems}
                  variant="wide"
                />
              </div>
            )}
          </div>

          {/* Right column box: noticias relacionadas por palabras clave */}
          {relatedItems.length > 0 && (
            <aside className="lg:sticky lg:top-6 lg:self-start">
              <RelatedBox
                eyebrow="Temas relacionados"
                title="Noticias relacionadas"
                description="Otras coberturas que comparten palabras clave con esta noticia."
                href={section ? `/seccion/${section.slug}` : "/"}
                articles={relatedItems}
                variant="sidebar"
              />
            </aside>
          )}
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
