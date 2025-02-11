"use client"
import Link from "next/link"
import HoverButton from "./components/HoverButton"
import {Typewriter} from "react-simple-typewriter"
import { Kanit, Jura, Karantina } from "next/font/google"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Users,
  Clock,
  DollarSign,
  Leaf
} from "lucide-react"
import ServiceCard from "./components/ServiceCard"
import { services } from "./services/page"
import { Montserrat, Oswald, Teko, } from "next/font/google"
import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({ subsets: ['latin'], weight: ["300", "400", "500", "600", "700"] });


const kanit = Teko({
  weight: ["700"],
  subsets: ["latin"]
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
})

const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
})


const values = [
  {
    imageSrc: "/images/photo (1).jpg",
    title: "Client-Centric Approach",
    description: "We work closely with you to understand your needs and ensure every detail aligns with your vision.",
  },
  {
    imageSrc: "/images/photo (2).jpg",
    title: "On-Time Delivery",
    description: "We understand the value of time and are committed to completing projects on schedule.",
  },
  {
    imageSrc: "/images/photo (3).jpg",
    title: "Budget-Friendly",
    description: "We offer transparent pricing and tailor-made solutions to fit your budget requirements.",
  },
  {
    imageSrc: "/images/photo (4).jpg",
    title: "Sustainability",
    description: "We are committed to environmentally-friendly construction practices and energy-efficient solutions.",
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#EBE7E1] tracking-wider relative py-24 overflow-hidden hero-pattern">
        <div className="container mx-auto px-4">
          <div className=" max-w-4xl mx-auto text-center">
          <h1 className={"mt-4 mb-16 text-5xl tracking-tight text-gray-900 sm:mt-5 sm:leading-none lg:mt-6 lg:text-7xl xl:text-8xl "+kanit.className}>
                  <p className="sm:block ">Welcome to</p>
                  <span className="text-orange-600 mb-8 md:block">ViZack Enterprises</span>
                  <p className="text-zinc-500 md:block mt-4">Masters of {''}</p>
                  <span>
                    <Typewriter
                      words={['Planning and Design', 'Structural Work', 'Construction Services', 'Interior Solutions', 'Exterior Solutions', 'Utilities and Installation','Renovation and Remodelling']}
                      loop={0}
                      cursor
                      cursorStyle='_'
                      typeSpeed={70}
                      deleteSpeed={50}>
                    </Typewriter>
                  </span>
                </h1>
            <h1 className={"text-3xl text-black md:text-4xl lg:text-5xl font-bold mb-6 " + kanit.className}>
              Your  <span className="text-orange-600 "> One Stop </span> For All of Your Architectural Needs.
            </h1>
            <p className="text-xl text-quicksand text-black max-w-3xl mx-auto mb-8">
              We are a full-service construction company dedicated to transforming your vision into reality.Whether you need a small renovation, a large-scale commercial project, or anything in between, we provide end-to-end solutions for all your construction needs, including both interior and exterior services.
            </p>
            <p className={"text-xl text-black mb-8 bg-orange-500 max-w-3xl mx-auto rounded-lg px-4 py-4 "+kanit.className}>
              Your Trusted Partner for Comprehensive Construction Services
            </p>
            <div className="mb-16 flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-muted-foreground hover:text-white transition-colors">
                <HoverButton text="Get Started" href="/contact"></HoverButton>
              </Button>
              <Button asChild size="lg" className="hover:bg-secondary hover:text-secondary-foreground bg-muted-foreground text-white transition-colors">
              <HoverButton text="Our Services" href="/services"></HoverButton>

              </Button>
            </div>
            {/* <iframe width="873" height="491" src="https://www.youtube.com/embed/fIr3iKTMRmo" title="Construction Company Profile - After Effects Template" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
            {/* <video src="https://youtu.be/fIr3iKTMRmo" controls autoPlay loop muted className="w-full max-w-3xl mx-auto">
              
            </video> */}
            <video
              src="https://time54.co.uk/wp-content//uploads//2023//10//time45render.mp4"
              autoPlay
              loop
              muted
              className="w-full max-w-3xl mx-auto"
              
            >
              Your browser does not support the video tag. 
            </video>

          </div>
        </div>
      </section>

      {/* Services Section */}  
      <section className="py-2 bg-[#EBE7E1]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className={"text-3xl text-orange-500 mb-4 " + kanit.className}>
              Our Services</h2>
            <p className="text-black">
              Comprehensive construction and property solutions tailored to your needs
            </p>
          </div>
         
         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {services.map((service, index) => (
        <Link key={index} href={`/services/${service.title.toLowerCase()}`} passHref>
            <div className="cursor-pointer">
                <ServiceCard imageSrc={service.imageSrc} title={service.title} description={service.description} />
            </div>
        </Link>
    ))}
</div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 shd my-8 ">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className={"text-3xl font-bold mb-4 text-orange-500 " + kanit.className}>Why Choose Us</h2>
            <p className="text-muted-foreground">
              We deliver excellence through our core values and commitment to quality
            </p>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <img src= {value.imageSrc} className="w-12 h-12 mx-auto mb-4 text-secondary" />
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {values.map((value, index) => (
    <Card 
      key={index} 
      className="flex flex-col items-center justify-between p-6 border border-orange-500 bg-white shadow-lg rounded-2xl transition-transform hover:scale-105"
    >
      <CardHeader className="flex flex-col items-center">
        <img src={value.imageSrc} className="w-20 h-20 mx-auto mb-4" alt={value.title} />
        <CardTitle className="text-orange-500 font-bold">{value.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <CardDescription className="text-gray-700 text-sm">{value.description}</CardDescription>
      </CardContent>
    </Card>
  ))}

 
</div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-3xl py-24 bg-orange-500 text-secondary-foreground rounded-lg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl bg-white p-4 rounded-lg shadow max-w-lg mx-auto font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="mb-8">
              Contact us today for a consultation or to request a quote. Let's build something extraordinary together!
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
            >
              {/* <Link href="/contact"
              className="mr-auto rounded-lg border border-gray-500 bg-transparent px-4 py-2 text-gray-500 shadow transition-all 
                 hover:border-transparent hover:bg-gray-500 hover:text-white hover:shadow-lg">
        Get in Touch
            </Link> */}
            <HoverButton
            text="Get in Touch"
            href="/contact#contact"

            ></HoverButton>

            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

