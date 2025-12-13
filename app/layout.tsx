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
  title: "Rounakk Raaj Sabat | AI Backend & Systems Engineer",
  description: "Senior AI Backend & Systems Engineer specializing in scalable GenAI infrastructure, distributed systems, and agentic workflows.",
  keywords: ["AI Engineer", "Backend Engineer", "Systems Engineer", "Rust", "NestJS", "LangChain", "GenAI", "Distributed Systems"],
  authors: [{ name: "Rounakk Raaj Sabat" }],
  creator: "Rounakk Raaj Sabat",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rounakk.dev",
    title: "Rounakk Raaj Sabat | AI Backend & Systems Engineer",
    description: "Building scalable GenAI infrastructure, LLM workflows, and distributed backend systems.",
    siteName: "Rounakk Raaj Sabat Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rounakk Raaj Sabat - AI Backend & Systems Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rounakk Raaj Sabat | AI Backend & Systems Engineer",
    description: "Building scalable GenAI infrastructure, LLM workflows, and distributed backend systems.",
    images: ["/og-image.png"],
    creator: "@rounakkraaj", // assuming this handle, or user can update
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
