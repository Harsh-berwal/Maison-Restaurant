"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ReservationHero() {
  const heroRef = useRef<HTMLElement>(null);

  const bgRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const tagRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const heroLines = gsap.utils.toArray<HTMLElement>(".hero-line");

      const tl = gsap.timeline({
        defaults: {
          ease: "expo.out",
        },
      });

      // Background Reveal
      tl.fromTo(
        bgRef.current,
        {
          scale: 1.08,
        },
        {
          scale: 1,
          duration: 1.2,
        }
      );

      // Overlay
      tl.from(
        overlayRef.current,
        {
          opacity: 0,
          duration: 0.8,
        },
        "<"
      );

      // Small Heading
      tl.from(
        tagRef.current,
        {
          y: 25,
          opacity: 0,
          duration: 0.45,
        },
        "-=0.6"
      );

      // Main Heading
      tl.from(
        heroLines,
        {
          yPercent: 100,
          opacity: 0,
          stagger: 0.1,
          duration: 0.75,
        },
        "-=0.2"
      );

      // Divider
      tl.from(
        dividerRef.current,
        {
          scaleX: 0,
          transformOrigin: "center",
          duration: 0.45,
        },
        "-=0.3"
      );

      // Paragraph
      tl.from(
        textRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.45,
        },
        "-=0.25"
      );

      // Button
      tl.from(
        btnRef.current,
        {
          y: 15,
          opacity: 0,
          scale: 0.96,
          duration: 0.45,
        },
        "-=0.25"
      );

      // Scroll Indicator
      tl.from(
        scrollRef.current,
        {
          y: 15,
          opacity: 0,
          duration: 0.35,
        },
        "-=0.25"
      );

      // Floating Glow
      gsap.to(glowRef.current, {
        x: 25,
        y: -25,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Background Floating Zoom
      gsap.to(bgRef.current, {
        scale: 1.03,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Scroll Indicator Bounce
      gsap.to(".scroll-dot", {
        y: 8,
        duration: 0.7,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Background Parallax
      gsap.to(bgRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Mouse Parallax
      const handleMouseMove = (e: MouseEvent) => {
        gsap.to(glowRef.current, {
          x: (e.clientX - window.innerWidth / 2) * 0.03,
          y: (e.clientY - window.innerHeight / 2) * 0.03,
          duration: 1,
          overwrite: "auto",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
  <section
    ref={heroRef}
    className="relative h-[85vh] min-h-[800px] overflow-hidden"
  >
    {/* Background */}
    <div
      ref={bgRef}
      className="absolute inset-0"
    >
      <Image
        src="/images/reservations/hero-banner.png"
        alt="Maison Restaurant"
        fill
        priority
        className="object-cover object-center scale-105"
      />
    </div>

    {/* Dark Overlay */}
    <div
      ref={overlayRef}
      className="absolute inset-0 bg-black/60"
    />

    {/* Gradient */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/75" />

    {/* Ambient Glow */}
    <div
      ref={glowRef}
      className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#D8844B]/10 blur-[140px]"
    />

    {/* Decorative Radial Light */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(216,132,75,0.08),transparent_65%)]" />

    {/* Content */}
    <div className="relative z-10 flex h-full items-center justify-center px-6">
      <div className="max-w-4xl text-center">

        {/* Small Heading */}
        <div
          ref={tagRef}
          className="mb-5 flex items-center justify-center gap-4"
        >
          <div className="h-px w-16 bg-[#D8844B]" />

          <span className="font-body text-xs uppercase tracking-[0.35em] text-[#F2B47B] md:text-sm">
            Fine Dining Experience
          </span>

          <div className="h-px w-16 bg-[#D8844B]" />
        </div>

        {/* Heading */}
        <h1
          ref={titleRef}
          className="font-heading text-5xl font-semibold leading-[0.95] text-white md:text-6xl lg:text-7xl"
        >
          <span className="block overflow-hidden">
            <span className="hero-line block">
              Reserve Your
            </span>
          </span>

          <span className="mt-2 block overflow-hidden">
            <span className="hero-line block text-[#F2B47B]">
              Table
            </span>
          </span>
        </h1>

        {/* Divider */}
        <div
          ref={dividerRef}
          className="mx-auto my-7 flex items-center justify-center gap-4"
        >
          <div className="h-px w-16 bg-[#D8844B]/60" />

          <div className="h-2 w-2 rotate-45 bg-[#D8844B]" />

          <div className="h-px w-16 bg-[#D8844B]/60" />
        </div>

        {/* Paragraph */}
        <p
          ref={textRef}
          className="mx-auto max-w-2xl text-base leading-7 text-white/85 md:text-lg"
        >
          Experience exceptional dining in an atmosphere crafted for
          unforgettable moments.
          <br />
          Reserve your table today and indulge in a culinary journey
          where elegance meets timeless flavors.
        </p>
                {/* CTA Button */}
        <div
          ref={btnRef}
          className="mt-10 flex justify-center"
        >
          <Link
            href="#reservation-form"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border border-[#D8844B] bg-[#5B1F08] px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-white transition-all duration-500 hover:-translate-y-1 hover:border-[#F2B47B] hover:bg-[#6A2A10] hover:shadow-[0_20px_50px_rgba(91,31,8,0.45)] md:px-10 md:py-5 md:text-sm"
          >
            {/* Shine Effect */}
            <span className="absolute inset-0 overflow-hidden rounded-xl">
              <span className="absolute left-[-120%] top-0 h-full w-[60%] -skew-x-12 bg-white/20 transition-all duration-1000 group-hover:left-[150%]" />
            </span>

            <span className="relative z-10">
              Reserve Now
            </span>

            <ArrowRight
              size={18}
              className="relative z-10 ml-3 transition-transform duration-500 group-hover:translate-x-2"
            />
          </Link>
        </div>

      </div>
    </div>
      </section>
);
}