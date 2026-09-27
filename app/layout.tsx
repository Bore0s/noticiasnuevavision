import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nueva Visión — Actualidad, Internacional y Cultura',
  description:
    'Nueva Visión: periodismo internacional, nacional, política, economía, deportes y espectáculos. La información más relevante del día, con rigor y profundidad.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="light">
      <body className="antialiased font-body bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
