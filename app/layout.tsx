import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ViZack Enterprises & Construction",
  description: "Building dreams with precision and excellence",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1B2537]`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

