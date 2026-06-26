"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  const chefCardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const topCardRef = useRef<HTMLDivElement>(null);
  const bottomCardRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
  const ctx = gsap.context(() => {
    // Initial States
    gsap.set(leftRef.current, {
      x: -80,
      opacity: 0,
    });

    gsap.set(rightRef.current, {
      x: 80,
      opacity: 0,
    });

    gsap.set(imageRef.current, {
      scale: 1.15,
    });



    // Scroll Animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
      },
    });

    tl.to(leftRef.current, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    })
      .to(
        rightRef.current,
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.7"
      )
      .to(
        imageRef.current,
        {
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
        },
        "<"
      );

    // ============================
    // Floating Cards (Much Smoother)
    // ============================

    gsap.to(topCardRef.current, {
      keyframes: [
        { y: -8, rotation: 0.6, duration: 2.8 },
        { y: 0, rotation: 0, duration: 2.8 },
        { y: 8, rotation: -0.6, duration: 2.8 },
        { y: 0, rotation: 0, duration: 2.8 },
      ],
      repeat: -1,
      ease: "sine.inOut",
    });

    gsap.to(bottomCardRef.current, {
      keyframes: [
        { y: 8, rotation: -0.6, duration: 3.2 },
        { y: 0, rotation: 0, duration: 3.2 },
        { y: -8, rotation: 0.6, duration: 3.2 },
        { y: 0, rotation: 0, duration: 3.2 },
      ],
      repeat: -1,
      ease: "sine.inOut",
    });

    // ============================
    // Image Hover
    // ============================

    const image = imageRef.current;

    const enter = () => {
      gsap.to(image, {
        scale: 1.05,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    const leave = () => {
      gsap.to(image, {
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    image?.addEventListener("mouseenter", enter);
    image?.addEventListener("mouseleave", leave);

    return () => {
      image?.removeEventListener("mouseenter", enter);
      image?.removeEventListener("mouseleave", leave);
    };
  }, sectionRef);

  return () => ctx.revert();
}, []);

 return (
  <section
    ref={sectionRef}
    className="relative overflow-hidden bg-[#F7F1E8] py-16 md:py-24 lg:py-32"
  >
    <div className="mx-auto flex w-[92%] max-w-7xl flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">

      {/* ================= LEFT ================= */}
      <div
        ref={leftRef}
        className="w-full text-center lg:w-[46%] lg:text-left"
      >
        {/* Subtitle */}
        <div className="mb-5 flex items-center justify-center gap-3 lg:justify-start">
          <span className="h-px w-10 bg-[#d68652]" />

          <p
            ref={subtitleRef}
            className="text-xs uppercase tracking-[4px] text-[#d68652]"
          >
            Our Story
          </p>
        </div>

        {/* Heading */}
        <h2
          ref={titleRef}
          className="font-serif text-[2.4rem] font-semibold leading-[1.05] text-[#1c120d] sm:text-5xl lg:text-6xl"
        >
          Where Every Meal
          <br />

          <span className="italic text-[#d68652]">
            Tells A Story
          </span>
        </h2>

        {/* Description */}
        <p
          ref={descRef}
          className="mx-auto mt-8 max-w-xl text-[15px] leading-8 text-[#3d312d] sm:text-base lg:mx-0 lg:text-lg"
        >
          Since 1998, we have crafted unforgettable dining experiences by
          blending timeless culinary traditions with modern innovation.
          Every ingredient is carefully selected, every dish thoughtfully
          prepared, and every guest welcomed like family.
        </p>

        {/* Chef Card */}
        <div
          ref={chefCardRef}
          className="mx-auto mt-10 flex w-full max-w-md items-center gap-4 rounded-[28px] bg-[#4B403A] p-5 shadow-xl lg:mx-0"
        >
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#D8844B] text-xl font-bold text-white">
            JB
          </div>

          <div className="text-left">
            <h4 className="text-lg font-semibold text-white">
              Chef Julien Bernard
            </h4>

            <p className="mt-1 text-sm text-gray-300">
              Executive Chef • 3 Michelin Stars
            </p>
          </div>
        </div>
      </div>

      {/* ================= RIGHT ================= */}
      <div
        ref={rightRef}
        className="relative mx-auto w-full max-w-[620px] lg:mx-0 lg:w-[48%]"
      >

        {/* Top Floating Card */}
        <div
          ref={topCardRef}
          className="
            absolute
            top-4
            right-4
            z-20

            rounded-[24px]
            bg-[#D8844B]
            px-5
            py-4
            shadow-2xl

            sm:top-6
            sm:right-6

            lg:-top-6
            lg:-right-6
          "
        >
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            26+
          </h3>

          <p className="mt-1 text-xs text-white sm:text-sm">
            Years Of Excellence
          </p>
        </div>

        {/* Image */}
        <div
          className="overflow-hidden rounded-[28px] lg:rounded-[34px]"
        >
          <div ref={imageRef}>
            <Image
              src="/images/home/about-interior.png"
              alt="Luxury Restaurant"
              width={620}
              height={760}
              className="
                h-[430px]
                w-full
                rounded-[28px]
                object-cover

                sm:h-[560px]

                md:h-[650px]

                lg:h-[700px]
                lg:rounded-[34px]
              "
            />
          </div>
        </div>

        {/* Bottom Floating Card */}
        <div
          ref={bottomCardRef}
          className="
            absolute
            bottom-4
            left-4
            z-20

            rounded-[24px]
            bg-[#4B403A]
            px-5
            py-4
            shadow-2xl

            sm:bottom-6
            sm:left-6

            lg:-bottom-6
            lg:-left-6
          "
        >
          <h3 className="text-2xl font-bold text-[#D8844B] sm:text-3xl">
            ★★★
          </h3>

          <p className="mt-2 text-xs text-gray-200 sm:text-sm">
            Michelin Stars
          </p>
        </div>
      </div>
    </div>
  </section>
);}