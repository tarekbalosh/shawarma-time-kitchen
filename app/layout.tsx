import type { Metadata, Viewport } from 'next'
import './globals.css'
import './advanced-styles.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnimationsProvider from '@/components/AnimationsProvider'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Shawarma Time Kitchen | Authentic Shawarma & Middle Eastern Cuisine',
  description: 'Enjoy authentic shawarma and delicious Middle Eastern cuisine at Shawarma Time Kitchen. Fresh ingredients, fast service, and unforgettable flavors in every bite.',
  keywords: 'shawarma, Middle Eastern food, restaurant, grill, kitchen, takeaway, delivery, authentic cuisine',
  authors: [{ name: 'Shawarma Time Kitchen' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <AnimationsProvider />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
