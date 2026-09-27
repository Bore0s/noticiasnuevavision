import Link from "next/link"
import Image from "next/image"
import type { Article } from "@/lib/news"
import { getSection } from "@/lib/news"

export function FeaturedStory({ article }: { article: Article }) {
  const section = getSection(article.section)

  return (
    <section aria-labelledby="portada-heading" className="border-b border-border pb-10 pt-6">
      <h2
        id="portada-heading"
        className="mb-5 font-meta text-xs font-bold uppercase tracking-[0.25em] text-accent"
      >
        Primera plana
      </h2>

      <Link href={`/noticia/${article.slug}`} className="group grid items-center gap-6 md:grid-cols-2 md:gap-10">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted md:aspect-[4/3]">
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.imageAlt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>

        <div className="py-2 text-left md:py-6">
          <span className="font-meta text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
            {section?.name ?? "Actualidad"}
          </span>
          <h3 className="mt-3 font-headline text-3xl font-black leading-tight text-balance text-foreground transition-colors group-hover:text-primary sm:text-4xl md:text-5xl">
            {article.title}
          </h3>
          <p className="summary-clamp-4 mt-4 font-body text-lg leading-relaxed text-pretty text-muted-foreground">
            {article.summary}
          </p>
          <p className="mt-4 font-meta text-xs uppercase tracking-[0.1em] text-muted-foreground">
            {article.author} · {article.date}
          </p>
        </div>
      </Link>
    </section>
  )
}
