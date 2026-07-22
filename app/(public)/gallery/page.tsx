import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import CTA from "@/components/home/CTA";
import GalleryHero from "@/components/gallery/Hero";
import GallerySection from "@/components/gallery/GallerySection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",

  description:
    "Explore the Maison Gallery and discover our signature dishes, elegant interiors, luxurious ambiance, and memorable dining experiences through a curated collection of photos.",

  keywords: [
    "Maison Gallery",
    "Restaurant Gallery",
    "Fine Dining Gallery",
    "Luxury Restaurant",
    "Restaurant Interior",
    "Signature Dishes",
    "Food Photography",
    "Restaurant Ambiance",
    "Dining Experience",
    "Maison Restaurant",
  ],

  alternates: {
    canonical: "/gallery",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Gallery | Maison Restaurant",
    description:
      "Browse Maison's gallery featuring our elegant interiors, signature cuisine, and unforgettable dining atmosphere.",
    url: "/gallery",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maison Restaurant Gallery",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Gallery | Maison Restaurant",
    description:
      "Discover Maison through stunning photos of our cuisine, ambiance, and dining experience.",
    images: ["/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <GalleryHero />
      <GallerySection />
      <CTA />
      <Footer /> 
    </>
  );
}