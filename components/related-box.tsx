import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import type { Article } from "@/lib/news"

export function RelatedBox({
  eyebrow,
  title,
  description,
  href,
  articles,
  variant = "sidebar",
}: {
  eyebrow: string
  title: string
  description: string
  href: string
  articles: Article[]
  variant?: "sidebar" | "wide"
}) {
  return (
    <section className="border border-border bg-muted/30">
      <div className="border-b border-border bg-muted/60 px-5 py-4">
        <p className="font-meta text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
        <h2 className="mt-1 font-headline text-xl font-bold leading-snug">
          <Link href={href} className="text-foreground transition-colors hover:text-primary">
            {title}
          </Link>
        </h2>
        <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>

      <ul className={variant === "wide" ? "divide-y divide-border" : "divide-y divide-border"}>
        {articles.map((article) => (
          <li key={article.slug}>
            <Link href={`/noticia/${article.slug}`} className="group flex gap-4 p-4 transition-colors hover:bg-muted/50">
              <div className="relative aspect-square w-20 shrink-0 overflow-hidden bg-muted">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.imageAlt}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <h3 className="font-headline text-base font-bold leading-snug text-foreground transition-colors group-hover:text-primary text-balance">
                  {article.title}
                </h3>
                <p className="mt-1 font-meta text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
                  {article.author}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div className="border-t border-border px-5 py-3">
        <Link
          href={href}
          className="inline-flex items-center gap-1 font-meta text-[11px] font-semibold uppercase tracking-[0.12em] text-primary transition-colors hover:text-accent"
        >
          Ver toda la sección
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
