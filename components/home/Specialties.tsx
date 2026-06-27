"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";


gsap.registerPlugin(ScrollTrigger);

const specialties = [
  {
    title: "Seasonal Dishes",
    image: "/images/home/specialties/handmade-recipes.png",
    href: "/menu",
  },
  {
    title: "Handmade Recipes",
    image: "/images/home/specialties/seasonal-dishes.png",
    href: "/gallery",
  },
  {
    title: "Signature Experience",
    image: "/images/home/specialties/signature-experience.png",
    href: "/reservations",
  },
];

export default function Specialties() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ==========================
      // Heading Animation
      // ==========================

      gsap.from(headingRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
      });

      // ==========================
      // Cards Stagger Animation
      // ==========================

      gsap.from(cardsRef.current, {
        y: 90,
        opacity: 0,
        duration: 1.2,
        stagger: 0.25,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // ==========================
      // Image Parallax
      // ==========================

      imageRefs.current.forEach((img) => {
        if (!img) return;

        gsap.fromTo(
          img,
          {
            scale: 1.2,
            y: 50,
          },
          {
            scale: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: img,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });

      // ==========================
      // Card Hover Animation
      // ==========================

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const image = imageRefs.current[index];

        const enter = () => {
          gsap.to(card, {
            y: -12,
            duration: 0.4,
            ease: "power3.out",
          });

          if (image) {
            gsap.to(image, {
              scale: 1.08,
              duration: 0.6,
              ease: "power3.out",
            });
          }
        };

        const leave = () => {
          gsap.to(card, {
            y: 0,
            duration: 0.4,
            ease: "power3.out",
          });

          if (image) {
            gsap.to(image, {
              scale: 1,
              duration: 0.6,
              ease: "power3.out",
            });
          }
        };

        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);

        return () => {
          card.removeEventListener("mouseenter", enter);
          card.removeEventListener("mouseleave", leave);
        };
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#5B1F08] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto w-[90%] max-w-7xl">
        {/* Heading */}
        <div ref={headingRef} className="text-center">
          <span
            className="
            inline-block
            rounded-full
            bg-[#7A3112]
            px-5
            py-2
            text-xs
            font-semibold
            uppercase
            tracking-[3px]
            text-[#F2B47B]
          "
          >
            Our Specialties
          </span>

          <h2
            className="
            mt-6
            font-serif
            text-4xl
            leading-tight
            text-[#FFF8F1]

            md:text-5xl
            lg:text-6xl
          "
          >
            Crafted With Passion,
            <br />
            Served With Excellence
          </h2>

          <p
            className="
            mx-auto
            mt-6
            max-w-3xl
            text-base
            leading-8
            text-[#E8D8CD]

            md:text-lg
          "
          >
            Every plate tells a story of craftsmanship, premium ingredients, and
            unforgettable flavors designed to create an exceptional dining
            experience.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {specialties.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="
              group
              relative
              h-[520px]
              overflow-hidden
              rounded-[30px]
              cursor-pointer
              shadow-[0_25px_60px_rgba(0,0,0,0.35)]
            "
            >
              {/* Image */}
              <div
                ref={(el) => {
                  imageRefs.current[index] = el;
                }}
                className="absolute inset-0"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Dark Overlay */}
              <div
                className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/90
                via-black/45
                to-black/10
              "
              />

              {/* Golden Glow */}
              <div
                className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#D8844B]/20
                to-transparent
                opacity-0
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
              />

              {/* Content */}
              <div
                className="
                absolute
                bottom-0
                left-0
                z-10
                w-full
                p-8
              "
              >
                <h3
                  className="
                  font-serif
                  text-3xl
                  text-white
                  transition-all
                  duration-500
                  group-hover:-translate-y-2
                "
                >
                  {item.title}
                </h3>

                <Link
                  href={item.href}
                  className="
                    mt-8
                    flex
                    items-center
                    justify-between
                    border-t
                    border-white/15
                    pt-6
                    group/cta
                  "
                >
                  {/* Text */}
                  <div>
                    <span
                      className="
                        flex
                        items-center
                        gap-3
                        text-sm
                        font-semibold
                        uppercase
                        tracking-[4px]
                        text-[#F2B47B]
                        transition-all
                        duration-500
                        group-hover/cta:gap-5
                      "
                    >
                      Learn More

                      <span
                        className="
                          h-[1px]
                          w-8
                          bg-[#F2B47B]
                          transition-all
                          duration-500
                          group-hover/cta:w-14
                        "
                      />
                    </span>
                  </div>

                  {/* Button */}
                  <div
                    className="
                        relative
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#D8844B]/60
                        bg-white/10
                        backdrop-blur-xl
                        transition-all
                        duration-500

                        group-hover:scale-110
                        group-hover:rotate-45
                        group-hover:border-[#D8844B]
                        group-hover:bg-[#D8844B]
                        group-hover:shadow-[0_0_30px_rgba(216,132,75,0.45)]
                      "
                  >
                    <span
                      className="
                        text-xl
                        text-white
                        transition-transform
                        duration-500
                        group-hover:translate-x-[2px]
                        group-hover:-translate-y-[2px]
                      "
                    >
                      ↗
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
