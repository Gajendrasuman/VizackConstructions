import { cn } from "@/lib/utils"

interface HeroProps {
    title: string
    subtitle?: string
    className?: string,
    id?: string;
}

import { Teko } from "next/font/google"

const montserrat = Teko({
    subsets: ["latin"],
    display: "swap",
    weight: ["700"]
})

export default function Hero({ title, subtitle, className, id }: HeroProps) {
    return (
        <div className={cn("relative py-24 overflow-hidden hero-pattern", className)} id={id}>
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className={"text-4xl md:text-5xl font-bold mb-4 text-secondary txt " + montserrat.className}>{title}</h1>
                    {subtitle && <p className="text-xl text-muted font-semibold">{subtitle}</p>}
                </div>
            </div>
        </div>
    )
}

