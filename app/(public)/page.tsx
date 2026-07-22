import Navbar from "@/components/layouts/navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import FeaturedMenu from "@/components/home/FeaturedMenu";
import Specialties from "@/components/home/Specialties";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layouts/footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",

  description:
    "Welcome to Maison, where exceptional cuisine meets timeless elegance. Explore our handcrafted menu, reserve your table online, and experience unforgettable fine dining in a warm and sophisticated atmosphere.",

  keywords: [
    "Maison Restaurant",
    "Fine Dining",
    "Luxury Restaurant",
    "Restaurant",
    "Restaurant Reservations",
    "Book a Table",
    "Gourmet Cuisine",
    "Signature Dishes",
    "Elegant Dining",
    "Maison",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Maison | Fine Dining Restaurant",
    description:
      "Experience exceptional cuisine and elegant dining at Maison. Explore our menu, reserve your table, and create unforgettable memories.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maison Fine Dining Restaurant",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Maison | Fine Dining Restaurant",
    description:
      "Experience fine dining at Maison. Explore our menu and reserve your table online.",
    images: ["/og-image.jpg"],
  },
};


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <FeaturedMenu />
      <Specialties />
      <Testimonials />
      <CTA />
      <Footer /> 
    </>
  );
}