'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://video-previews.elements.envatousercontent.com/files/7b53294e-489e-4a2b-8781-f9ba226ba98d/video_preview_h264.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/60" />
      <div className="container relative flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Experience the Power of Panchkarma
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg">
          Discover ancient Ayurvedic healing through authentic Panchkarma therapies. 
          Restore balance, rejuvenate your body, and enhance your well-being.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button asChild size="lg" className="bg-primary/90 hover:bg-primary">
            <Link href="/shop">Book Now</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/20 bg-white/10 text-white hover:bg-white/20"
          >
            <Link href="/blog">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}