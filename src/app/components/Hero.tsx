import { cn } from "@/lib/utils"

interface HeroProps {
    title: string
    subtitle?: string
    className?: string
}

export default function Hero({ title, subtitle, className }: HeroProps) {
    return (
        <div className={cn("relative py-24 overflow-hidden hero-pattern", className)}>
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary txt">{title}</h1>
                    {subtitle && <p className="text-xl text-muted font-semibold">{subtitle}</p>}
                </div>
            </div>
        </div>
    )
}

