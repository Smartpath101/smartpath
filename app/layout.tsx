import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Toaster } from 'react-hot-toast';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Smart Path',
  description: 'Best educationl path',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={inter.className} lang="en">
      <body className="pt-20" >
      <Toaster />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
