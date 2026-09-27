import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FeaturedStory } from "@/components/featured-story"
import { NewsGrid } from "@/components/news-grid"
import { getFeatured, getBySection, getSection } from "@/lib/news"

const homeSections = ["politica", "nacional", "economia", "internacional", "espectaculos", "deportes", "cine"]

export default function Page() {
  const featured = getFeatured()

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4">
        <FeaturedStory article={featured} />

        {homeSections.map((slug) => {
          const section = getSection(slug)
          if (!section) return null
          const items = getBySection(slug).filter((article) => slug === "internacional" || !article.featured)
          if (items.length === 0) return null
          return (
            <NewsGrid
              key={slug}
              title={section.name}
              description={section.description}
              href={`/seccion/${slug}`}
              articles={items}
            />
          )
        })}
      </main>
      <SiteFooter />
    </div>
  )
}
