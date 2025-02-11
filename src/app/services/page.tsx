import Hero from "../components/Hero";
import Link from "next/link";
import ServiceCard from "../components/ServiceCard";
import FeatureCard from "../components/FeatureCard";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// export const services = [
//   {
//     imageSrc: "/images/photo (1).jpg",
//     title: "Planning and Design",
//     description: `We provide end-to-end planning and design solutions tailored to your vision. Our team of
// experts works closely with clients to develop customized architectural designs that
// maximize space utilization and aesthetic appeal.We integrate functionality with creativity,
//     ensuring that every structural blueprint is well- planned and structurally sound.Our
// advanced 3D rendering and visualization techniques allow clients to see their projects
// before execution, making informed design choices seamless.We focus on modern,
//   sustainable, and innovative solutions that align with our client’s needs.Whether it’s a
// commercial project or a residential dream home, we ensure meticulous planning for
// flawless execution.`,
//     features: {
//       "Customized architectural designs": `We create personalized designs that reflect your style
// and needs, blending form and function.
// `,
//       "Structural planning": `Every building starts with a strong structural plan to ensure safety and
// stability.`,
//       "Interior and exterior design concepts": `Our design solutions consider both indoor and outdoor
// spaces, ensuring a harmonious flow.`,
//       "3D rendering and visualization": `See your project come to life with high-quality renderings
// before execution, enabling informed decisions.`,
//     },
//   },
//   {
//     imageSrc: "/images/photo (2).jpg",
//     title: "Construction Services",
//     description: `From small residential projects to large-scale commercial developments, we deliver highquality construction services with a commitment to durability and efficiency. Our team is
// well-versed in handling various types of buildings, ensuring that each project is completed
// with superior craftsmanship and within stipulated timelines. We work with cutting-edge
// technology and high-grade materials to provide robust, safe, and long-lasting structures.
// Our expertise extends to commercial spaces, hospitality projects, and industrial setups,
// ensuring seamless project execution with adherence to safety regulations and
// architectural excellence.`,
//     features: {
//       "Residential & commercial buildings": `We construct homes and commercial spaces with
// the utmost attention to quality and functionality.
// `,
//       "Hotels and restaurants": `Expertise in developing hospitality spaces that combine comfort
// with design.`,
//       "Office spaces and retail stores": `We craft functional and visually appealing spaces for retail and
// office environments.`,
//       "Industrial facilities": `Reliable, robust construction for industrial setups with a focus on
// efficiency.`,
//     },
//   },
//   {
//     imageSrc: "/images/photo (3).jpg",
//     title: "Structural Work",
//     description: `A building’s strength lies in its foundation and framework. We specialize in reinforced
// cement concrete (RCC) structures, ensuring durability and safety in every project. Our
// masonry and brickwork are crafted with precision to provide strong, stable, and visually
// appealing results. High-quality plastering work enhances structural aesthetics and
// longevity, while our fabrication services bring customized metal and steel structures to life,
// adding both strength and style to any construction. We ensure strict adherence to industry
// standards while focusing on innovation and quality craftsmanship. `,
//     features: {
//       "Reinforced Cement Concrete (RCC) structures": `Strong and durable foundations and
// frameworks for all building types.`,
//       "Brickwork and masonry": `Precision masonry that adds both strength and beauty.
// `,
//       Plastering: `High-quality plastering for smooth and durable finishes.`,
//       "Fabrication work": `Custom metal and steel structures to enhance the design and safety of
// your project.`,
//     },
//   },
//   {
//     imageSrc: "/images/photo (4).jpg",
//     title: "Interior Solutions",
//     description: `Interiors define the personality of a space, and we bring design expertise to every project.
// Our flooring solutions range from elegant hardwood and stylish tiles to durable laminates,
// each enhancing the space’s ambiance. We install false ceilings that add character and
// modernity to interiors, alongside modular kitchens that combine efficiency with
// contemporary aesthetics. Our custom cabinetry and furniture solutions bring unique
// functionality, while our expert painting and wall treatments ensure flawless finishes that
// enhance the beauty of your interiors. `,
//     features: {
//       "Flooring (tiles, hardwood, laminate)": `Choose from a variety of stylish and durable
// flooring options to suit your space.
// `,
//       "False ceilings": `Modern and elegant ceilings that enhance the interior’s appeal.`,
//       "Modular kitchens": `Designed for both style and functionality, perfect for modern living.`,
//       "Custom cabinetry and furniture": `Tailored storage and furniture solutions that maximize
// space.`,
//       "Painting and wall treatments": `Flawless finishes that complement your interiors and elevate
// their aesthetics.`,
//     },
//   },
//   {
//     imageSrc: "/images/photo (5).jpg",
//     title: "Exterior Solutions",
//     description: `A property’s exterior is the first impression, and we make it count. Our landscaping services
// enhance outdoor spaces with lush greenery, artistic garden designs, and well-planned
// layouts. We provide high-quality exterior painting services to protect and beautify
// structures, ensuring durability against weather elements. Our team specializes in paver
// installation for driveways, walkways, and patios, while our fencing and gate solutions
// provide security and elegance. We focus on creating exteriors that are both visually
// stunning and functionally efficient. `,
//     features: {
//       "Landscaping and garden development":`Beautiful garden designs that enhance outdoor
// spaces and add tranquility.
// `,
//       "Exterior painting":`Protective and aesthetic painting solutions for your building’s exterior.`,
//       "Paver installation":`Durable and stylish pavers for walkways, patios, and driveways.`,
//       "Fencing and gates":`Elegant yet secure fencing and gate solutions to enhance your property’s
// appearance and safety.`,
//     },
//   },
//   {
//     imageSrc: "/images/photo (6).jpg",
//     title: "Utilities & Installations",
//     description:
//       `A building is only as good as its utilities. We provide expert plumbing and sanitation
// services to ensure seamless water supply and drainage systems. Our skilled electricians
// install high-quality wiring and fixtures to ensure safety and energy efficiency. HVAC
// systems are integrated for comfortable climate control, while smart home solutions
// elevate modern living by introducing automation, security, and energy-efficient features.
// We prioritize durability, efficiency, and technological advancements in all utility
// installations. `,
//     features: {
//       "Plumbing and sanitation":`Expert plumbing services to ensure effective water supply and
// drainage systems.
// `,
//       "Electrical wiring and fixtures":`Safe and energy-efficient electrical solutions for your home or
// commercial space.`,
//       "HVAC systems":`Climate control systems to ensure comfort in any space.
// `,
//       "Smart home integrations":`Advanced automation and energy-efficient technologies for
// modern living.`,
//     },
//   },
//   {
//     imageSrc:"/images/photo (7).jpg",
//     title: "Renovation & Remodeling",
//     description:
//       `Spaces evolve, and we help them transform with our renovation and remodeling expertise.
// Whether you want to extend your home, give your kitchen or bathroom a modern upgrade,
// or completely revamp a commercial space, we provide tailored solutions that match your
// style and functionality needs. Our team specializes in restoring historical buildings while
// preserving their authenticity, ensuring that old-world charm meets modern functionality.
// We breathe new life into spaces while maintaining quality and durability. `,
//     features: {
//       "Home extensions":`Expand your living space to meet your needs and lifestyle.
// `,
//       "Kitchen and bathroom makeovers":`Modernize and personalize your kitchen and bathroom
// with functional designs.
// `,
//       "Office and commercial upgrades":`Revamp your office or commercial space for improved
// functionality and aesthetics.`,
//       "Historical building restoration":`Restore the charm of older buildings while integrating
// modern solutions.
// `,
//     },
//   },
// ];
type Features = { [key: string]: string };

export const services: {
  imageSrc: string;
  title: string;
  description: string;
  features: Features;
}[] = [
  {
    imageSrc: "/images/photo (1).jpg",
    title: "Planning and Design",
    description: `We create customized architectural designs that blend functionality with creativity. 
    Our experts provide space-efficient layouts, modern aesthetics, and 3D visualizations, 
    ensuring seamless execution of your vision.`,
    features: {
      "Architectural designs": `Tailored layouts maximizing space and aesthetics.`,
      "Structural planning": `Ensuring safety and durability in every build.`,
      "Interior & exterior concepts": `Harmonizing indoor and outdoor spaces.`,
      "3D visualization": `Realistic previews for informed design decisions.`,
    },
  },
  {
    imageSrc: "/images/photo (2).jpg",
    title: "Construction Services",
    description: `From homes to commercial spaces, we build with precision, durability, and efficiency. 
    Our expertise covers residential, hospitality, retail, and industrial projects using 
    high-quality materials and modern technology.`,
    features: {
      "Residential & commercial buildings": `Quality-driven homes & workspaces.`,
      "Hotels & restaurants": `Elegant, functional hospitality spaces.`,
      "Office & retail spaces": `Smart, stylish business environments.`,
      "Industrial facilities": `Strong, efficient infrastructure solutions.`,
    },
  },
  {
    imageSrc: "/images/photo (3).jpg",
    title: "Structural Work",
    description: `We specialize in strong, long-lasting structures using reinforced concrete, 
    precision masonry, and expert fabrication. Our work ensures stability, aesthetics, 
    and adherence to industry standards.`,
    features: {
      "RCC structures": `Solid foundations & frameworks.`,
      "Brickwork & masonry": `Strong, precise construction.`,
      "Plastering": `Smooth, durable finishing touches.`,
      "Fabrication work": `Custom metal & steel solutions.`,
    },
  },
  {
    imageSrc: "/images/photo (4).jpg",
    title: "Interior Solutions",
    description: `Transform your interiors with elegant flooring, modular kitchens, custom furniture, 
    and expert wall treatments. We blend functionality with aesthetics to create 
    visually stunning spaces.`,
    features: {
      "Flooring": `Tiles, hardwood & laminate options.`,
      "False ceilings": `Stylish, modern ceiling designs.`,
      "Modular kitchens": `Efficient & contemporary layouts.`,
      "Custom furniture": `Tailored storage & décor solutions.`,
      "Wall treatments": `Flawless finishes enhancing interiors.`,
    },
  },
  {
    imageSrc: "/images/photo (5).jpg",
    title: "Exterior Solutions",
    description: `Make a lasting first impression with our landscaping, exterior painting, 
    paver installations, and secure fencing solutions. We enhance outdoor aesthetics while 
    ensuring durability and functionality.`,
    features: {
      "Landscaping": `Lush greenery & artistic layouts.`,
      "Exterior painting": `Weather-resistant & appealing.`,
      "Paver installation": `Durable driveways & pathways.`,
      "Fencing & gates": `Security with a stylish touch.`,
    },
  },
  {
    imageSrc: "/images/photo (6).jpg",
    title: "Utilities & Installations",
    description: `We ensure smooth-functioning utilities with expert plumbing, electrical work, 
    HVAC systems, and smart home integrations for enhanced convenience and efficiency.`,
    features: {
      "Plumbing & sanitation": `Reliable water & drainage systems.`,
      "Electrical fixtures": `Safe, energy-efficient wiring.`,
      "HVAC systems": `Climate control for comfort.`,
      "Smart home tech": `Automation & security solutions.`,
    },
  },
  {
    imageSrc: "/images/photo (7).jpg",
    title: "Renovation & Remodeling",
    description: `Give your space a fresh look with home extensions, kitchen & bathroom makeovers, 
    office upgrades, and historical restorations. We blend innovation with quality craftsmanship.`,
    features: {
      "Home extensions": `Expand & upgrade living spaces.`,
      "Kitchen & bath makeovers": `Modern, functional transformations.`,
      "Office upgrades": `Stylish, productivity-enhancing designs.`,
      "Historic restorations": `Preserving charm with modern touch.`,
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
        <div className="container mx-auto px-4 bg-white">
          <div className="grid gap-24">
            {services.map((service, index) => (
              <div
                key={index}
                className="grid md:grid-cols-2 gap-8 items-start"
              >
                <Link href={"/services/" + service.title.toLowerCase()} passHref>
                  <ServiceCard {...service} />
                </Link>
                <FeatureCard features={service.features}></FeatureCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
