import type React from "react"
import type { Metadata } from "next"
import { Commissioner } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const commissioner = Commissioner({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-commissioner",
})

export const metadata: Metadata = {
  title: "Кодексис - ИИ-Юрист помощник 24/7",
  description:
    "Комплексная защита ваших интересов. От анализа рисков до проверки контрагентов — доверьте сложную работу искусственному интеллекту.",
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon.ico-x81Fsv0WpiFFIsp7e0nVv2A4ElnqIb.x-icon",
    apple: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apple-icon-wZVXbZlbACKIj7WpxTyLDpvZfXaEQj.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${commissioner.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
