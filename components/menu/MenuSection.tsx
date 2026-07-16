"use client";

import Image from "next/image";
import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import {
  starters,
  mains,
  desserts,
  chefSpecial,
  menuImages,
} from "./menuData";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function MenuSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const headingRef = useRef<HTMLDivElement>(null);

  const leftRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const bottomRef = useRef<HTMLDivElement>(null);
  const specialRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      tl.from(headingRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          leftRef.current,
          {
            x: -80,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          centerRef.current,
          {
            scale: 0.92,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          rightRef.current,
          {
            x: 80,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .from(
          bottomRef.current,
          {
            y: 80,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        );

      gsap.from(".menu-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.08,
        duration: 0.7,
        ease: "power2.out",
      });

      gsap.from(specialRef.current, {
        scrollTrigger: {
          trigger: specialRef.current,
          start: "top 85%",
        },
        y: 50,
        rotate: 4,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.6)",
      });

      gsap.utils.toArray(".menu-image").forEach((img) => {
        gsap.to(img as Element, {
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: img as Element,
            scrub: true,
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="bg-[#F8F3ED] py-24"
      id="menu-section"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div
          ref={headingRef}
          className="mb-20 text-center"
          
        >
          <div className="mb-4 flex items-center justify-center gap-5">

            <span className="h-px w-16 bg-[#D68652]" />

            <p className="font-serif text-5xl font-semibold tracking-[6px] text-[#5B1F08]">
              MENU
            </p>

            <span className="h-px w-16 bg-[#D68652]" />

          </div>

          <p className="mt-3 italic text-[#8B5E3C]">
            Thoughtfully curated. Beautifully prepared.
          </p>

        </div>

        {/* First Grid */}

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-20">

          {/* LEFT */}

          <div ref={leftRef}>

            <h2 className="mb-10 border-b border-[#D9C6B6] pb-4 font-serif text-3xl font-semibold tracking-[6px] text-[#A65B2A]">
              STARTERS
            </h2>

            <div className="space-y-10">

              {starters.map((item) => (

                <div
                  key={item.name}
                  className="menu-item"
                >

                  <div className="flex items-start justify-between">

                    <h3 className="font-serif text-xl font-semibold text-[#5B1F08]">
                      {item.name}
                    </h3>

                    <span className="text-lg font-semibold text-[#D68652]">
                      ${item.price}
                    </span>

                  </div>

                  <p className="mt-2 leading-7 text-[#6A6A6A]">
                    {item.description}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* CENTER */}

          <div
            ref={centerRef}
            className="flex flex-col items-center"
          >

            <Image
              src={menuImages.featured}
              alt="Chef's Special"
              width={420}
              height={520}
              className="menu-image h-[340px] w-full rounded-t-full object-cover shadow-xl"
            />

            <div
              ref={specialRef}
              className="mt-10 w-full rounded-xl bg-[#F2E8DD] p-10 text-center shadow-lg"
            >

              <p className="mb-4 text-sm font-medium uppercase tracking-[4px] text-[#D68652]">
                Chef&apos;s Special
              </p>

              <h3 className="font-serif text-4xl font-semibold text-[#5B1F08]">
                {chefSpecial.name}
              </h3>

              <p className="my-5 text-5xl font-semibold text-[#D68652]">
                ${chefSpecial.price}
              </p>

              <p className="leading-8 text-[#666666]">
                {chefSpecial.description}
              </p>

            </div>

          </div>

          {/* RIGHT */}

          <div ref={rightRef}>

            <h2 className="mb-10 border-b border-[#D9C6B6] pb-4 font-serif text-3xl font-semibold tracking-[6px] text-[#A65B2A]">
              MAINS
            </h2>

            <div className="space-y-10">

              {mains.map((item) => (

                <div
                  key={item.name}
                  className="menu-item"
                >

                  <div className="flex items-start justify-between">

                    <h3 className="font-serif text-xl font-semibold text-[#5B1F08]">
                      {item.name}
                    </h3>

                    <span className="text-lg font-semibold text-[#D68652]">
                      ${item.price}
                    </span>

                  </div>

                  <p className="mt-2 leading-7 text-[#6A6A6A]">
                    {item.description}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>
                {/* Bottom Grid */}

        <div
          ref={bottomRef}
          className="mt-32 grid grid-cols-1 items-center gap-16 lg:grid-cols-3 lg:gap-20"
        >

          {/* Left Image */}

          <Image
            src={menuImages.pasta}
            alt="Pasta"
            width={450}
            height={520}
            className="menu-image h-[420px] w-full rounded-tl-[90px] object-cover shadow-xl"
          />

          {/* Desserts */}

          <div>

            <h2 className="mb-10 border-b border-[#D9C6B6] pb-4 font-serif text-3xl font-semibold tracking-[6px] text-[#A65B2A]">
              DESSERTS
            </h2>

            <div className="space-y-10">

              {desserts.map((item) => (

                <div
                  key={item.name}
                  className="menu-item"
                >

                  <div className="flex items-start justify-between">

                    <h3 className="font-serif text-xl font-semibold text-[#5B1F08]">
                      {item.name}
                    </h3>

                    <span className="text-lg font-semibold text-[#D68652]">
                      ${item.price}
                    </span>

                  </div>

                  <p className="mt-2 leading-7 text-[#6A6A6A]">
                    {item.description}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* Right Image */}

          <Image
            src={menuImages.dessert}
            alt="Dessert"
            width={450}
            height={520}
            className="menu-image h-[420px] w-full rounded-tr-[90px] object-cover shadow-xl"
          />

        </div>

      </div>
    </section>
  );
}