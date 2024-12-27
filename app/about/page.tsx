import { MapPin, Mail, Phone, Clock, Youtube } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=400&width=1200')",
          }}
        />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Our Ayurvedic Journey
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Discover authentic healing traditions in a modern setting
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Story Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Our Story</CardTitle>
            <CardDescription>
              A journey through traditional healing
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <p className="text-lg text-muted-foreground">
              The Elixir Ayurvedic clinic was originally established by Shrri
              Dalip Singh Vaidya, born in 1901 while living in western Punjab of
              the undivided India, where he studied The Ayurvedic and Unani
              systems of medicines from a retired military Subedar followed by
              his practice started in 1921. He was saintly person who
              concurrently enjoyed the companies of all sorts of sadhus and
              sanyasis who were believed to have practical knowledge about the
              medicinal herbs, their applicability and medicinal properties and
              was greatly benefited from the same.
            </p>
            <p className="text-lg text-muted-foreground">
              Our team of certified Ayurvedic practitioners and herbalists work
              tirelessly to source the highest quality ingredients and create
              traditional formulations that meet modern wellness needs.
            </p>
          </CardContent>
        </Card>

        {/* Video Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Experience Our Space</CardTitle>
            <CardDescription>Take a virtual tour of our store</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/6hBe8o_-OvY?si=-1jspZG0LxKwGxvI"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </CardContent>
        </Card>

        {/* Contact and Location Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Get in touch with us</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <a
                    href="mailto:theelixirayurveda@gmail.com"
                    className="text-primary hover:underline"
                  >
                    theelixirayurveda@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <span>+91-93162-39674 </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <span>Mon - Sat: 10:00 AM - 5:00 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span>
                    Plot No: 2665, St. no. 3, Guru Nanak Colony-B, OPP. G.N.E
                    College, Gill Road, Ludhiana{" "}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Location</CardTitle>
              <CardDescription>Find us here</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d54798.75185440139!2d75.857359!3d30.860859!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a8385ee207b15%3A0x71d7ce62bbdb2ac5!2sThe%20Elixir%20Ayurvedic%20Clinic%20Ludhiana!5e0!3m2!1sen!2sus!4v1735318070691!5m2!1sen!2sus"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Our Values</CardTitle>
            <CardDescription>What drives us forward</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Authenticity</h3>
                <Separator className="my-2" />
                <p className="text-muted-foreground">
                  We source genuine Ayurvedic ingredients and follow traditional
                  preparation methods.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Sustainability</h3>
                <Separator className="my-2" />
                <p className="text-muted-foreground">
                  Our practices respect both nature and traditional wisdom for a
                  better future.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Community</h3>
                <Separator className="my-2" />
                <p className="text-muted-foreground">
                  We're dedicated to educating and nurturing our community's
                  wellbeing.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
