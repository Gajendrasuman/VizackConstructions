import Hero from "../components/Hero"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Clock, DollarSign, Leaf, CheckCircle2 } from "lucide-react"

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
    title: "Budget-Friendly Solutions",
    description: "We offer transparent pricing and tailor-made solutions to fit your budget.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We are committed to environmentally-friendly construction practices and energy-efficient solutions.",
  },
]

const process = [
  {
    title: "Consultation",
    description: "We start with an in-depth consultation to understand your needs and project goals.",
  },
  {
    title: "Design and Planning",
    description: "Our experts craft a detailed plan and design tailored to your specifications.",
  },
  {
    title: "Execution",
    description: "With a focus on quality and efficiency, our team brings the design to life.",
  },
  {
    title: "Final Inspection",
    description: "We ensure everything meets your expectations before handing over the completed project.",
  },
  {
    title: "Post-Completion Support",
    description: "We provide maintenance and support to keep your space in top condition.",
  },
]

export default function About() {
  return (
    <div>
      <Hero title="About Us" subtitle="Building excellence through innovation and dedication" />
      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <p>
                ViZack Enterprises & Construction has been a leader in the construction industry, building our
                reputation on quality workmanship, innovative solutions, and exceptional customer service.
              </p>
              <p>
                From humble beginnings, we've grown into a full-service construction company capable of handling
                projects of any size or complexity. Our team of experienced professionals is dedicated to bringing your
                vision to life, whether it's a small renovation or a large-scale commercial project.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground">The principles that guide our work and relationships</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index}>
                <CardHeader>
                  <value.icon className="w-12 h-12 mb-4 text-secondary" />
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
      {/* Process Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground">How we bring your vision to life</p>
          </div>
          <div className="grid gap-8">
            {process.map((step, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-secondary-foreground font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <CardTitle>{step.title}</CardTitle>
                      <CardDescription>{step.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Sustainability Section */}
      ```tsx file="app/about/page.tsx" continued
      {/* Sustainability Section */}
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Our Commitment to Sustainability</h2>
            <p className="mb-8">
              We are committed to environmentally-friendly construction practices. From using sustainable materials to
              incorporating energy-efficient solutions, we ensure our projects have a minimal environmental impact.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-secondary-foreground text-secondary">
                <CardHeader>
                  <CheckCircle2 className="w-12 h-12 mb-4 text-secondary" />
                  <CardTitle>Sustainable Materials</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-secondary/80">
                    We prioritize eco-friendly and locally sourced materials in our construction projects.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-secondary-foreground text-secondary">
                <CardHeader>
                  <Leaf className="w-12 h-12 mb-4 text-secondary" />
                  <CardTitle>Energy Efficiency</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-secondary/80">
                    Our designs incorporate energy-saving features and renewable energy solutions.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

