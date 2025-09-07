import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Clin d\'oeil SPA - Massage Casablanca | Hammam Casablanca | Spa Casablanca',
  description: 'Découvrez Clin d\'oeil SPA à Casablanca - Services de massage professionnel, hammam traditionnel et soins spa de luxe. Réservez votre moment de détente dans notre centre de bien-être.',
  keywords: 'spa casablanca, massage casablanca, hammam casablanca, spa massage casablanca, bien-être casablanca, soins corporels',
  authors: [{ name: 'Clin d\'oeil SPA' }],
  openGraph: {
    title: 'Clin d\'oeil SPA - Votre havre de paix à Casablanca',
    description: 'Massage, Hammam et Spa de luxe à Casablanca',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}