import Hero from "../../components/Hero"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Clock, IndianRupee, Leaf, CheckCircle2 } from "lucide-react"
import { Teko } from "next/font/google"
import { RoughNotation } from "react-rough-notation"
const kanit = Teko({
  weight: ["700"],
  subsets: ["latin"]
})


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
    icon: IndianRupee,
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
            <h2 className={"text-3xl font-bold mb-4 text-orange-500 text-center font-serif lines after:shadow-md after:shadow-gray-900 before:shadow-md before:shadow-gray-900 before:right-[31%] after:left-[31%] "}>Our Story</h2>
            <div className="flex flex-col gap-4 text-muted prose-lg dark:prose-invert mx-auto">
              <p>
                At <b>ViZack Enterprises</b>, we don&apos;t just build structures—we bring visions to life. Our approach goes beyond bricks and mortar; we craft experiences, shape environments, and redefine spaces with creativity and precision.
              </p>
              <p>
                What sets us apart? It&apos;s not just experience—it&apos;s the art of blending expertise with innovation. Our team doesn&apos;t follow trends; we create them, ensuring that every project is infused with a mix of charm, creativity, and functionality. Whether it&apos;s a dream home, a commercial space, or a custom-designed masterpiece, we shape ideas into reality with passion and dedication.
              </p>
              <p>
                We are not different—we are <b>absolutely different</b>. Our seasoned professionals bring years of experience, delivering high-quality craftsmanship and innovative solutions tailored to every unique vision. From concept to completion, we ensure meticulous planning, flawless execution, and unparalleled excellence.
              </p>
              <p>
                At <b>ViZack Enterprises</b>, we believe in building more than just spaces—we build relationships, trust, and a legacy of quality. Our commitment to customer satisfaction, cutting-edge design, and sustainable solutions makes us the ideal choice for those who seek excellence.
              </p>
              <p>
                This vision and philosophy are deeply inspired by and blessed by <b>Shri Rajesh Jain Ji</b>, <b>Director of Sakshi Construction</b>. As his family, we are committed to upholding his name and legacy, carrying forward his dedication to excellence and innovation in the construction industry.
              </p>
              <p>
                "<b>Your Vision, Our Construction</b>"—if you can think it, we can build it. At ViZack Enterprises, we transform possibilities into landmarks. Let&apos;s build the future together.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="py-24 ">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 ">
            {/* <RoughNotation type="box" show={true} animationDelay={500}> */}
            <h2 className={"text-3xl font-bold mb-4 text-orange-500 font-serif lines after:shadow-md after:shadow-gray-900 before:shadow-md before:shadow-gray-900  before:right-[29.5%] after:left-[29.5%]"}>Our Values</h2>
            {/* </RoughNotation> */}
            <p className="text-gray-800">The principles that guide our work and relationships</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card className="bg-gradient-to-tl from-[#e3e4e1] hover:from-white hover:to-white to-white shadow-lg md:hover:scale-105 transition-all shadow-black/25" key={index}>
                <CardHeader>
                  <value.icon className="w-12 h-12 mb-4 text-orange-500" />
                  <CardTitle className="text-orange-500">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-black">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section id="process" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className={"text-3xl font-bold mb-4 text-orange-500 font-serif lines after:shadow-md after:shadow-gray-900 before:shadow-md before:shadow-gray-900 before:right-[28.5%] after:left-[28.5%]"}>Our Process</h2>
            <p className="text-muted-foreground">How we bring your vision to life</p>
          </div>
          <div className="grid gap-8">
            {process.map((step, index) => (
              <Card key={index} className="bg-gradient-to-tl from-[#e3e4e1] hover:from-white hover:to-white to-white shadow-lg md:hover:scale-105 transition-all shadow-black/25 text-muted">
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
      {/* <section id="sustainability" className="py-24 bg-orange-500 rounded-lg max-w-3xl mx-auto text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Our Commitment to Sustainability</h2>
            <p className="mb-8">
              We are committed to environmentally-friendly construction practices. From using sustainable materials to
              incorporating energy-efficient solutions, we ensure our projects have a minimal environmental impact.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gray-200 text-orange-500">
                <CardHeader>
                  <CheckCircle2 className="w-12 h-12 mb-4 text-orange-500 txt" />
                  <CardTitle>Sustainable Materials</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-black">
                    We prioritize eco-friendly and locally sourced materials in our construction projects.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-gray-200 text-orange-500">
                <CardHeader>
                  <Leaf className="w-12 h-12 mb-4 text-orange-500" />
                  <CardTitle >Energy Efficiency</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-black">
                    Our designs incorporate energy-saving features and renewable energy solutions.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}

