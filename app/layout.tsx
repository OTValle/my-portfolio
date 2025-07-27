import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Owel Valle",
  description:
    "Personal portfolio of Owel Valle, a passionate Frontend Developer specializing in React.js, JavaScript, and modern web technologies.",
  keywords: "Owel Valle, Frontend Developer, React.js, JavaScript, Web Developer, Portfolio",
  authors: [{ name: "Owel Valle" }],
  openGraph: {
    title: "Owel Valle - Frontend Developer",
    description: "Personal portfolio showcasing web development projects and skills",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
