import Hero from "../../components/Hero"
import { Button } from "@/components/ui/button"
import PropertyCard, { Benefits } from "@/components/PropertyCard"
import Link from "next/link"
import { Teko } from "next/font/google"
const teko = Teko({
  weight: ["700"],
  subsets: ["latin"]
})


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
          <div className="flex flex-col gap-16">
            <PropertyCard />  
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className={"text-3xl font-bold mb-4 text-orange-500 " + teko.className}>Why Choose Us for Property Services?</h2>
            <p className="text-muted-foreground">We make property hunting and transactions smooth and hassle-free</p>
          </div>
           <Benefits />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:w-fit md:px-24 md:mx-auto bg-orange-500 text-orange-500-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Property?</h2>
            <p className="mb-8">Browse our listings or get in touch with our property experts today</p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white shadow-lg text-orange-500 hover:bg-orange-500-foreground/90"
            >
              <Link href="/contact">Contact Our Experts</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

