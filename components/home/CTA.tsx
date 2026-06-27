"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock3, MapPin, Phone, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    icon: Clock3,
    title: "Opening Hours",
    value: "Mon–Sun, 12pm – 11pm",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "24 Rue des Gourmets, Paris",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+33 1 42 60 33 44",
  },
  {
    icon: Users,
    title: "Capacity",
    value: "Up to 120 Guests",
  },
];

export default function ReservationCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  const subtitleRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonWrapperRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.from(subtitleRef.current, {
        y: 20,
        opacity: 0,
      })

        .from(headingRef.current, {
          y: 40,
          opacity: 0,
        })

        .from(paragraphRef.current, {
          y: 20,
          opacity: 0,
        })

        .from(buttonWrapperRef.current, {
          y: 20,
          opacity: 0,
          stagger: 0.15,
        })

        .from(
          cardsRef.current,
          {
            opacity: 0,
            x: 40,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#5B1F08] py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="ambient-glow-left absolute -left-52 top-0 h-[320px] w-[320px] rounded-full bg-[#D37B44]/20 blur-[110px] sm:h-[420px] sm:w-[420px] lg:h-[520px] lg:w-[520px]" />

        <div className="ambient-glow-right absolute -right-52 bottom-0 h-[320px] w-[320px] rounded-full bg-[#FFB26B]/10 blur-[110px] sm:h-[420px] sm:w-[420px] lg:h-[520px] lg:w-[520px]" />
      </div>

      <div className="relative z-20 mx-auto w-[92%] max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          {/* LEFT */}

          <div className="order-1 text-center lg:text-left">
            {/* Subtitle */}

            <div
              ref={subtitleRef}
              className="mb-5 flex items-center justify-center gap-3 lg:justify-start"
            >
              <div className="h-px w-8 bg-[#D37B44]" />

              <span
                className="
            text-[10px]
            uppercase
            tracking-[4px]
            text-[#D37B44]

            sm:text-xs
          "
              >
                MAKE A RESERVATION
              </span>

              <div className="h-px w-8 bg-[#D37B44] lg:hidden" />
            </div>

            {/* Heading */}

            <h2
              ref={headingRef}
              className="
            font-serif
            text-4xl
            leading-tight
            text-white

            sm:text-5xl

            md:text-[54px]

            lg:text-6xl

            xl:text-7xl
          "
            >
              Reserve Your
              <br />
              Table Today
            </h2>

            {/* Paragraph */}

            <p
              ref={paragraphRef}
              className="
            mx-auto
            mt-7
            max-w-xl
            text-[15px]
            leading-8
            text-[#E8D8CD]

            sm:text-base

            lg:mx-0
            lg:text-lg
          "
            >
              Secure your seat for an unforgettable dining experience. Whether
              it&apos;s an intimate dinner, a family celebration, or a special
              occasion, we&apos;re ready to welcome you with exceptional cuisine
              and warm hospitality.
            </p>

            {/* Buttons */}

            <div
              className="
            mt-10
            flex
            flex-col
            items-center
            gap-4

            sm:flex-row
            sm:justify-center

            lg:justify-start
          "
            >
              {/* Reserve */}

              <Link href="/reservations">
                <button
                  className="
                reservation-btn
                group
                relative
                w-full
                overflow-hidden
                rounded-full
                bg-[#D37B44]
                px-8
                py-3.5
                text-white
                transition-all
                duration-500
                hover:shadow-[0_15px_40px_rgba(216,132,75,0.3)]

                sm:w-auto
              "
                >
                  <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 group-hover:translate-x-0" />

                  <span className="relative flex items-center justify-center gap-3 transition-colors duration-500 group-hover:text-[#241814]">
                    <span className="font-medium tracking-wide">
                      Reserve Table
                    </span>

                    <span className="text-lg transition-all duration-500 group-hover:translate-x-2">
                      →
                    </span>
                  </span>
                </button>
              </Link>

              {/* Contact */}

              <Link href="/contact">
                <button
                  className="
                reservation-btn
                group
                relative
                w-full
                overflow-hidden
                rounded-full
                border
                border-[#A06D53]
                px-8
                py-3.5
                text-white
                transition-all
                duration-500
                hover:shadow-[0_15px_40px_rgba(216,132,75,0.3)]

                sm:w-auto
              "
                >
                  <span className="absolute inset-0 -translate-x-full bg-[#D37B44] transition-transform duration-500 group-hover:translate-x-0" />

                  <span className="relative flex items-center justify-center gap-3">
                    <span className="font-medium tracking-wide">
                      Contact Us
                    </span>

                    <span className="text-lg transition-all duration-500 group-hover:translate-x-2">
                      →
                    </span>
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT STARTS HERE */}
          <div
            ref={cardsRef}
            className="
                order-2
                grid
                grid-cols-1
                gap-5
                sm:grid-cols-2
                sm:gap-6
                lg:gap-7
            "
          >
            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="
                    info-card
                    group
                    relative
                    overflow-hidden
                    rounded-[22px]
                    border
                    border-white/10
                    bg-white/5
                    p-6
                    backdrop-blur-md
                    transition-all
                    duration-500
                    hover:border-[#D37B44]/40
                    hover:bg-white/10
                    hover:-translate-y-2
                    hover:shadow-[0_20px_60px_rgba(211,123,68,0.18)]
                    sm:p-7
                    "
                >
                  {/* Hover Glow */}

                  <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-br
                        from-[#D37B44]/15
                        via-transparent
                        to-transparent
                        opacity-0
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                    "
                  />

                  <div className="relative z-10">
                    {/* Icon */}

                    <div
                      className="
                        mb-5
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-[#D37B44]/15
                        transition-all
                        duration-500
                        group-hover:scale-110
                        group-hover:rotate-6
                        "
                    >
                      <Icon size={28} className="text-[#D37B44]" />
                    </div>

                    {/* Title */}

                    <p
                      className="
                        text-[11px]
                        uppercase
                        tracking-[3px]
                        text-[#C7A794]
                        sm:text-xs
                        "
                    >
                      {card.title}
                    </p>

                    {/* Value */}

                    <h3
                      className="
                        mt-3
                        text-lg
                        font-semibold
                        leading-8
                        text-white
                        sm:text-xl
                        lg:text-2xl
                        "
                    >
                      {card.value}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
