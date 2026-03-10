import type { Metadata } from 'next'
import { Cormorant_Garamond, Cairo } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
})

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'VIOLA — إليكسير الأرغان | شعرك يستاهل الأحسن',
  description: 'شامبو وسوان فيولا بإليكسير الأرغان — بدون سلفات، يرمم الشعر الجاف والتالف. توصيل لكل ولايات الجزائر.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${cormorant.variable} ${cairo.variable}`}>
      <body>{children}</body>
    </html>
  )
}
