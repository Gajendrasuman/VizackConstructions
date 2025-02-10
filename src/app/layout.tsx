import "@/styles/globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { meta } from "@/metadata/meta"
export const metadata = meta

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-[#EBE7E1]`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

