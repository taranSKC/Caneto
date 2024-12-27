import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Clock, IndianRupee, ArrowLeft } from "lucide-react";
import { Service } from "@/lib/types";

// This would typically come from your API or database
const services: Service[] = [
  {
    id: "1",
    title: "PanchKarma",
    shortDescription:
      "Traditional full-body Ayurvedic oil massage for deep relaxation and healing.",
    fullDescription:
      "Abhyanga is a form of Ayurvedic medicine involving massage of the body with warm herb-infused oils. The practice of Abhyanga is designed to promote wellness by harmonizing mind, body and spirit, deeply relaxing the nervous system, and promoting lymphatic drainage.",
    images: [
      {
        url: "https://theelixirayurveda.com/pics/ser/2.jpg",
        alt: "Abhyanga Massage Treatment Room",
      },
      {
        url: "https://theelixirayurveda.com/pics/ser/3.jpg",
        alt: "Ayurvedic Oils for Massage",
      },
    ],
    duration: "60 minutes",
    price: 3500,
    availability: [
      "Monday to Friday: 9:00 AM - 6:00 PM",
      "Saturday: 10:00 AM - 4:00 PM",
      "Sunday: Closed",
    ],
    benefits: [
      "Improves blood circulation",
      "Reduces stress and anxiety",
      "Promotes better sleep",
      "Nourishes the skin",
      "Detoxifies the body",
    ],
    preparations: [
      "Avoid heavy meals 2 hours before treatment",
      "Arrive 10 minutes before appointment",
      "Wear comfortable clothing",
      "Inform therapist of any medical conditions",
    ],
  },
  {
    id: "2",
    title: "Cupping Therapy",
    shortDescription:
      "Gentle streaming of warm oil on the forehead for mental clarity and relaxation.",
    fullDescription:
      "Shirodhara is a form of Ayurveda therapy that involves gently pouring warm herb-infused oil over the forehead and scalp. This deeply relaxing treatment is known to improve mental clarity, reduce anxiety, and promote deep relaxation.",
    images: [
      {
        url: "https://theelixirayurveda.com/pics/ser/2.jpg",
        alt: "Shirodhara Treatment Setup",
      },
      {
        url: "https://theelixirayurveda.com/pics/ser/3.jpg",
        alt: "Shirodhara Oil Stream",
      },
    ],
    duration: "45 minutes",
    price: 4500,
    availability: [
      "Monday to Friday: 10:00 AM - 5:00 PM",
      "Saturday: 10:00 AM - 3:00 PM",
      "Sunday: Closed",
    ],
    benefits: [
      "Improves mental clarity",
      "Reduces anxiety and stress",
      "Promotes better sleep",
      "Relieves headaches",
      "Nourishes hair and scalp",
    ],
    preparations: [
      "Avoid caffeine on the day of treatment",
      "Come with clean, dry hair",
      "Wear comfortable clothing",
      "Plan to rest after the treatment",
    ],
  },
];

export function generateStaticParams() {
  return services.map((post) => ({
    id: post.id,
  }));
}

export default function ServiceDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const service = services.find((s) => s.id === params.id);

  if (!service) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        href="/services"
        className="inline-flex items-center mb-6 text-primary hover:underline"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Services
      </Link>

      <h1 className="text-4xl font-bold mb-6">{service.title}</h1>

      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <Card className="overflow-hidden">
            <Image
              src={service.images[0].url}
              alt={service.images[0].alt}
              width={600}
              height={400}
              className="w-full object-cover"
            />
          </Card>
          <div className="grid grid-cols-4 gap-4 mt-4">
            {service.images.slice(1).map((image, index) => (
              <Card key={index} className="overflow-hidden">
                <Image
                  src={image.url}
                  alt={image.alt}
                  width={150}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{service.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <IndianRupee className="h-5 w-5" />
              <span className="text-2xl font-semibold">
                {service.price.toLocaleString("en-IN")}
              </span>
            </div>
          </div>

          <Separator />

          <div>
            <h2 className="text-2xl font-semibold mb-2">Description</h2>
            <p className="text-muted-foreground">{service.fullDescription}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Available Times</h2>
            <ul className="list-disc list-inside text-muted-foreground">
              {service.availability.map((time, i) => (
                <li key={i}>{time}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Benefits</h2>
            <ul className="list-disc list-inside text-muted-foreground">
              {service.benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
          </div>

          {service.preparations && (
            <div>
              <h2 className="text-2xl font-semibold mb-2">How to Prepare</h2>
              <ul className="list-disc list-inside text-muted-foreground">
                {service.preparations.map((prep, i) => (
                  <li key={i}>{prep}</li>
                ))}
              </ul>
            </div>
          )}

          <Button size="lg" className="w-full">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}
