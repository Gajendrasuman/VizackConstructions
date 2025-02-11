import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

interface ServiceCardProps {
    imageSrc: string
    title: string
    description: string
}

export default function ServiceCard({ imageSrc, title, description }: ServiceCardProps) {
    return (
        <Card className="bg-white border border-orange-500 shadow-lg rounded-lg p-6 flex flex-col items-center text-center h-full">
            <CardHeader>
                <div className="flex justify-center w-full">
                    <div className="relative w-28 h-28 mb-4"> {/* Increased size */}
                        <Image src={imageSrc} alt={title} layout="fill" objectFit="contain" />
                    </div>
                </div>
                <CardTitle className="text-xl font-semibold text-orange-500">{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <CardDescription className="text-gray-700">{description}</CardDescription>
            </CardContent>
        </Card>
    )
}
