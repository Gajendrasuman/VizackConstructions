import Hero from "../../components/Hero";
import Link from "next/link";
import ServiceCard from "../../components/ServiceCard";
import {
  PencilRuler,
  Drill,
  BrickWall,
  LampWallDown,
  PaintRoller,
  CircuitBoard,
  ReplaceAll,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const services = [
  {
    icon: PencilRuler,
    title: "Planning and Design",
    description: `We provide end-to-end planning and design solutions tailored to your vision. Our team of
experts works closely with clients to develop customized architectural designs that
maximize space utilization and aesthetic appeal.We integrate functionality with creativity,
    ensuring that every structural blueprint is well- planned and structurally sound.Our
advanced 3D rendering and visualization techniques allow clients to see their projects
before execution, making informed design choices seamless.We focus on modern,
  sustainable, and innovative solutions that align with our client’s needs.Whether it’s a
commercial project or a residential dream home, we ensure meticulous planning for
flawless execution.`,
    features: {
      "Customized architectural designs": `We create personalized designs that reflect your style
and needs, blending form and function.
`,
      "Structural planning": `Every building starts with a strong structural plan to ensure safety and
stability.`,
      "Interior and exterior design concepts": `Our design solutions consider both indoor and outdoor
spaces, ensuring a harmonious flow.`,
      "3D rendering and visualization": `See your project come to life with high-quality renderings
before execution, enabling informed decisions.`,
    },
  },
  {
    icon: Drill,
    title: "Construction Services",
    description: `From small residential projects to large-scale commercial developments, we deliver highquality construction services with a commitment to durability and efficiency. Our team is
well-versed in handling various types of buildings, ensuring that each project is completed
with superior craftsmanship and within stipulated timelines. We work with cutting-edge
technology and high-grade materials to provide robust, safe, and long-lasting structures.
Our expertise extends to commercial spaces, hospitality projects, and industrial setups,
ensuring seamless project execution with adherence to safety regulations and
architectural excellence.`,
    features: {
      "Residential & commercial buildings": `We construct homes and commercial spaces with
the utmost attention to quality and functionality.
`,
      "Hotels and restaurants": `Expertise in developing hospitality spaces that combine comfort
with design.`,
      "Office spaces and retail stores": `We craft functional and visually appealing spaces for retail and
office environments.`,
      "Industrial facilities": `Reliable, robust construction for industrial setups with a focus on
efficiency.`,
    },
  },
  {
    icon: BrickWall,
    title: "Structural Work",
    description: `A building’s strength lies in its foundation and framework. We specialize in reinforced
cement concrete (RCC) structures, ensuring durability and safety in every project. Our
masonry and brickwork are crafted with precision to provide strong, stable, and visually
appealing results. High-quality plastering work enhances structural aesthetics and
longevity, while our fabrication services bring customized metal and steel structures to life,
adding both strength and style to any construction. We ensure strict adherence to industry
standards while focusing on innovation and quality craftsmanship. `,
    features: {
      "Reinforced Cement Concrete (RCC) structures": `Strong and durable foundations and
frameworks for all building types.`,
      "Brickwork and masonry": `Precision masonry that adds both strength and beauty.
`,
      Plastering: `High-quality plastering for smooth and durable finishes.`,
      "Fabrication work": `Custom metal and steel structures to enhance the design and safety of
your project.`,
    },
  },
  {
    icon: LampWallDown,
    title: "Interior Solutions",
    description: `Interiors define the personality of a space, and we bring design expertise to every project.
Our flooring solutions range from elegant hardwood and stylish tiles to durable laminates,
each enhancing the space’s ambiance. We install false ceilings that add character and
modernity to interiors, alongside modular kitchens that combine efficiency with
contemporary aesthetics. Our custom cabinetry and furniture solutions bring unique
functionality, while our expert painting and wall treatments ensure flawless finishes that
enhance the beauty of your interiors. `,
    features: {
      "Flooring (tiles, hardwood, laminate)": `Choose from a variety of stylish and durable
flooring options to suit your space.
`,
      "False ceilings": `Modern and elegant ceilings that enhance the interior’s appeal.`,
      "Modular kitchens": `Designed for both style and functionality, perfect for modern living.`,
      "Custom cabinetry and furniture": `Tailored storage and furniture solutions that maximize
space.`,
      "Painting and wall treatments": `Flawless finishes that complement your interiors and elevate
their aesthetics.`,
    },
  },
  {
    icon: PaintRoller,
    title: "Exterior Solutions",
    description: `A property’s exterior is the first impression, and we make it count. Our landscaping services
enhance outdoor spaces with lush greenery, artistic garden designs, and well-planned
layouts. We provide high-quality exterior painting services to protect and beautify
structures, ensuring durability against weather elements. Our team specializes in paver
installation for driveways, walkways, and patios, while our fencing and gate solutions
provide security and elegance. We focus on creating exteriors that are both visually
stunning and functionally efficient. `,
    features: {
      "Landscaping and garden development":`Beautiful garden designs that enhance outdoor
spaces and add tranquility.
`,
      "Exterior painting":`Protective and aesthetic painting solutions for your building’s exterior.`,
      "Paver installation":`Durable and stylish pavers for walkways, patios, and driveways.`,
      "Fencing and gates":`Elegant yet secure fencing and gate solutions to enhance your property’s
appearance and safety.`,
    },
  },
  {
    icon: CircuitBoard,
    title: "Utilities & Installations",
    description:
      `A building is only as good as its utilities. We provide expert plumbing and sanitation
services to ensure seamless water supply and drainage systems. Our skilled electricians
install high-quality wiring and fixtures to ensure safety and energy efficiency. HVAC
systems are integrated for comfortable climate control, while smart home solutions
elevate modern living by introducing automation, security, and energy-efficient features.
We prioritize durability, efficiency, and technological advancements in all utility
installations. `,
    features: {
      "Plumbing and sanitation":`Expert plumbing services to ensure effective water supply and
drainage systems.
`,
      "Electrical wiring and fixtures":`Safe and energy-efficient electrical solutions for your home or
commercial space.`,
      "HVAC systems":`Climate control systems to ensure comfort in any space.
`,
      "Smart home integrations":`Advanced automation and energy-efficient technologies for
modern living.`,
    },
  },
  {
    icon: ReplaceAll,
    title: "Renovation & Remodeling",
    description:
      `Spaces evolve, and we help them transform with our renovation and remodeling expertise.
Whether you want to extend your home, give your kitchen or bathroom a modern upgrade,
or completely revamp a commercial space, we provide tailored solutions that match your
style and functionality needs. Our team specializes in restoring historical buildings while
preserving their authenticity, ensuring that old-world charm meets modern functionality.
We breathe new life into spaces while maintaining quality and durability. `,
    features: {
      "Home extensions":`Expand your living space to meet your needs and lifestyle.
`,
      "Kitchen and bathroom makeovers":`Modernize and personalize your kitchen and bathroom
with functional designs.
`,
      "Office and commercial upgrades":`Revamp your office or commercial space for improved
functionality and aesthetics.`,
      "Historical building restoration":`Restore the charm of older buildings while integrating
modern solutions.
`,
    },
  },
];

export default function Services() {
  return (
    <div>
      <Hero
        title="Our Services"
        subtitle="At ViZack Enterprises, we bring creativity, skill, and dedication to every project. Our
commitment to excellence ensures that every client receives the highest level of service.
Contact us today, and let’s create something extraordinary together!"
      />

      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-24">
            {services.map((service, index) => (
              <div
                key={index}
                className="grid md:grid-cols-2 gap-8 items-start"
              >
                <Link href={"/services/" + service.title.toLowerCase()} passHref>
                  <ServiceCard {...service} />
                </Link>
                <Card>
                  <CardHeader>
                    <CardTitle className="uppercase tracking-wider font-bold">Features & Benefits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {Object.entries(service.features).map(
                        ([key, value], index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-secondary">•</span>
                            <span className="flex flex-col font-bold tracking-wider uppercase">
                              {key}
                            <span className="text-muted-foreground font-normal tracking-normal lowercase first-letter:uppercase">{value}</span>

                            </span>
                          </li>
                        )
                      )}
                      {/* {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-secondary">•</span>
                          <span>{feature}</span>
                        </li>
                      ))} */}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
