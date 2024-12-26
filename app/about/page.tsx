import { MapPin, Mail, Phone, Clock, Youtube } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60" />
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('/placeholder.svg?height=400&width=1200')" }}
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
            <CardDescription>A journey through traditional healing</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <p className="text-lg text-muted-foreground">
              Founded in 2010, our Ayurvedic store has been dedicated to bringing authentic healing practices 
              and products to our community. We believe in the power of natural remedies and holistic wellness 
              approaches that have been perfected over thousands of years in traditional Ayurvedic medicine.
            </p>
            <p className="text-lg text-muted-foreground">
              Our team of certified Ayurvedic practitioners and herbalists work tirelessly to source the 
              highest quality ingredients and create traditional formulations that meet modern wellness needs.
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
                src="https://www.youtube.com/embed/your-video-id"
                title="Store Tour"
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
                  <a href="mailto:contact@ayurveda.com" className="text-primary hover:underline">
                    contact@ayurveda.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span>123 Wellness Street, Healing City, HC 12345</span>
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
                  src="https://www.google.com/maps/embed?pb=your-embed-code"
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
                  We source genuine Ayurvedic ingredients and follow traditional preparation methods.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Sustainability</h3>
                <Separator className="my-2" />
                <p className="text-muted-foreground">
                  Our practices respect both nature and traditional wisdom for a better future.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Community</h3>
                <Separator className="my-2" />
                <p className="text-muted-foreground">
                  We're dedicated to educating and nurturing our community's wellbeing.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

