import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Brush, Wrench, Truck } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to ViZack Enterprises & Construction</h1>
        <p className="text-xl mb-8">Your Trusted Partner for Comprehensive Construction Services</p>
        <Button asChild size="lg">
          <Link href="/contact">Get Started</Link>
        </Button>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardHeader>
              <Building className="w-12 h-12 mb-4 text-primary" />
              <CardTitle>Planning and Design</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Customized architectural designs and structural planning</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Truck className="w-12 h-12 mb-4 text-primary" />
              <CardTitle>Construction Services</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Residential, commercial, and industrial construction</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Brush className="w-12 h-12 mb-4 text-primary" />
              <CardTitle>Interior Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Flooring, false ceilings, and custom cabinetry</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Wrench className="w-12 h-12 mb-4 text-primary" />
              <CardTitle>Maintenance Contracts</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Regular inspections and on-call support for businesses</CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Client-Centric Approach</h3>
            <p>We work closely with you to understand your needs and ensure every detail aligns with your vision.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
            <p>Our team of skilled professionals brings years of experience and expertise to every project.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
            <p>
              We use the finest materials and follow stringent quality control measures to deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-8">
          Contact us today for a consultation or to request a quote. Let's build something extraordinary together!
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </section>
    </div>
  )
}

