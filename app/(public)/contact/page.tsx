import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import ContactHero from "@/components/contact/Hero";
import FindUs from "@/components/contact/FindUs";
import ContactSection from "@/components/contact/ContactSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",

  description:
    "Get in touch with Maison Restaurant for reservations, private events, catering inquiries, or general questions. Visit our location, view our opening hours, or contact our team today.",

  keywords: [
    "Maison Contact",
    "Contact Maison Restaurant",
    "Restaurant Contact",
    "Restaurant Location",
    "Restaurant Phone",
    "Restaurant Email",
    "Restaurant Hours",
    "Private Dining",
    "Catering",
    "Restaurant Reservations",
  ],

  alternates: {
    canonical: "/contact",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Contact | Maison Restaurant",
    description:
      "Have a question or need assistance? Contact Maison Restaurant for reservations, events, or general inquiries.",
    url: "/contact",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maison Restaurant Contact",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact | Maison Restaurant",
    description:
      "Reach out to Maison Restaurant for reservations, events, and inquiries.",
    images: ["/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <ContactHero />
      <FindUs />
      <ContactSection />
      <Footer /> 
    </>
  );
}