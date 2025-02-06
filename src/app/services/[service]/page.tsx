"use client"
import { usePathname } from 'next/navigation'
import { services } from '../page'
import Link from 'next/link'
import { Kanit } from 'next/font/google'
import { ChevronRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const kanit = Kanit({
    weight: ["400", "700"],
    subsets: ["latin"]
})

export default function Service() {
    const slug = usePathname().split("/")
    const service = slug[slug.length - 1].replaceAll("%20", " ")

    return (
        <main className='text-muted'>
            <div className="bg-secondary text-white txt flex items-center gap-2 py-2 px-4">
                <Link href="/services">Services</Link> 
                <ChevronRight size={16} />
                <Link href={"/services" + "/" + service.toLowerCase()} className='capitalize'>{service}</Link>
            </div>
            {
                services?.map((serv, index) => {
                    if (serv.title.toLowerCase() === service) {
                        return (
                            <>
                                <header key={index} className='px-4 py-8'>
                                    <h1 className={'text-3xl font-bold text-center ' + kanit.className}>{serv.title}</h1>
                                    
                                    <p className='text-muted text-center w-[60%] mx-auto py-4'>{serv.description}</p>
                                </header>

                                <section>
                                    <div className="mx-auto px-4">
                                        <div className="w-full flex flex-col items-center mx-auto text-center">
                                            <h2 className="text-3xl font-bold mb-4">Features & Benefits</h2>
                                            <p className="text-muted-foreground">The principles that guide our work and relationships</p>
                                            <div className="w-[80%] justify-items-center py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                                                {Object.entries(services[index].features).map(([key, value], index) => (
                                                    <Card key={index} className="text-center">
                                                        <CardHeader>
                                                            <CardTitle>{key}</CardTitle>
                                                        </CardHeader>
                                                        <CardContent>
                                                            <CardDescription>{value}</CardDescription>
                                                        </CardContent>
                                                    </Card>
                                                ))}
                                            </div>


                                        </div>
                                    </div>
                                </section>
                            </>
                        )
                    }
                })
            }
      </main>
    )
  }