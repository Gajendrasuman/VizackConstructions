import Link from "next/link"
import { imgLoader } from "./Header"
import Image from "next/image"

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Properties", href: "/properties" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Planning and Design", href: "/services/planning and design" },
    { name: "Construction Services", href: "/services/construction services" },
    { name: "Interior Solutions", href: "/services/interior solutions" },
    { name: "Renovation & Remodeling", href: "/services/renovation & remodeling" },
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
    { name: "Intern With Us", href: "https://forms.gle/au6P4oBjpR6Zswq17" },
    { name: "Career Options", href: "https://forms.gle/rvW3tUsGgnY56HTY8" },
    { name: "Customer Support", href: "http://wa.me/+919826258659" },
  ],
  legals: [
    { name: "Terms of Service", href: "https://docs.google.com/document/d/e/2PACX-1vSM1HbylMnlDx_xcDRx7qC5yui2Dw3zC2hPMnkl8on7sVDCV17SXHCFMpCrenccAiUT6mQCKcdv9hka/pub" },
    { name: "Privacy Policy", href: "https://docs.google.com/document/d/e/2PACX-1vR9iaLnYhKATOLnNyREKE_TER60o2-TMu14efif_6QEIgpclwqcL0Wi64OEele0fkH-2-Gbng94BFD4/pub" },
    { name: "License", href: "/license" },
  ]
}

export default function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                  src={"/logo/t_v.png"}
                  width={50}
                  height={50}
                  alt="logo"
                  loader={imgLoader}
                />
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

          {/* Legals */}
          <div>
            <h3 className="font-semibold mb-4">Legals</h3>
            <ul className="space-y-2">
              {navigation.legals.map((item) => (
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

