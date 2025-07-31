import AppProvidersWrapper from '@/components/wrappers/AppProvidersWrapper'
import type { Metadata } from 'next'
import { Figtree, Nunito_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import 'aos/dist/aos.css'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import 'bootstrap/dist/css/bootstrap.min.css'

import '@/assets/scss/main.scss'
import TopBar from '@/components/layout/TopBar'
import CTA from '@/components/CTA'
import Footer from '@/components/layout/Footer/Footer'

const Nunito = Nunito_Sans({
  display: 'swap',
  style: ['normal'],
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
})

const Figtrees = Figtree({
  display: 'swap',
  style: ['normal'],
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: {
    default: "AJPR World",
    template: "%s- AJPR World"
  },
  description: "AJPR WORLD offers professional web development, digital solutions, and smart design services to help businesses grow online.",

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${Nunito.className} ${Figtrees.className}`}>
        <AppProvidersWrapper>
          <TopBar />{children}
          <CTA />
          <Analytics />
          <SpeedInsights />
          <Footer /></AppProvidersWrapper>
      </body>
    </html>
  )
}
