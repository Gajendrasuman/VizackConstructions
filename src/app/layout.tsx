"use client"
import  {metadata}  from "./metadata"
import "@/styles/globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { meta } from "@/metadata/meta"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Loader from "./components/Loader"


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setLoading(true) 
    const timer = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <html lang="en">
      <body className="bg-[#EBE7E1]">
        {loading && <Loader />}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
