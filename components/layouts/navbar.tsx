"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useLayoutEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navRef = useRef<HTMLElement>(null);

  const reserveBtn = useRef<HTMLButtonElement>(null);
  const shine = useRef<HTMLSpanElement>(null);

  const logoRef = useRef<HTMLAnchorElement>(null);

  const drawerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const menuItems = useRef<(HTMLAnchorElement | null)[]>([]);
  const reserveMobile = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial Drawer State
      gsap.set(drawerRef.current, {
        xPercent: -100,
      });

      gsap.set(overlayRef.current, {
        opacity: 0,
        pointerEvents: "none",
      });

      // Logo Animation
      const logo = logoRef.current;

      const logoEnter = () => {
        gsap.to(logo, {
          scale: 1.08,
          y: -2,
          rotation: 1,
          duration: 0.45,
          ease: "expo.out",
        });
      };

      const logoLeave = () => {
        gsap.to(logo, {
          scale: 1,
          y: 0,
          rotation: 0,
          duration: 0.45,
          ease: "expo.out",
        });
      };

      logo?.addEventListener("mouseenter", logoEnter);
      logo?.addEventListener("mouseleave", logoLeave);

      //Button Animation

      const button = reserveBtn.current;
      const shineLayer = shine.current;

      const buttonEnter = () => {
        if (!button || !shineLayer) return;

        const width = button.offsetWidth;

        gsap.killTweensOf([button, shineLayer]);

        gsap.to(button, {
          y: -4,
          scale: 1.04,
          duration: 0.45,
          ease: "expo.out",
          boxShadow: "0 20px 45px rgba(213,90,19,.35)",
        });

        gsap.fromTo(
          shineLayer,
          {
            x: -120,
            opacity: 0,
          },
          {
            x: width + 120,
            opacity: 1,
            duration: 1,
            ease: "power.inOut",
            onComplete: () => {
              gsap.set(shineLayer, {
                x: -120,
                opacity: 0,
              });
            },
          }
        );
      };

      const buttonLeave = () => {
        gsap.to(button, {
          y: 0,
          scale: 1,
          duration: 0.45,
          ease: "expo.out",
          boxShadow: "0 0 0 rgba(0,0,0,0)",
        });
      };

      button?.addEventListener("mouseenter", buttonEnter);
      button?.addEventListener("mouseleave", buttonLeave);

      // Mobile Drawer
      if (menuOpen) {
        const tl = gsap.timeline();

        tl.to(
          overlayRef.current,
          {
            opacity: 1,
            pointerEvents: "auto",
            duration: 0.25,
          },
          0
        )
          .to(
            drawerRef.current,
            {
              xPercent: 0,
              duration: 0.7,
              ease: "expo.out",
            },
            0
          )
          .fromTo(
            menuItems.current.filter(Boolean),
            {
              opacity: 0,
              x: -25,
            },
            {
              opacity: 1,
              x: 0,
              stagger: 0.08,
              duration: 0.45,
              ease: "power3.out",
            },
            "-=0.35"
          )
          .fromTo(
            reserveMobile.current,
            {
              opacity: 0,
              y: 25,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              ease: "power3.out",
            },
            "-=0.2"
          );
      } else {
        gsap.to(drawerRef.current, {
          xPercent: -100,
          duration: 0.55,
          ease: "expo.inOut",
        });

        gsap.to(overlayRef.current, {
          opacity: 0,
          pointerEvents: "none",
          duration: 0.25,
        });
      }

      // Cleanup
      return () => {
        logo?.removeEventListener("mouseenter", logoEnter);
        logo?.removeEventListener("mouseleave", logoLeave);

        button?.removeEventListener("mouseenter", buttonEnter);
        button?.removeEventListener("mouseleave", buttonLeave);
      };
    }, navRef);

    return () => ctx.revert();
  }, [menuOpen]);

  return (
    <>
      <header
        ref={navRef}
        className="absolute top-0 left-0 z-50 w-full"
      >
        <nav className="flex h-20 items-center justify-between border-b border-white/10 bg-[#5B1F08]/95 px-5 backdrop-blur-md md:px-8 lg:px-24">

          {/* Desktop Links */}
          <div className="hidden items-center gap-10 text-white font-medium lg:flex">
            <Link href="/" className="transition-colors duration-300 hover:text-[#F6B26B]">
              Home
            </Link>

            <Link href="/menu" className="transition-colors duration-300 hover:text-[#F6B26B]">
              Menu
            </Link>

            <Link href="/gallery" className="transition-colors duration-300 hover:text-[#F6B26B]">
              Gallery
            </Link>
            
            <Link href="/contact" className="transition-colors duration-300 hover:text-[#F6B26B]">
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="text-white lg:hidden"
          >
            <Menu size={30} strokeWidth={2.2} />
          </button>

          {/* Logo */}
          <Link
            ref={logoRef}
            href="/"
            className="absolute left-1/2 -translate-x-1/2 w-[130px] md:w-[160px] lg:w-[180px]"
          >
            <Image
              src="/logo.png"
              alt="Maison"
              width={180}
              height={180}
              priority
              className="h-auto w-full object-contain pt-3"
            />
          </Link>

          {/* Reserve Button */}
          <Link href="/reservations">
            <button
              ref={reserveBtn}
              className="relative cursor-pointer overflow-hidden rounded-xl bg-[#D55A13] px-4 py-2 text-sm font-semibold tracking-wide text-white md:px-6 md:py-3 md:text-base lg:px-8"
            >
              <span className="relative z-20">
                Reserve
              </span>

              <span
                ref={shine}
                className="pointer-events-none absolute top-0 -left-24 h-full w-12 rotate-[25deg] bg-white/40 blur-md"
              />
            </button>
          </Link>

        </nav>
      </header>

      {/* Overlay */}
      <div
        ref={overlayRef}
        onClick={() => setMenuOpen(false)}
        className="fixed inset-0 z-[99] bg-black/50 opacity-0 pointer-events-none"
      />

      {/* Mobile Drawer */}
      <aside
        ref={drawerRef}
        className="fixed left-0 top-0 z-[100] flex h-screen w-[320px] -translate-x-full flex-col bg-[#5B1F08] shadow-2xl"
      >

        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-6">

          <Image
            src="/logo.png"
            alt="Maison"
            width={150}
            height={150}
            priority
            className="h-auto w-full object-contain pt-3"
          />

          <button
            onClick={() => setMenuOpen(false)}
            className="text-white relative z-20 lg:hidden"
          >
            <X size={30} />
          </button>

        </div>

        {/* Drawer Links */}
        <div className="flex flex-1 flex-col gap-8 px-8 py-10 text-lg font-medium text-white">

          <Link
            ref={(el) => {
              menuItems.current[0] = el;
            }}
            href="/"
            onClick={() => setMenuOpen(false)}
            className="transition hover:text-[#F6B26B]"
          >
            Home
          </Link>

          <Link
            ref={(el) => {
              menuItems.current[1] = el;
            }}
            href="/menu"
            onClick={() => setMenuOpen(false)}
            className="transition hover:text-[#F6B26B]"
          >
            Menu
          </Link>

          <Link
            ref={(el) => {
              menuItems.current[2] = el;
            }}
            href="/gallery"
            onClick={() => setMenuOpen(false)}
            className="transition hover:text-[#F6B26B]"
          >
            Gallery
          </Link>

          <Link
            ref={(el) => {
              menuItems.current[3] = el;
            }}
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="transition hover:text-[#F6B26B]"
          >
            About
          </Link>

          <Link
            ref={(el) => {
              menuItems.current[4] = el;
            }}
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="transition hover:text-[#F6B26B]"
          >
            Contact
          </Link>

          <button
            ref={reserveMobile}
            className="mt-10 rounded-xl bg-[#D55A13] py-4 text-lg font-semibold text-white transition hover:bg-[#bf4f11]"
          >
            Reserve Table
          </button>

        </div>
      </aside>
    </>
  );
};