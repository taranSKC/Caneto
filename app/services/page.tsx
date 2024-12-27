import { ServiceCard } from "@/components/service-card";
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

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-muted-foreground">
          Discover our range of authentic Ayurvedic treatments and therapies,
          each designed to promote healing and wellness.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
