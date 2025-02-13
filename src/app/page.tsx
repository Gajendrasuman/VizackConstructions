"use client";
import Link from "next/link";
import HoverButton from "../components/HoverButton";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import { services } from "./services/page";
import { Teko } from "next/font/google";
import { RoughNotation } from "react-rough-notation";
import { imgLoader } from "@/components/Header";
import Image from "next/image";

const kanit = Teko({
  weight: ["700"],
  subsets: ["latin"],
});

const values = [
  {
    imageSrc: "https://img.freepik.com/free-vector/hand-drawn-flat-design-affiliate-marketing-illustration_23-2149347413.jpg?uid=R8363709&ga=GA1.1.1749654531.1739179931&semt=ais_authors_boost",
    title: "Client-Centric Approach",
    description:
      "We work closely with you to understand your needs and ensure every detail aligns with your vision.",
  },
  {
    imageSrc: "https://img.freepik.com/premium-vector/hand-drawn-transport-logistics-illustration_23-2151515381.jpg?uid=R8363709&ga=GA1.1.1749654531.1739179931&semt=ais_authors_boost",
    title: "On-Time Delivery",
    description:
      "We understand the value of time and are committed to completing projects on schedule.",
  },
  {
    imageSrc: "https://img.freepik.com/free-vector/piggy-bank-concept-illustration_114360-21415.jpg?uid=R8363709&ga=GA1.1.1749654531.1739179931&semt=ais_authors_boost",
    title: "Budget-Friendly",
    description:
      "We offer transparent pricing and tailor-made solutions to fit your budget requirements.",
  },
  {
    imageSrc: "https://img.freepik.com/free-vector/renewable-energy-concept-illustration_114360-28103.jpg?uid=R8363709&ga=GA1.1.1749654531.1739179931&semt=ais_authors_boost",
    title: "Sustainability",
    description:
      "We are committed to environmentally-friendly construction practices and energy-efficient solutions.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#EBE7E1] tracking-wider relative py-24 overflow-hidden hero-pattern">
        <div className="container mx-auto px-4">
          <div className=" max-w-4xl mx-auto text-center">
            <h1
              className={
                " mb-16 text-5xl tracking-tight text-gray-900 sm:mt-5 sm:leading-none lg:mt-6 lg:text-7xl xl:text-8xl " +
                kanit.className
              }
            >
              <p className="sm:block ">Welcome to</p>
              <span className="text-orange-600 mb-8 md:block">
                ViZack Enterprises
              </span>
              <p className="text-zinc-500 md:block mt-4">Masters of {""}</p>
              <span>
                <Typewriter
                  words={[
                    "Planning and Design",
                    "Structural Work",
                    "Construction Services",
                    "Interior Solutions",
                    "Exterior Solutions",
                    "Utilities and Installation",
                    "Renovation and Remodelling",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                ></Typewriter>
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
            <h1
              className={
                "text-3xl text-black md:text-4xl lg:text-5xl font-bold mb-6 " +
                kanit.className
              }
            >
              Your{" "}
              <span className="text-orange-600 ">
                <RoughNotation
                  show={true}
                  animationDuration={300}
                  type="underline"
                >
                  {" "}
                  One Stop{" "}
                </RoughNotation>
              </span>{" "}
              For All of Your Architectural Needs.
            </h1>
            <p className="text-xl text-quicksand text-black max-w-3xl mx-auto mb-8">
              We are a full-service construction company dedicated to
              transforming your vision into reality.Whether you need a small
              renovation, a large-scale commercial project, or anything in
              between, we provide end-to-end solutions for all your construction
              needs, including both interior and exterior services.
            </p>
            <p
              className={
                "text-xl text-black mb-8 bg-orange-500 max-w-3xl mx-auto rounded-lg px-4 py-4 " +
                kanit.className
              }
            >
              Your Trusted Partner for Comprehensive Construction Services
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-2 bg-[#EBE7E1]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className={"text-3xl text-orange-500 mb-4 font-serif lines after:shadow-md after:shadow-gray-900 before:shadow-md before:shadow-gray-900 before:right-[28%] after:left-[28%]"}>
              <RoughNotation
                type="underline"
                animationDuration={300}
                show={true}
              >
                Our Services
              </RoughNotation>
            </h2>
            <p className="text-black">
              Comprehensive construction and property solutions tailored to your
              needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={`/services/${service.title.toLowerCase()}`}
                target="_blank"
                passHref
              >
                <div className="cursor-pointer">
                  <ServiceCard
                    key={index}
                    imageSrc={service.imageSrc}
                    title={service.title}
                    description={service.description}
                  />
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
            <h2
              className={
                "text-3xl font-bold mb-4 text-orange-500 font-serif lines after:shadow-md after:shadow-gray-900 before:shadow-md before:shadow-gray-900 before:right-[25%] after:left-[25%]"
              }
            >
                Why Choose Us
            </h2>
            <p className="text-black font-semibold">
              We deliver excellence through our core values and commitment to
              quality
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="flex flex-col items-center justify-between p-6 bg-gradient-to-tr from-[#e3e4e1] hover:from-white hover:to-white to-white shadow-lg rounded-2xl transition-transform md:hover:scale-105"
              >
                <CardHeader className="flex flex-col items-center">
                  <Image
                    src={value.imageSrc}
                    className="size-64 aspect-video object-contain mix-blend-darken mx-auto mb-4"
                    alt={value.title}
                    width={256}
                    height={256}
                    loader={imgLoader}                    
                  />
                  <CardTitle className="text-orange-500 font-bold">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="text-gray-700 text-sm">
                    {value.description}
                  </CardDescription>
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
            <h2 className="text-3xl bg-white p-4 rounded-lg shadow max-w-lg mx-auto font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="mb-8">
              Contact us today for a consultation or to request a quote. Let's
              build something extraordinary together!
            </p>
            <Button asChild size="lg" variant="outline">
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
  );
}
