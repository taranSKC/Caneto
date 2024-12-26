import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Service } from "@/lib/types"
import { ServiceCarousel } from "./service-carousel"

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <ServiceCarousel images={service.images} />
      <CardHeader>
        <CardTitle>
          <Link href={`/services/${service.id}`} className="hover:text-primary transition-colors">
            {service.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground">{service.shortDescription}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <span className="font-semibold">
          ₹{service.price.toLocaleString('en-IN')}
        </span>
        <Button asChild>
          <Link href={`/services/${service.id}`}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

