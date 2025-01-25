import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Image from "next/image"
import Gear from "@/components/Gear"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Multi-Website Showcase",
  description: "Showcasing multiple websites in one page",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gray-50`}>
        <header className="relative overflow-hidden bg-primary py-6">
          <Gear className="absolute -left-16 -top-16 h-48 w-48 animate-gear-spin text-white/10" />
          <Gear className="absolute -right-16 -top-16 h-48 w-48 animate-gear-spin text-white/10" />
          <div className="container relative z-10 mx-auto px-4">
            <div className="flex flex-col items-center space-y-6">{}
              <Image
                src="/image.png"
                alt="Main Logo"
                width={120}
                height={120}
                className="rounded-full bg-white p-2"
              />
              
             
             
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 py-12">{children}</main>
        
      </body>
    </html>
  )
}

