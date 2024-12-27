"use client";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="container py-12">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="mt-4 text-muted-foreground">
            Have questions about our products or Ayurvedic practices? We're here
            to help. Reach out to us through any of the following channels or
            fill out the contact form.
          </p>

          <div className="mt-8 space-y-6">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">
                  theelixirayurveda@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-sm text-muted-foreground">+91-93162-39674</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Address</p>
                <p className="text-sm text-muted-foreground">
                  Plot No: 2665, St. no. 3, Guru Nanak Colony-B, OPP. G.N.E
                  College, Gill Road, Ludhiana
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Send us a Message</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Fill out the form below and we'll get back to you as soon as
            possible.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
