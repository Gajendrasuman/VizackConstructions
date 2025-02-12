"use client"
import Link from "next/link"
import HoverButton from "../components/HoverButton"
import {Typewriter} from "react-simple-typewriter"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Hero from "../components/Hero"
import ServiceCard from "../components/ServiceCard"
import { services } from "./services/page"
import { Teko } from "next/font/google"
import { RoughNotation } from "react-rough-notation"

const kanit = Teko({
  weight: ["700"],
  subsets: ["latin"]
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
          <h1 className={" mb-16 text-5xl tracking-tight text-gray-900 sm:mt-5 sm:leading-none lg:mt-6 lg:text-7xl xl:text-8xl "+kanit.className}>
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
            <video
              src="https://time54.co.uk/wp-content//uploads//2023//10//time45render.mp4"
              autoPlay
              loop
              muted
              className="w-full max-w-3xl mx-auto"
              
            >
              Your browser does not support the video tag. 
            </video>
                  </span>
                </h1>
            <h1 className={"text-3xl text-black md:text-4xl lg:text-5xl font-bold mb-6 " + kanit.className}>
              Your  <span className="text-orange-600 "><RoughNotation show={true} animationDuration={300} type="circle"> One Stop </RoughNotation></span> For All of Your Architectural Needs.
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
              {/* <Button asChild size="lg" className="hover:bg-secondary hover:text-secondary-foreground bg-muted-foreground text-white transition-colors">
              <HoverButton text="Our Services" href="/services"></HoverButton>

              </Button> */}
            </div>
            {/* <iframe width="873" height="491" src="https://www.youtube.com/embed/fIr3iKTMRmo" title="Construction Company Profile - After Effects Template" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
            {/* <video src="https://youtu.be/fIr3iKTMRmo" controls autoPlay loop muted className="w-full max-w-3xl mx-auto">
              
            </video> */}

          </div>
        </div>
      </section>

      {/* Services Section */}  
      <section className="py-2 bg-[#EBE7E1]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className={"text-3xl text-orange-500 mb-4 " + kanit.className}>
              <RoughNotation type="underline" animationDuration={300} show={true}>
            Our Services
            </RoughNotation>
            </h2>
            <p className="text-black">
              Comprehensive construction and property solutions tailored to your needs
            </p>
          </div>
         
         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {services.map((service, index) => (
        <Link key={index} href={`/services/${service.title.toLowerCase()}`} target="_blank" passHref>
            <div className="cursor-pointer">
                <ServiceCard key={index} imageSrc={service.imageSrc} title={service.title} description={service.description} />
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
            <h2 className={"text-3xl font-bold mb-4 text-orange-500 " + kanit.className}><RoughNotation type="underline" show={true}>Why Choose Us</RoughNotation></h2>
            <p className="text-black font-semibold">
              We deliver excellence through our core values and commitment to quality
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {values.map((value, index) => (
    <Card 
      key={index} 
      className="flex flex-col items-center justify-between p-6 bg-gradient-to-b from-[#EBE7E1] hover:from-white hover:to-white to-white shadow-lg rounded-2xl transition-transform md:hover:scale-105"
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

        {/* maintenance contracts section */}
      </section>
      <section className="flex flex-col items-center">
        <Hero className="" title="Maintenance Contracts" subtitle="Simplify Your Property Management with Our Maintenance Contracts" />
        <p className="text-muted text-center w-[60%] mx-auto">
          Ensure your property stays in top-notch condition with our dedicated maintenance services. Ideal for cafes, restaurants, retail outlets, corporate offices, and more, our contracts are designed to provide peace of mind and hassle-free upkeep.
        </p>

        <div className="w-[80%] justify-items-center py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <Card className="text-center bg-white">
            <CardHeader>
              <CardTitle className="text-orange-500">Regular inspections and maintenance</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-black">
                We perform thorough, routine inspections to ensure your property stays in tip-top condition. Our maintenance checks help us catch issues early, so you never have to worry about unexpected problems.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center bg-white">
            <CardHeader>
              <CardTitle className="text-orange-500">Plumbing and electrical repairs</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-black">
                From minor leaks to major electrical issues, our expert team handles all repairs with precision. Trust us to keep your systems running smoothly and safely, so you can enjoy uninterrupted comfort.
              </CardDescription>
            </CardContent>
          </Card><Card className="text-center bg-white">
            <CardHeader>
              <CardTitle className="text-orange-500">HVAC system servicing</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-black">
                Keep your indoor environment perfect year-round with our comprehensive HVAC servicing. We ensure your heating and cooling systems operate efficiently, saving energy and providing consistent comfort.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center bg-white">
            <CardHeader>
              <CardTitle className="text-orange-500">Painting, repairs, and renovations</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-black">
                Revitalize your space with our professional painting, repair, and renovation services. We blend quality workmanship with creative solutions to transform your property, enhancing both its look and functionality.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center bg-white">
            <CardHeader>
              <CardTitle className="text-orange-500">On-call support for urgent issues</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-black">
                When emergencies strike, our 24/7 on-call support is here for you. We respond quickly to urgent issues, ensuring that any disruptions are minimized and your property stays safe and sound.
              </CardDescription>
            </CardContent>
          </Card>

        </div>
      </section>

      <section className="flex flex-col items-center">
        <Hero className="" title="Why Choose Our Maintenance Contracts?" />
        <p className="text-muted text-center w-[60%] mx-auto">
          Our maintenance contracts are designed to provide peace of mind and hassle-free upkeep for your property. Here are some reasons why you should choose us:
        </p>
        <div className="w-[80%] justify-items-center py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <Card className="text-center bg-white">
            <CardHeader>
              <CardTitle className="text-orange-500">Customized plans tailored to your needs</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-black">
                We know every property is unique. Our maintenance plans are fully customizable to match your specific requirements, providing personalized care that fits your schedule and budget.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center bg-white">
            <CardHeader>
              <CardTitle className="text-orange-500">Reliable and timely services</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-black">
                Count on us for prompt, dependable service. Our team is committed to delivering maintenance solutions on time, ensuring that your property always receives the attention it deserves.
              </CardDescription>
            </CardContent>
          </Card><Card className="text-center bg-white">
            <CardHeader>
              <CardTitle className="text-orange-500">Cost-effective solutions to save you money</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-black">
                Enjoy top-notch maintenance without breaking the bank. Our cost-effective solutions are designed to keep your property in great shape while being kind to your wallet.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center bg-white">
            <CardHeader>
              <CardTitle className="text-orange-500">Dedicated support team for your property</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-black">
                Our experienced support team is always on standby to assist you. With expert advice and personalized service, we make sure your property is always in the best hands.
              </CardDescription>
            </CardContent>
          </Card>

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

