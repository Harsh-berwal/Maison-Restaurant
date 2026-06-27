"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sophie Laurent",
    role: "Food Critic, Le Monde",
    image: "/images/home/testimonials/1.png",
    rating: 5,
    review:
      "Maison is not merely a restaurant—it is a pilgrimage. Chef Moreau has achieved something truly rare: a cuisine that feels both deeply rooted and genuinely surprising. Every course was executed with remarkable precision and elegance.",
  },
  {
    id: 2,
    name: "James Whitmore",
    role: "Travel + Leisure Magazine",
    image: "/images/home/testimonials/2.png",
    rating: 5,
    review:
      "Three hours, twelve exquisite courses, and memories that will last a lifetime. Every detail, from the service to the final dessert, reflected an uncompromising commitment to excellence and hospitality.",
  },
  {
    id: 3,
    name: "Camille Rousseau",
    role: "Regular Guest",
    image: "/images/home/testimonials/3.png",
    rating: 5,
    review:
      "We celebrate every anniversary here. Eleven years, eleven extraordinary evenings, and Maison continues to exceed every expectation. It has become more than a restaurant—it feels like home.",
  }
];
export default function Testimonials() {
const sectionRef = useRef(null);
const headingRef = useRef(null);
const subHeadingRef = useRef(null);
const cardsRef = useRef(null);

useEffect(() => {
  const ctx = gsap.context(() => {

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
    });

    tl.from(subHeadingRef.current, {
      y: 25,
      opacity: 0,
      filter: "blur(8px)",
      duration: 0.8,
      ease: "power3.out",
    })

      .from(
        headingRef.current,
        {
          y: 60,
          opacity: 0,
          filter: "blur(12px)",
          duration: 1,
          ease: "power4.out",
        },
        "-=0.4"
      )

      .from(
        ".testimonial-card",
        {
          y: 80,
          opacity: 0,
          rotateX: -10,
          stagger: 0.18,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.5"
      )

      .from(
        ".avatar",
        {
          scale: 0.4,
          opacity: 0,
          stagger: 0.18,
          duration: 0.6,
          ease: "back.out(2)",
        },
        "-=0.8"
      )

      .from(
        ".star",
        {
          scale: 0,
          rotation: 180,
          stagger: {
            each: 0.04,
            from: "start",
          },
          duration: 0.4,
          ease: "back.out(3)",
        },
        "-=1"
      );



    // Card Hover

    gsap.utils.toArray<HTMLElement>(".testimonial-card").forEach((card) => {

      card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 10;
        const rotateX = -((y / rect.height) - 0.5) * 10;

        gsap.to(card, {
          rotationY: rotateY,
          rotationX: rotateX,
          y: -8,
          transformPerspective: 1000,
          transformOrigin: "center",
          duration: 0.4,
          ease: "power2.out",
        });

      });

      card.addEventListener("mouseleave", () => {

        gsap.to(card, {
          rotationX: 0,
          rotationY: 0,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        });

      });

    });

  }, sectionRef);

  return () => ctx.revert();
}, []);

return (
    <section
  ref={sectionRef}
  className="relative overflow-hidden bg-[#EEF4F7] py-16 sm:py-20 lg:py-28 xl:py-32"
>
  <div className="mx-auto w-[92%] max-w-7xl">

    {/* Heading */}
    <div className="text-center">

      <div
        ref={subHeadingRef}
        className="mb-4 flex items-center justify-center gap-3"
      >
        <div className="h-px w-8 bg-[#B08A74]" />

        <span className="text-[10px] font-medium uppercase tracking-[4px] text-[#9D7A65] sm:text-xs">
          Guest Reviews
        </span>

        <div className="h-px w-8 bg-[#B08A74]" />
      </div>

      <h2
        ref={headingRef}
        className="
          font-serif
          text-3xl
          leading-tight
          text-[#5B1F08]
          sm:text-4xl
          lg:text-5xl
          xl:text-6xl
        "
      >
        Words from Our
        <br />
        Distinguished Guests
      </h2>
    </div>

    {/* Cards */}

    <div
      ref={cardsRef}
      className="
        mt-12
        grid
        grid-cols-1
        gap-6
        sm:mt-16
        md:grid-cols-2
        lg:mt-20
        lg:grid-cols-3
      "
      style={{ perspective: "1200px" }}
    >
      {testimonials.map((item) => (
        <div
          key={item.id}
          className="
            testimonial-card
            group
            relative
            overflow-hidden
            rounded-[24px]
            bg-white
            p-6
            shadow-xl
            transition-shadow
            duration-300
            sm:p-8
          "
        >
          {/* Glow */}

          <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#fff7f2] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="relative z-10">

            {/* Stars */}

            <div className="stars mb-5 flex gap-1 text-[#D47C42]">
              {Array.from({ length: item.rating }).map((_, i) => (
                <svg
                  key={i}
                  className="star h-4 w-4 fill-current sm:h-5 sm:w-5"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 1l2.4 5.2L18 7l-4 4 1 6-5-3-5 3 1-6-4-4 5.6-.8z" />
                </svg>
              ))}
            </div>

            {/* Review */}

            <p
              className="
                italic
                text-[15px]
                leading-7
                text-[#6F5A4C]
                sm:text-base
                sm:leading-8
              "
            >
              {item.review}
            </p>

            <div className="my-6 h-px bg-[#ECE2DA]" />

            {/* User */}

            <div className="flex items-center gap-4">

              <Image
                src={item.image}
                alt={item.name}
                width={52}
                height={52}
                className="avatar h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14"
              />

              <div>

                <h4 className="text-base font-semibold text-[#5B1F08] sm:text-lg">
                  {item.name}
                </h4>

                <p className="text-sm text-[#9A8A80]">
                  {item.role}
                </p>

              </div>

            </div>

          </div>
        </div>
      ))}
    </div>

  </div>
</section>
)
}