import Hero from "../../components/Hero"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Home, Factory } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Teko } from "next/font/google"
import HoverButton from "@/components/HoverButton"
const kanit = Teko({
  weight: ["700"],
  subsets: ["latin"]
})



const propertyTypes = [
  {
    icon: Home,
    title: "Residential Properties",
    description: "Find your perfect home from our selection of apartments, villas, and independent houses.",
    features: ["Apartments", "Villas", "Independent houses", "Penthouses", "Studio apartments"],
  },
  {
    icon: Building,
    title: "Commercial Properties",
    description: "Premium commercial spaces for your business needs.",
    features: ["Office spaces", "Retail shops", "Warehouses", "Shopping complexes", "Restaurant spaces"],
  },
  {
    icon: Factory,
    title: "Industrial Properties",
    description: "Suitable industrial spaces and land for your manufacturing needs.",
    features: ["Factories", "Manufacturing units", "Industrial land", "Storage facilities", "Industrial sheds"],
  },
]

const benefits = [
  {
    title: "Verified Listings",
    description: "All properties are thoroughly vetted for authenticity and quality.",
  },
  {
    title: "Expert Guidance",
    description: "Our team helps you find the perfect property based on your requirements and budget.",
  },
  {
    title: "Flexible Options",
    description: "From short-term rentals to permanent purchases, we offer flexible solutions.",
  },
  {
    title: "Complete Documentation",
    description: "We handle all the paperwork and legal documentation for a hassle-free experience.",
  },
]

export default function Properties() {
  return (
    <div>
      <Hero
        title="Property Rental and Sales"
        subtitle="Explore our range of residential, commercial, and industrial properties"
      />

      {/* Property Types */}
      <section className="py-3">
        <div className="container mx-auto px-4 shadow-md py-16">
          <div className="grid gap-16">
            {propertyTypes.map((type, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-8 items-start">
                <Card className="bg-gradient-to-tr border border-[#d3d3d3]  from-[#e4e3e1] hover:from-white hover:to-white to-white text-muted">
                  <CardHeader>
                    <type.icon className="w-12 h-12 mb-4 text-orange-500" />
                    <CardTitle>{type.title}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {type.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-orange-500">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-bl border border-[#d3d3d3]  from-[#e4e3e1] hover:from-white hover:to-white to-white text-muted">
                  <CardHeader>
                    <CardTitle>Available Options</CardTitle>
                    <CardDescription>Choose from our selection of properties</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="font-semibold">For Rent</p>
                        <p className="text-muted-foreground">Short & long term</p>
                      </div>
                      <div>
                        <p className="font-semibold">For Sale</p>
                        <p className="text-muted-foreground">Buy your dream property</p>
                      </div>
                    </div>
                    <Button asChild className="w-full bg-orange-500 text-orange-500-foreground hover:bg-orange-500/90">
                      <Link href="/contact">Enquire Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className={"text-3xl font-bold mb-4 text-orange-500 "+kanit.className}>Why Choose Us for Property Services?</h2>
            <p className="text-muted-foreground">We make property hunting and transactions smooth and hassle-free</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-gradient-to-bl border border-[#d3d3d3]  from-[#e4e3e1] hover:from-white hover:to-white to-white text-muted">
                <CardHeader>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-orange-500 text-orange-500-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Property?</h2>
            <p className="mb-8">Browse our listings or get in touch with our property experts today</p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-secondary-foreground text-orange-500 hover:bg-orange-500-foreground/90"
            >
              <Link href="/contact">Contact Our Experts</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

