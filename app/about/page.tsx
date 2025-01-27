import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Clock, DollarSign, Leaf } from "lucide-react"

export default function About() {
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
      description:
        "We are committed to environmentally-friendly construction practices and energy-efficient solutions.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About ViZack Enterprises & Construction</h1>
      <p className="text-xl mb-8 text-center">Your Trusted Partner for Comprehensive Construction Services</p>
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
        <p className="mb-4">
          ViZack Enterprises & Construction has been a leader in the construction industry for [X] years. We've built
          our reputation on quality workmanship, innovative solutions, and exceptional customer service.
        </p>
        <p>
          From humble beginnings, we've grown into a full-service construction company capable of handling projects of
          any size or complexity. Our team of experienced professionals is dedicated to bringing your vision to life,
          whether it's a small renovation or a large-scale commercial project.
        </p>
      </div>
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <Card key={index}>
              <CardHeader>
                <value.icon className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{value.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Process</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <span className="font-semibold">Consultation:</span> We start with an in-depth consultation to understand
            your needs and project goals.
          </li>
          <li>
            <span className="font-semibold">Design and Planning:</span> Our experts craft a detailed plan and design
            tailored to your specifications.
          </li>
          <li>
            <span className="font-semibold">Execution:</span> With a focus on quality and efficiency, our team brings
            the design to life.
          </li>
          <li>
            <span className="font-semibold">Final Inspection:</span> We ensure everything meets your expectations before
            handing over the completed project.
          </li>
          <li>
            <span className="font-semibold">Post-Completion Support:</span> We provide maintenance and support to keep
            your space in top condition.
          </li>
        </ol>
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Work with Us?</h2>
        <p className="mb-4">
          Let's build something extraordinary together. Contact us today for a consultation or to request a quote.
        </p>
        <p>Phone: [Your Contact Number]</p>
        <p>Email: [Your Email Address]</p>
      </div>
    </div>
  )
}

