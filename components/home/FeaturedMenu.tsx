"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedDishes() {
  const sectionRef = useRef<HTMLElement>(null);

  const headingRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  const btn1Ref = useRef<HTMLButtonElement>(null);
  const btn2Ref = useRef<HTMLButtonElement>(null);
  const btn3Ref = useRef<HTMLButtonElement>(null);

  const dishes = [
    {
      title: "Prime Wagyu",
      badge: "Chef's Selection",
      image: "/images/home/featuredDish/dish-1.png",
      price: "$185",
      description:
        "A5 Japanese Wagyu served with roasted potatoes, seasonal vegetables and black truffle sauce.",
      ref: card1Ref,
      btnRef: btn1Ref,
    },
    {
      title: "Atlantic Salmon",
      badge: "Signature Dish",
      image: "/images/home/featuredDish/dish-2.png",
      price: "$145",
      description:
        "Fresh Atlantic salmon with herb butter, asparagus and citrus cream reduction.",
      ref: card2Ref,
      btnRef: btn2Ref,
    },
    {
      title: "Braised Lamb",
      badge: "Guest Favorite",
      image: "/images/home/featuredDish/dish-3.png",
      price: "$165",
      description:
        "Slow-cooked lamb shoulder finished with red wine jus, creamy mashed potatoes and seasonal vegetables.",
      ref: card3Ref,
      btnRef: btn3Ref,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial State

      gsap.set(headingRef.current, {
        opacity: 0,
        y: 60,
      });

      gsap.set(menuRef.current, {
        opacity: 0,
        x: 40,
      });

      gsap.set([card1Ref.current, card2Ref.current, card3Ref.current], {
        opacity: 0,
        y: 80,
        scale: 0.94,
      });

      // Main Timeline

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });

      tl.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      })

        .to(
          menuRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.7",
        )

        .to(
          [card1Ref.current, card2Ref.current, card3Ref.current],
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.18,
          },
          "-=0.4",
        );

      // Premium Card Hover

      const cards = [card1Ref.current, card2Ref.current, card3Ref.current];

      cards.forEach((card) => {
        if (!card) return;

        const enter = () => {
          gsap.to(card, {
            y: -12,
            scale: 1.02,
            duration: 0.45,
            ease: "power3.out",
            boxShadow: "0 35px 70px rgba(0,0,0,.28)",
          });

          const img = card.querySelector("img");

          if (img) {
            gsap.to(img, {
              scale: 1.08,
              duration: 0.8,
              ease: "power3.out",
            });
          }
        };

        const leave = () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.45,
            ease: "power3.out",
            boxShadow: "0 10px 25px rgba(0,0,0,.08)",
          });

          const img = card.querySelector("img");

          if (img) {
            gsap.to(img, {
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
            });
          }
        };

        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);
      });

      // Magnetic Buttons
      const buttons = [btn1Ref.current, btn2Ref.current, btn3Ref.current];

      buttons.forEach((button) => {
        if (!button) return;

        const enter = () => {
          gsap.to(button, {
            scale: 1.08,
            y: -3,
            duration: 0.35,
            ease: "power3.out",
          });
        };

        const leave = () => {
          gsap.to(button, {
            scale: 1,
            y: 0,
            duration: 0.35,
            ease: "power3.out",
          });
        };

        button.addEventListener("mouseenter", enter);
        button.addEventListener("mouseleave", leave);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F7F1E8] py-16 md:py-24 lg:py-28">
      <div className="mx-auto w-[92%] max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center gap-8 text-center md:mb-16 md:flex-row md:items-end md:justify-between md:text-left">
          {/* Left */}
          <div ref={headingRef}>
            <div className="mb-4 flex items-center justify-center gap-3 md:justify-start">
              <span className="h-px w-10 bg-[#D8844B]" />

              <p className="text-[11px] font-medium uppercase tracking-[4px] text-[#D8844B] sm:text-xs sm:tracking-[5px]">
                Featured Dishes
              </p>
            </div>

            <h2 className="font-serif leading-[1.05] text-[#241814]">
              <span className="block text-4xl sm:text-5xl lg:text-6xl">
                Crafted with
              </span>

              <span className="block text-4xl italic text-[#D8844B] sm:text-5xl lg:text-6xl">
                Passion
              </span>
            </h2>
          </div>

          {/* Right */}
          <div ref={menuRef} className="flex justify-center md:justify-end">
            <Link href="/menu">
              <button
                className="
              group
              relative
              overflow-hidden
              rounded-full
              border
              border-[#D8844B]
              px-6
              py-3

              text-sm

              transition-all
              duration-500

              hover:shadow-[0_15px_40px_rgba(216,132,75,0.25)]

              sm:px-7
              sm:py-3.5
              sm:text-base

              lg:px-8
              lg:py-4
            "
              >
                {/* Fill Animation */}
                <span
                  className="
                absolute
                inset-0
                -translate-x-full
                bg-[#D8844B]
                transition-transform
                duration-500
                group-hover:translate-x-0
              "
                />

                {/* Content */}
                <span
                  className="
                relative
                flex
                items-center
                gap-3
                text-[#241814]
                transition-colors
                duration-500
                group-hover:text-white
              "
                >
                  <span className="font-medium tracking-wide">
                    View Full Menu
                  </span>

                  <span
                    className="
                  text-lg
                  transition-all
                  duration-500
                  group-hover:translate-x-2
                "
                  >
                    →
                  </span>
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {dishes.map((dish, index) => (
            <div
              key={index}
              ref={dish.ref}
              className="
                group/card
                overflow-hidden
                rounded-[24px]
                bg-white
                shadow-lg
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-2xl
              "
                    >
              {/* Image */}
              <div className="overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.title}
                  width={500}
                  height={600}
                  className="
                    h-64
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover/card:scale-110

                    sm:h-72
                    md:h-80
                    lg:h-[340px]
                  "
                        />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 lg:p-7">
                <span
                  className="
                      inline-block
                      rounded-full
                      bg-[#FDF0E7]
                      px-3
                      py-2
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[2px]
                      text-[#D8844B]

                      sm:px-4
                      sm:text-xs
                    "
                          >
                  {dish.badge}
                </span>

                <h3
                  className="
                      mt-5
                      font-serif
                      text-2xl
                      leading-tight
                      text-[#241814]

                      sm:text-3xl
                    "
                          >
                  {dish.title}
                </h3>

                <p
                  className="
                      mt-4
                      text-sm
                      leading-7
                      text-gray-600

                      sm:text-base
                    "
                          >
                  {dish.description}
                </p>

                <div
                  className="
                      mt-8
                      flex
                      flex-col
                      gap-4

                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                    "
                          >
                  <span
                    className="
                      text-2xl
                      font-bold
                      text-[#D8844B]

                      sm:text-3xl
                    "
                          >
                    {dish.price}
                  </span>
                  <Link href="/menu">
                  <button
                    ref={dish.btnRef}
                    className="
                      group/button
                      relative
                      overflow-hidden
                      rounded-full
                      bg-[#241814]
                      border
                      border-[#241814]
                      px-6
                      py-3
                      text-sm
                      transition-all
                      duration-500
                      hover:border-[#D8844B]
                      hover:shadow-[0_15px_40px_rgba(216,132,75,0.25)]
                      sm:px-7
                      sm:py-3.5
                      sm:text-base
                    "
                          >
                    {/* Fill Animation */}
                    <span
                      className="
                        absolute
                        inset-0
                        -translate-x-full
                        bg-[#D8844B]
                        transition-transform
                        duration-500
                        ease-out
                        group-hover/button:translate-x-0
                      "
                            />

                    {/* Button Text */}
                    <span
                      className="
                        relative
                        z-10
                        font-medium
                        tracking-wide
                        text-white
                        transition-colors
                        duration-500
                        group-hover/button:text-white
                      "
                            >
                      View Dish
                    </span>
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
