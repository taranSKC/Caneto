'use client'

import * as React from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ServiceImage } from "@/lib/types"

interface ServiceCarouselProps {
  images: ServiceImage[]
}

export function ServiceCarousel({ images }: ServiceCarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const prev = () => setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  const next = () => setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1))

  return (
    <Card className="relative overflow-hidden">
      <div className="aspect-video relative">
        <Image
          src={images[currentIndex].url}
          alt={images[currentIndex].alt}
          fill
          className="object-cover"
        />
      </div>
      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90"
            onClick={prev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90"
            onClick={next}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 w-1.5 rounded-full transition-all ${
                  i === currentIndex ? "w-3 bg-primary" : "bg-primary/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </Card>
  )
}

