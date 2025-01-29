import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Building2,
  Brush,
  Wrench,
  Users,
  Clock,
  DollarSign,
  Leaf,
  Building,
  PaintBucket,
  Lightbulb,
  Hammer,
} from "lucide-react"
import ServiceCard from "./components/ServiceCard"

const services = [
  {
    icon: Building,
    title: "Planning and Design",
    description:
      "Customized architectural designs, structural planning, and interior/exterior design concepts with 3D visualization.",
  },
  {
    icon: Building2,
    title: "Construction Services",
    description:
      "Full-service construction for residential, commercial, hotels, restaurants, offices, and industrial facilities.",
  },
  {
    icon: Hammer,
    title: "Structural Work",
    description: "Expert RCC structures, brickwork, plastering, and fabrication work for lasting durability.",
  },
  {
    icon: Brush,
    title: "Interior Solutions",
    description:
      "Complete interior services including flooring, false ceilings, modular kitchens, and custom furniture.",
  },
  {
    icon: PaintBucket,
    title: "Exterior Solutions",
    description: "Professional landscaping, exterior painting, paver installation, and fencing solutions.",
  },
  {
    icon: Lightbulb,
    title: "Utilities & Installations",
    description: "Comprehensive plumbing, electrical, HVAC systems, and smart home integrations.",
  },
  {
    icon: Wrench,
    title: "Renovation & Remodeling",
    description: "Expert renovation services for homes, offices, and historical building restoration.",
  },
  {
    icon: Building2,
    title: "Property Services",
    description: "Professional property rental and sales services for residential and commercial properties.",
  },
]

const values = [
  {
    icon: Users,
    title: "Client-Centric Approach",
    description: "We work closely with you to understand your needs and ensure every detail aligns with your vision.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We understand the value of time and are committed to completing projects on schedule.",
  },
  {
    icon: DollarSign,
    title: "Budget-Friendly",
    description: "We offer transparent pricing and tailor-made solutions to fit your budget requirements.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We are committed to environmentally-friendly construction practices and energy-efficient solutions.",
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-yellow relative py-24 overflow-hidden hero-pattern">
        <div className="container mx-auto px-4">
          <div className=" max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Welcome to  <span className="text-secondary"> ViZack </span> Enterprises and Construction
            </h1>
            <p className="text-xl mb-8 text-muted-foreground">
              Your Trusted Partner for Comprehensive Construction Services
            </p>
            <div className="mb-16 flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
            <p className="text-xl -mb-10 mt- text-muted-foreground">
              We are a full-service construction company dedicated to transforming your vision into reality.Whether you need a small renovation, a large-scale commercial project, or anything in between, we provide end-to-end solutions for all your construction needs, including both interior and exterior services.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground">
              Comprehensive construction and property solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground">
              We deliver excellence through our core values and commitment to quality
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <value.icon className="w-12 h-12 mx-auto mb-4 text-secondary" />
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="mb-8">
              Contact us today for a consultation or to request a quote. Let's build something extraordinary together!
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

