"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function GalleryHero() {
  const reserveBtn = useRef<HTMLButtonElement>(null);
  const menuBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const buttons = [reserveBtn.current, menuBtn.current];

    const cleanups: (() => void)[] = [];

    buttons.forEach((button) => {
      if (!button) return;

      const enter = () => {
        gsap.to(button, {
          scale: 1.05,
          y: -4,
          boxShadow: "0px 18px 45px rgba(214,134,82,0.35)",
          duration: 0.45,
          ease: "power3.out",
        });
      };

      const leave = () => {
        gsap.to(button, {
          scale: 1,
          y: 0,
          boxShadow: "0px 0px 0px rgba(214,134,82,0)",
          duration: 0.45,
          ease: "power3.out",
        });
      };

      button.addEventListener("mouseenter", enter);
      button.addEventListener("mouseleave", leave);

      cleanups.push(() => {
        button.removeEventListener("mouseenter", enter);
        button.removeEventListener("mouseleave", leave);
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <Image
        src="/images/gallery/gallery-banner.png"
        alt="Restaurant Interior"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-[#1c120d]/80" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-44 text-center sm:px-8 md:px-12 lg:px-6 mt-10">
        {/* Top Text */}
        <div className="mb-6 flex items-center gap-3 sm:mb-8 sm:gap-5">
          <span className="h-px w-6 bg-[#c67b47] sm:w-12" />

          <p className="text-[10px] uppercase tracking-[3px] text-[#d68652] sm:text-xs sm:tracking-[6px]">
            CURATED MOMENTS • TIMELESS EXPERIENCES
          </p>

          <span className="h-px w-6 bg-[#c67b47] sm:w-12" />
        </div>

        {/* Heading */}
        <h1 className="font-serif font-semibold leading-[0.9] text-white">
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            Our
          </span>

          <span className="mt-2 block text-5xl font-normal italic text-[#d68652] sm:text-6xl md:text-7xl lg:text-8xl">
            Gallery
          </span>
        </h1>

        {/* Paragraph */}
        <p className="mt-6 max-w-xs text-sm leading-7 text-gray-200 sm:mt-8 sm:max-w-lg sm:text-base md:max-w-2xl md:text-lg md:leading-8">
          Step inside Maison and explore moments of refined dining, elegant interiors, and culinary artistry. Every photograph reflects the warmth, craftsmanship, and unforgettable experiences we create every day.
        </p>
      </div>
    </section>
  );
}
