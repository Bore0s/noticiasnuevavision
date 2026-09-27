import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import type { Article } from "@/lib/news"

export function NewsCard({ article }: { article: Article }) {
  return (
    <article className="group flex flex-col border border-border bg-card transition-shadow hover:shadow-md">
      <Link href={`/noticia/${article.slug}`} className="relative block aspect-[3/2] overflow-hidden bg-muted">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 384px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-headline text-xl font-bold leading-snug text-balance">
          <Link href={`/noticia/${article.slug}`} className="text-foreground transition-colors hover:text-primary">
            {article.title}
          </Link>
        </h3>
        <p className="summary-clamp-4 mt-3 font-body text-sm leading-relaxed text-pretty text-muted-foreground">
          {article.summary}
        </p>
        <p className="mt-auto pt-4 font-meta text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
          {article.author} · {article.readTime}
        </p>
      </div>
    </article>
  )
}

export function NewsGrid({
  title,
  description,
  href,
  articles,
}: {
  title: string
  description?: string
  href?: string
  articles: Article[]
}) {
  const headingId = `seccion-${title.toLowerCase().replace(/\s+/g, "-")}`

  return (
    <section aria-labelledby={headingId} className="py-8">
      <div className="mb-6 border-b-2 border-foreground pb-3">
        <div className="flex items-baseline justify-between gap-4">
          <h2 id={headingId} className="font-headline text-2xl font-bold">
            {href ? (
              <Link href={href} className="transition-colors hover:text-primary">
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          {href && (
            <Link
              href={href}
              className="inline-flex shrink-0 items-center gap-1 font-meta text-[11px] font-semibold uppercase tracking-[0.12em] text-primary transition-colors hover:text-accent"
            >
              Ver sección
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          )}
        </div>
        {description && (
          <p className="mt-2 max-w-3xl font-body text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <NewsCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  )
}
