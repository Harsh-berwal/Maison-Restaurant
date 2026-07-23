import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import ReservationForm from "@/components/reservations/ReservationForm";
import ReservationHero from "@/components/reservations/HeroSection";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reservations",

  description:
    "Reserve your table at Maison Restaurant in just a few clicks. Enjoy an elegant fine dining experience with seamless online reservations for lunch, dinner, private events, and special occasions.",

  keywords: [
    "Maison Reservations",
    "Restaurant Reservations",
    "Book a Table",
    "Online Table Booking",
    "Fine Dining Reservation",
    "Restaurant Booking",
    "Dinner Reservation",
    "Lunch Reservation",
    "Private Dining",
    "Maison Restaurant",
  ],

  alternates: {
    canonical: "/reservations",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Reservations | Maison Restaurant",
    description:
      "Book your table at Maison Restaurant and enjoy a premium dining experience with quick and convenient online reservations.",
    url: "/reservations",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maison Restaurant Reservations",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Reservations | Maison Restaurant",
    description:
      "Reserve your table online at Maison Restaurant for an unforgettable fine dining experience.",
    images: ["/og-image.jpg"],
  },
};


export default function Home() {
  return (
    <>
      <Navbar />
      <ReservationHero />
      <ReservationForm />
      <Footer /> 
    </>
  );
}