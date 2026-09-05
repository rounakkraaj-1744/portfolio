import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Fraunces, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import NavbarWrapper from "@/components/NavbarWrapper"
import ThemeProvider from "@/components/ThemeProvider"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Rounakk | Backend / Systems Engineer",
  description: "Building reliable systems at scale. Distributed systems, real-time data pipelines, high-concurrency APIs, and cloud infrastructure built for impact.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${fraunces.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#F7F5F0] text-[#111111] selection:bg-[#111] selection:text-white`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NavbarWrapper />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
