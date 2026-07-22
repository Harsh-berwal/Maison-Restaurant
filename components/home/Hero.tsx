"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function Hero() {
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
                src="/images/home/hero-bg.png"
                alt="Restaurant Interior"
                fill
                priority
                fetchPriority="high"
                sizes="100vw"
                className="object-cover object-center"
                />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-[#1c120d]/80" />

            {/* Content */}
            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-44 text-center sm:px-8 md:px-12 lg:px-6">

                {/* Top Text */}
                <div className="mb-6 flex items-center gap-3 sm:mb-8 sm:gap-5">
                    <span className="h-px w-6 bg-[#c67b47] sm:w-12" />

                    <p className="text-[10px] uppercase tracking-[3px] text-[#d68652] sm:text-xs sm:tracking-[6px]">
                        Est. 1998 • Paris, France
                    </p>

                    <span className="h-px w-6 bg-[#c67b47] sm:w-12" />
                </div>

                {/* Heading */}
                <h1 className="font-serif font-semibold leading-[0.9] text-white">
                    <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                        Dine With Us
                    </span>

                    <span className="mt-2 block text-5xl font-normal italic text-[#d68652] sm:text-6xl md:text-7xl lg:text-8xl">
                        Tonight
                    </span>
                </h1>

                {/* Paragraph */}
                <p className="mt-6 max-w-xs text-sm leading-7 text-gray-200 sm:mt-8 sm:max-w-lg sm:text-base md:max-w-2xl md:text-lg md:leading-8">
                    An intimate celebration of French culinary tradition,
                    elevated by seasonal ingredients and an obsession with
                    perfection.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex w-full max-w-sm flex-col gap-4 sm:mt-10 sm:max-w-none sm:flex-row sm:justify-center">
                    <Link href="/reservations"  >
                        <button
                            ref={reserveBtn}
                            className="w-full rounded-full bg-[#d68652] px-8 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#e38b57] sm:w-auto sm:px-10 sm:py-4 sm:text-base cursor-pointer"
                        >
                            Reserve Table
                        </button>
                    </Link>

                    <Link href="/menu">
                        <button
                            ref={menuBtn}
                            className="w-full rounded-full border border-white/40 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors duration-300 hover:bg-white hover:text-black sm:w-auto sm:px-10 sm:py-4 sm:text-base cursor-pointer"
                        >
                            View Menu
                        </button>
                    </Link>

                </div>
            </div>

            {/* Bottom Stats */}
            <div className="absolute bottom-0 z-10 grid w-full grid-cols-2 bg-[#2b170f]/90 backdrop-blur-md sm:grid-cols-4">

                <div className="flex h-20 flex-col items-center justify-center border-r border-b border-white/10 sm:h-24 sm:border-b-0">
                    <span className="text-xl text-[#d68652] sm:text-2xl">
                        ★★★
                    </span>

                    <p className="mt-1 text-[11px] text-gray-300 sm:text-sm">
                        Michelin Stars
                    </p>
                </div>

                <div className="flex h-20 flex-col items-center justify-center border-b border-white/10 sm:h-24 sm:border-r sm:border-b-0">
                    <h3 className="text-2xl font-semibold text-[#d68652] sm:text-3xl">
                        #4
                    </h3>

                    <p className="mt-1 text-[11px] text-gray-300 sm:text-sm">
                        World&apos;s 50 Best
                    </p>
                </div>

                <div className="flex h-20 flex-col items-center justify-center border-r border-white/10 sm:h-24 sm:border-r">
                    <h3 className="text-2xl font-semibold text-[#d68652] sm:text-3xl">
                        26+
                    </h3>

                    <p className="mt-1 text-[11px] text-gray-300 sm:text-sm">
                        Years of Excellence
                    </p>
                </div>

                <div className="flex h-20 flex-col items-center justify-center sm:h-24">
                    <h3 className="text-2xl font-semibold text-[#d68652] sm:text-3xl">
                        4.9
                    </h3>

                    <p className="mt-1 text-[11px] text-gray-300 sm:text-sm">
                        Guest Rating
                    </p>
                </div>

            </div>
        </section>
    )
};