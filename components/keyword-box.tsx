import Link from "next/link"
import { Tag } from "lucide-react"
import { keywordSlug } from "@/lib/news"

export function KeywordBox({ keywords }: { keywords: string[] }) {
  if (!keywords || keywords.length === 0) return null

  return (
    <section
      aria-labelledby="palabras-clave"
      className="mt-10 border border-border bg-muted/30 p-5"
    >
      <div className="flex items-center gap-2 border-b border-border pb-3">
        <Tag className="h-4 w-4 text-accent" aria-hidden="true" />
        <h2
          id="palabras-clave"
          className="font-meta text-[11px] font-bold uppercase tracking-[0.18em] text-accent"
        >
          Palabras clave
        </h2>
      </div>
      <p className="mt-3 font-body text-sm text-muted-foreground">
        Explora esta noticia y sus temas relacionados:
      </p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {keywords.map((keyword) => (
          <li key={keyword}>
            <Link
              href={`/etiqueta/${keywordSlug(keyword)}`}
              className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1.5 font-meta text-xs font-semibold uppercase tracking-[0.08em] text-foreground/80 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              {keyword}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
