import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Building, Factory } from "lucide-react"

export default function Properties() {
  const propertyTypes = [
    { icon: Home, title: "Residential Properties", description: "Apartments, villas, and independent houses" },
    { icon: Building, title: "Commercial Properties", description: "Office spaces, retail shops, and warehouses" },
    { icon: Factory, title: "Industrial Properties", description: "Factories and land for industrial use" },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Property Rental and Sales</h1>
      <p className="text-xl mb-8 text-center">Explore our range of properties for rent or purchase</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {propertyTypes.map((type, index) => (
          <Card key={index}>
            <CardHeader>
              <type.icon className="w-12 h-12 mb-4 text-primary" />
              <CardTitle>{type.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{type.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Why Choose Us for Property Services?</h2>
        <ul className="list-disc list-inside mb-8 text-left max-w-2xl mx-auto">
          <li>Verified Listings: All properties are thoroughly vetted for authenticity and quality.</li>
          <li>Expert Guidance: Our team helps you find the perfect property based on your requirements and budget.</li>
          <li>Flexible Options: From short-term rentals to permanent purchases, we offer flexible solutions.</li>
        </ul>
        <p className="mb-4">Ready to find your dream property? Get in touch with our property experts today.</p>
        <p>Phone: [Your Contact Number]</p>
        <p>Email: [Your Email Address]</p>
      </div>
    </div>
  )
}

