import type { Metadata } from 'next'
import { Montserrat, Amethysta, Anonymous_Pro } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingElements from '@/components/FloatingElements'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
})

const amethysta = Amethysta({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-serif',
})

const anonymousPro = Anonymous_Pro({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Nasdeem Ventures Sdn Bhd - Malaysia\'s Leading Bumiputera Company',
  description: 'Proudly Malaysia\'s Leading Bumiputera Company in Scheduled Waste Management & Industrial Solutions.',
  keywords: 'waste management, petroleum products, demolition works, palm oil supply, transportation, logistics, Malaysia, Bumiputera',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${amethysta.variable} ${anonymousPro.variable}`}>
      <body className="font-sans">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingElements />
      </body>
    </html>
  )
}

