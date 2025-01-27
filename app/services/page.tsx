import Hero from "../components/Hero"
import ServiceCard from "../components/ServiceCard"
import { Building, Brush, Wrench, Building2, PaintBucket, Lightbulb, Hammer } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Building,
    title: "Planning and Design",
    description:
      "Customized architectural designs, structural planning, and interior/exterior design concepts with 3D visualization.",
    features: [
      "Customized architectural designs",
      "Structural planning",
      "Interior and exterior design concepts",
      "3D rendering and visualization",
    ],
  },
  {
    icon: Building2,
    title: "Construction Services",
    description:
      "Full-service construction for residential, commercial, hotels, restaurants, offices, and industrial facilities.",
    features: [
      "Residential buildings",
      "Commercial buildings",
      "Hotels and restaurants",
      "Office spaces and retail stores",
      "Industrial facilities",
    ],
  },
  {
    icon: Hammer,
    title: "Structural Work",
    description: "Expert RCC structures, brickwork, plastering, and fabrication work for lasting durability.",
    features: [
      "Reinforced Cement Concrete (RCC) structures",
      "Brickwork and masonry",
      "Plastering",
      "Fabrication work",
    ],
  },
  {
    icon: Brush,
    title: "Interior Solutions",
    description:
      "Complete interior services including flooring, false ceilings, modular kitchens, and custom furniture.",
    features: [
      "Flooring (tiles, hardwood, laminate)",
      "False ceilings",
      "Modular kitchens",
      "Custom cabinetry and furniture",
      "Painting and wall treatments",
    ],
  },
  {
    icon: PaintBucket,
    title: "Exterior Solutions",
    description: "Professional landscaping, exterior painting, paver installation, and fencing solutions.",
    features: ["Landscaping and garden development", "Exterior painting", "Paver installation", "Fencing and gates"],
  },
  {
    icon: Lightbulb,
    title: "Utilities & Installations",
    description: "Comprehensive plumbing, electrical, HVAC systems, and smart home integrations.",
    features: ["Plumbing and sanitation", "Electrical wiring and fixtures", "HVAC systems", "Smart home integrations"],
  },
  {
    icon: Wrench,
    title: "Renovation & Remodeling",
    description: "Expert renovation services for homes, offices, and historical building restoration.",
    features: [
      "Home extensions",
      "Kitchen and bathroom makeovers",
      "Office and commercial upgrades",
      "Historical building restoration",
    ],
  },
]

export default function Services() {
  return (
    <div>
      <Hero title="Our Services" subtitle="Comprehensive construction solutions tailored to your needs" />

      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-24">
            {services.map((service, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-8 items-start">
                <ServiceCard {...service} />
                <Card>
                  <CardHeader>
                    <CardTitle>Features & Benefits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-secondary">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

