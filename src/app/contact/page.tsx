import Hero from "../../components/Hero"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <div>

      <section className="flex flex-col items-center">
        <Hero className="" title="Maintenance Contracts" subtitle="Simplify Your Property Management with Our Maintenance Contracts" />
        <p className="text-muted text-center w-[60%] mx-auto">
          Ensure your property stays in top-notch condition with our dedicated maintenance services. Ideal for cafes, restaurants, retail outlets, corporate offices, and more, our contracts are designed to provide peace of mind and hassle-free upkeep.
        </p>

        <div className="w-[80%] justify-items-center py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <Card className="text-center">
            <CardHeader>
              <CardTitle>Regular inspections and maintenance</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                We perform thorough, routine inspections to ensure your property stays in tip-top condition. Our maintenance checks help us catch issues early, so you never have to worry about unexpected problems.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <CardTitle>Plumbing and electrical repairs</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                From minor leaks to major electrical issues, our expert team handles all repairs with precision. Trust us to keep your systems running smoothly and safely, so you can enjoy uninterrupted comfort.
              </CardDescription>
            </CardContent>
          </Card><Card className="text-center">
            <CardHeader>
              <CardTitle>HVAC system servicing</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Keep your indoor environment perfect year-round with our comprehensive HVAC servicing. We ensure your heating and cooling systems operate efficiently, saving energy and providing consistent comfort.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <CardTitle>Painting, repairs, and renovations</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Revitalize your space with our professional painting, repair, and renovation services. We blend quality workmanship with creative solutions to transform your property, enhancing both its look and functionality.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <CardTitle>On-call support for urgent issues</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
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
          <Card className="text-center">
            <CardHeader>
              <CardTitle>Customized plans tailored to your needs</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                We know every property is unique. Our maintenance plans are fully customizable to match your specific requirements, providing personalized care that fits your schedule and budget.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <CardTitle>Reliable and timely services</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Count on us for prompt, dependable service. Our team is committed to delivering maintenance solutions on time, ensuring that your property always receives the attention it deserves.
              </CardDescription>
            </CardContent>
          </Card><Card className="text-center">
            <CardHeader>
              <CardTitle>Cost-effective solutions to save you money</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Enjoy top-notch maintenance without breaking the bank. Our cost-effective solutions are designed to keep your property in great shape while being kind to your wallet.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <CardTitle>Dedicated support team for your property</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Our experienced support team is always on standby to assist you. With expert advice and personalized service, we make sure your property is always in the best hands.
              </CardDescription>
            </CardContent>
          </Card>

        </div>

      </section>

      <Hero id="contact" className="mt-10" title="Contact Us" subtitle="Get in touch with our team for any inquiries" />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Reach out to us through any of these channels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-secondary mt-1" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">
                        <Link href={"tel:%20+919826258659"} className="hover:text-secondary transition-colors">
                        +91 9826258659
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-secondary mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">
                        <Link href={"mailto:info@vizackenterprises.com"} className="hover:text-secondary transition-colors">
                          info@vizackenterprises.com
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-secondary mt-1" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">
                        Plot no. 2, Sector 2, Industrial Area, Chandigarh, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-secondary mt-1" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <div className="text-muted-foreground">
                        <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p>Saturday: 10:00 AM - 2:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="lg:col-span-2 shadow-md shadow-black/50">
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What is this regarding?" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project or inquiry..."
                      className="min-h-[150px]"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      
    </div>
  )
}

