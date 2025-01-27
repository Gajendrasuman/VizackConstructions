import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ViZack Enterprises</h3>
            <p>Your Trusted Partner for Comprehensive Construction Services</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
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
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p>Phone: [Your Contact Number]</p>
            <p>Email: [Your Email Address]</p>
            <p>Address: [Your Office Address]</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary">
                <Facebook />
              </a>
              <a href="#" className="hover:text-primary">
                <Twitter />
              </a>
              <a href="#" className="hover:text-primary">
                <Instagram />
              </a>
              <a href="#" className="hover:text-primary">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2023 ViZack Enterprises & Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

