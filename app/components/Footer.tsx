import Link from "next/link"
import { Building } from "lucide-react"

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Properties", href: "/properties" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Planning and Design", href: "/services" },
    { name: "Construction Services", href: "/services" },
    { name: "Interior Solutions", href: "/services" },
    { name: "Renovation & Remodeling", href: "/services" },
  ],
  properties: [
    { name: "Residential Properties", href: "/properties" },
    { name: "Commercial Properties", href: "/properties" },
    { name: "Industrial Properties", href: "/properties" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Process", href: "/about" },
    { name: "Sustainability", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Building className="h-8 w-8 text-secondary" />
              <span className="text-2xl font-bold">ViZack</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-sm">
              Your trusted partner for comprehensive construction services. Building dreams with precision and
              excellence.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-muted-foreground hover:text-secondary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Properties */}
          <div>
            <h3 className="font-semibold mb-4">Properties</h3>
            <ul className="space-y-2">
              {navigation.properties.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-muted-foreground hover:text-secondary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-muted-foreground hover:text-secondary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} ViZack Enterprises & Construction. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

