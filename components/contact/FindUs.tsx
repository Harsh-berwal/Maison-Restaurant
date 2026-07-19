"use client";

import {
  Mail,
  MessageSquare,
  Phone,
  MapPin,
} from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contactData = [
  {
    icon: Mail,
    title: "Email",
    description:
      "Questions, private dining, or reservations—we'll respond promptly.",
    value: "reservations@maison.com",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description:
      "Need help choosing the perfect dining experience? Chat with us.",
    value: "Start conversation",
  },
  {
    icon: Phone,
    title: "Phone",
    description:
      "Speak directly with our concierge for bookings and special requests.",
    value: "+91 98765 43210",
  },
  {
    icon: MapPin,
    title: "Restaurant",
    description:
      "Visit Maison and enjoy an unforgettable fine dining experience.",
    value: "24 Rue des Gourmets,Paris 75008, France",
  },
];



export default function FindUs() {
  const sectionRef = useRef(null);

useEffect(() => {
  const ctx = gsap.context(() => {
    // Make sure everything is visible initially
    gsap.set(".contact-card", {
      opacity: 1,
      y: 0,
      scale: 1,
    });

    gsap.set(".contact-icon", {
      opacity: 1,
      rotate: 0,
      scale: 1,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 95%",
        once: true,
      },
    });

    // Heading
    tl.from(".contact-heading", {
      y: 40,
      opacity: 0,
      duration: 0.10,
    stagger: 0.01,
      ease: "power3.out",
    })

      // ALL cards animate together
      .from(
        ".contact-card",
        {
          y: 60,
          opacity: 0,
          scale: 0.95,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
        },
        "-=0.2"
      )

      // Icons pop in
      .from(
        ".contact-icon",
        {
          scale: 0,
          rotate: -25,
          duration: 0.45,
          stagger: 0.08,
          ease: "back.out(2)",
        },
        "-=0.7"
      );
  }, sectionRef);

  return () => ctx.revert();
}, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F7F1E8] py-28"
    >
      {/* Decorative Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#D8844B]/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6">

        <p className="contact-heading mb-3 text-sm uppercase tracking-[0.35em] text-[#D8844B]">
          Reach Us
        </p>

        <h2 className="contact-heading text-5xl md:text-6xl font-serif text-[#5B1F08]">
          Find Us
        </h2>
                                      
        <p className="contact-heading mt-6 max-w-xl text-lg leading-8 text-[#5B1F08]/70">
          Our concierge is available every day to assist with reservations,
          private dining experiences, and special occasions.
        </p>

        <div className="mt-24 grid gap-10 md:grid-cols-2 lg:grid-cols-4 cards-wrapper">

          {contactData.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="contact-card group rounded-3xl border border-[#D8844B]/20 bg-white/40 p-8 transition-all duration-500 hover:-translate-y-3 hover:border-[#D8844B] hover:bg-white hover:shadow-2xl"
              >
                <div className="contact-icon mb-8 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#5B1F08]/5 transition-all duration-500 group-hover:bg-[#5B1F08] group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mb-4 text-3xl font-serif text-[#5B1F08]">
                  {item.title}
                </h3>

                <p className="mb-8 leading-7 text-[#5B1F08]/70">
                  {item.description}
                </p>

                <a
                  href="#"
                  className="relative inline-block font-medium text-[#5B1F08]"
                >
                  {item.value}

                  <span className="absolute left-0 bottom-[-6px] h-[2px] w-0 bg-[#D8844B] transition-all duration-500 group-hover:w-full" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}