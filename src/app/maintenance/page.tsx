import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Hero from "../../components/Hero";

export default function Maintenance() {
  return (
    <main>
      <section className="flex flex-col items-center">
        <Hero
          className=""
          title="Maintenance Contracts"
          subtitle="Simplify Your Property Management with Our Maintenance Contracts"
        />
        <p className="text-muted text-center w-[60%] mx-auto">
          Ensure your property stays in top-notch condition with our dedicated
          maintenance services. Ideal for cafes, restaurants, retail outlets,
          corporate offices, and more, our contracts are designed to provide
          peace of mind and hassle-free upkeep.
        </p>

        <div className="w-[80%] justify-items-center py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <Card className="text-center bg-white">
            <CardHeader>
              <CardTitle className="text-orange-500">
                Regular inspections and maintenance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-black">
                We perform thorough, routine inspections to ensure your property
                stays in tip-top condition. Our maintenance checks help us catch
                issues early, so you never have to worry about unexpected
                problems.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center bg-white">
            <CardHeader>
              <CardTitle className="text-orange-500">
                Plumbing and electrical repairs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-black">
                From minor leaks to major electrical issues, our expert team
                handles all repairs with precision. Trust us to keep your
                systems running smoothly and safely, so you can enjoy
                uninterrupted comfort.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center bg-white">
            <CardHeader>
              <CardTitle className="text-orange-500">
                HVAC system servicing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-black">
                Keep your indoor environment perfect year-round with our
                comprehensive HVAC servicing. We ensure your heating and cooling
                systems operate efficiently, saving energy and providing
                consistent comfort.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center bg-white">
            <CardHeader>
              <CardTitle className="text-orange-500">
                Painting, repairs, and renovations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-black">
                Revitalize your space with our professional painting, repair,
                and renovation services. We blend quality workmanship with
                creative solutions to transform your property, enhancing both
                its look and functionality.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center bg-white">
            <CardHeader>
              <CardTitle className="text-orange-500">
                On-call support for urgent issues
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-black">
                When emergencies strike, our 24/7 on-call support is here for
                you. We respond quickly to urgent issues, ensuring that any
                disruptions are minimized and your property stays safe and
                sound.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="flex flex-col items-center">
        <Hero className="" title="Why Choose Our Maintenance Contracts?" />
        <p className="text-muted text-center w-[60%] mx-auto">
          Our maintenance contracts are designed to provide peace of mind and
          hassle-free upkeep for your property. Here are some reasons why you
          should choose us:
        </p>
        <div className="w-[80%] justify-items-center py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <Card className="text-center bg-white">
            <CardHeader>
              <CardTitle className="text-orange-500">
                Customized plans tailored to your needs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-black">
                We know every property is unique. Our maintenance plans are
                fully customizable to match your specific requirements,
                providing personalized care that fits your schedule and budget.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center bg-white">
            <CardHeader>
              <CardTitle className="text-orange-500">
                Reliable and timely services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-black">
                Count on us for prompt, dependable service. Our team is
                committed to delivering maintenance solutions on time, ensuring
                that your property always receives the attention it deserves.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center bg-white">
            <CardHeader>
              <CardTitle className="text-orange-500">
                Cost-effective solutions to save you money
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-black">
                Enjoy top-notch maintenance without breaking the bank. Our
                cost-effective solutions are designed to keep your property in
                great shape while being kind to your wallet.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center bg-white">
            <CardHeader>
              <CardTitle className="text-orange-500">
                Dedicated support team for your property
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-black">
                Our experienced support team is always on standby to assist you.
                With expert advice and personalized service, we make sure your
                property is always in the best hands.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
