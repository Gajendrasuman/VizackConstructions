import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
    icon: LucideIcon
    title: string
    description: string
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
    return (
        <Card className="group hover:border-secondary transition-colors">
            <CardHeader>
                <Icon className="w-12 h-12 mb-4 text-secondary" />
                <CardTitle className="group-hover:text-secondary transition-colors">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>{description}</CardDescription>
            </CardContent>
        </Card>
    )
}

