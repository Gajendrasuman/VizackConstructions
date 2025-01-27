import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          ViZack Enterprises
        </Link>
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/services" className="hover:underline">
              Services
            </Link>
          </li>
          <li>
            <Link href="/properties" className="hover:underline">
              Properties
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
        <Button asChild>
          <Link href="/contact">Get a Quote</Link>
        </Button>
      </nav>
    </header>
  )
}

