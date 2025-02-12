import { Button } from "@/components/ui/button"
import HoverButton from "./HoverButton"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

interface ServiceCardProps {
    imageSrc: string
    title: string
    description: string
}

export default function ServiceCard({ imageSrc, title, description }: ServiceCardProps) {
    return (
        <Card className="bg-gradient-to-b from-[#EBE7E1] hover:from-white hover:to-white to-white shadow-lg md:hover:scale-105 transition-all shadow-black/25 rounded-lg p-6 flex flex-col items-center text-center h-full">
            <CardHeader>
                <div className="flex justify-center w-full">
                    <div className="relative w-28 h-28 mb-4"> {/* Increased size */}
                        <Image src={imageSrc} alt={title} width={150} height={150} />
                    </div>
                </div>
                <CardTitle className="text-xl font-semibold text-orange-500">{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <CardDescription className="text-gray-700">{description}</CardDescription>
            </CardContent>
            <Button asChild size="lg" className="hover:bg-secondary hover:text-secondary-foreground bg-muted-foreground text-white transition-colors">
                <HoverButton text="Know More" href="/services"></HoverButton>

            </Button>
        </Card>
    )
}
