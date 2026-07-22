import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import CTA from "@/components/home/CTA";
import MenuHero from "@/components/menu/Hero";
import MenuSection from "@/components/menu/MenuSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",

  description:
    "Discover Maison's carefully crafted menu featuring gourmet appetizers, signature main courses, handcrafted desserts, and premium beverages made with the finest ingredients.",

  keywords: [
    "Maison Menu",
    "Restaurant Menu",
    "Fine Dining Menu",
    "Signature Dishes",
    "Gourmet Food",
    "Appetizers",
    "Main Course",
    "Desserts",
    "Beverages",
    "Luxury Restaurant",
  ],

  alternates: {
    canonical: "/menu",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Menu | Maison Restaurant",
    description:
      "Explore Maison's menu of signature dishes, handcrafted desserts, and premium beverages designed to create an unforgettable dining experience.",
    url: "/menu",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maison Restaurant Menu",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Menu | Maison Restaurant",
    description:
      "Browse Maison's gourmet menu featuring signature dishes, desserts, and premium beverages.",
    images: ["/og-image.jpg"],
  },
};


export default function Home() {
  return (
    <>
      <Navbar />
      <MenuHero />
      <MenuSection />
      <CTA />
      <Footer /> 
    </>
  );
}