import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import Navbar from "@/components/Navbar"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Rounakk Raaj | Platform Engineer — Distributed Systems & Reliability",
  description: "Platform engineer scaling 100k+ RPS. Focused on concurrency, idempotency, and high-availability failure recovery.",
  keywords: ["Platform Engineer", "Distributed Systems", "System Design", "Kubernetes", "Rust", "Node.js", "Infrastructure", "Reliability"],
  authors: [{ name: "Rounakk Raaj Sabat" }],
  creator: "Rounakk Raaj Sabat",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rounakk.dev",
    title: "Rounakk Raaj | Platform Engineer — Distributed Systems & Reliability",
    description: "Platform engineer scaling 100k+ RPS. Focused on concurrency, idempotency, and high-availability failure recovery.",
    siteName: "Rounakk Raaj Sabat",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rounakk Raaj — Platform Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rounakk Raaj | Platform Engineer — Distributed Systems",
    description: "Platform engineer scaling 100k+ RPS. Focused on concurrency, idempotency, and high-availability failure recovery.",
    images: ["/og-image.png"],
    creator: "@rounakkraaj",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
