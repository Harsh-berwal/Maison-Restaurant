"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const gallery = [
  {
    id: 1,
    src: "/images/gallery/interiors/1.png",
    className: "row-span-2",
    dec: "Sunlit Dining Room",
  },
  {
    id: 2,
    src: "/images/gallery/food/1.png",
    className: "row-span-1",
    dec: "Seared Scallops",
  },
  {
    id: 3,
    src: "/images/gallery/interiors/2.png",
    className: "row-span-2",
    dec: "Private Dining Experience",
  },
  {
    
    id: 4,
    src: "/images/gallery/food/5.png",
    className: "row-span-2",
    dec: "Reserve Collection Wine",
  },
  {
    id: 5,
    src: "/images/gallery/food/3.png",
    className: "row-span-2",
    dec: "Seasonal Berry Dessert",
  },
  {
    id: 6,
    src: "/images/gallery/food/4.png",
    className: "row-span-2",
    dec: "Braised Lamb",
  },
  {
    id: 7,
    src: "/images/gallery/food/2.png",
    className: "row-span-2",
    dec: "Signature Citrus Cocktail",
  },
  {
    id: 8,
    src: "/images/gallery/food/6.png",
    className: "row-span-2",
    dec: "Pan-Seared Sea Bass",
  },
  {
    id: 9,
    src: "/images/home/featuredDish/dish-1.png",
    className: "row-span-2",
    dec: "Prime Wagyu",
  },
  {
    id: 10,
    src: "/images/home/featuredDish/dish-2.png",
    className: "row-span-1",
    dec: "Atlantic Salmon",
  }
];

export default function GallerySection() {
  const section = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gallery-card", {
        y: 120,
        opacity: 0,
        scale: 0.95,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section.current,
          start: "top 75%",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={section}
      className="bg-[#F7F1E8] py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="tracking-[0.4em] uppercase text-[#C67B4B] text-sm">
            Maison Moments
          </p>

          <h2 className="mt-5 font-serif text-6xl text-[#2B1810]">
            Gallery
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
            Every photograph captures the warmth, elegance and unforgettable
            experiences that define Maison.
          </p>
        </div>

        <div
          className="
            grid
            auto-rows-[180px]
            grid-cols-1
            gap-6

            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {gallery.map((item) => (
            <div
              key={item.id}
              className={`gallery-card relative overflow-hidden rounded-[32px] ${item.className} group`}
            >
              <Image
                src={item.src}
                alt=""
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/50
                  via-black/5
                  to-transparent
                  opacity-0
                  transition
                  duration-500
                  group-hover:opacity-100
                "
              />

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  translate-y-10
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:translate-y-0
                  group-hover:opacity-100
                "
              >
                <span className="text-white text-xl font-serif">
                  {item.dec}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}