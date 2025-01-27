import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Brush, Wrench, Truck, Home, PaintBucket, Lightbulb, Hammer } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Building,
      title: "Planning and Design",
      description: "Customized architectural designs, structural planning, and 3D rendering",
    },
    {
      icon: Truck,
      title: "Construction Services",
      description: "Residential, commercial, and industrial construction projects",
    },
    {
      icon: Home,
      title: "Structural Work",
      description: "RCC structures, brickwork, plastering, and fabrication work",
    },
    {
      icon: Brush,
      title: "Interior Solutions",
      description: "Flooring, false ceilings, modular kitchens, and custom furniture",
    },
    {
      icon: PaintBucket,
      title: "Exterior Solutions",
      description: "Landscaping, exterior painting, paver installation, and fencing",
    },
    {
      icon: Lightbulb,
      title: "Utilities and Installations",
      description: "Plumbing, electrical work, HVAC systems, and smart home integrations",
    },
    {
      icon: Hammer,
      title: "Renovation and Remodeling",
      description: "Home extensions, kitchen and bathroom makeovers, and historical restorations",
    },
    {
      icon: Wrench,
      title: "Maintenance Contracts",
      description: "Regular inspections, repairs, and on-call support for businesses",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <service.icon className="w-12 h-12 mb-4 text-primary" />
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

