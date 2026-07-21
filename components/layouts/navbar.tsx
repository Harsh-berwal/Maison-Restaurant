"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Menu",
    href: "/menu",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  
  // Refs
  

  const navRef = useRef<HTMLElement>(null);

  const logoRef = useRef<HTMLAnchorElement>(null);

  const reserveBtn = useRef<HTMLButtonElement>(null);
  const shine = useRef<HTMLSpanElement>(null);

  
  // Lock Body Scroll
  

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);
    
  // Logo Animation
  

  useLayoutEffect(() => {
    const logo = logoRef.current;

    if (!logo) return;

    const enter = () => {
      gsap.to(logo, {
        scale: 1.08,
        y: -2,
        rotation: 1,
        duration: 0.4,
        ease: "expo.out",
      });
    };

    const leave = () => {
      gsap.to(logo, {
        scale: 1,
        y: 0,
        rotation: 0,
        duration: 0.4,
        ease: "expo.out",
      });
    };

    logo.addEventListener("mouseenter", enter);
    logo.addEventListener("mouseleave", leave);

    return () => {
      logo.removeEventListener("mouseenter", enter);
      logo.removeEventListener("mouseleave", leave);
    };
  }, []);
  
  // Reserve Button Animation  

  useLayoutEffect(() => {
    const button = reserveBtn.current;
    const shineLayer = shine.current;

    if (!button || !shineLayer) return;

    const enter = () => {
      const width = button.offsetWidth;

      gsap.killTweensOf([button, shineLayer]);

      gsap.to(button, {
        y: -4,
        scale: 1.04,
        duration: 0.4,
        ease: "expo.out",
        boxShadow: "0 18px 40px rgba(213,90,19,.35)",
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
          duration: 0.9,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.set(shineLayer, {
              x: -120,
              opacity: 0,
            });
          },
        }
      );
    };

    const leave = () => {
      gsap.to(button, {
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "expo.out",
        boxShadow: "0 0 0 rgba(0,0,0,0)",
      });
    };

    button.addEventListener("mouseenter", enter);
    button.addEventListener("mouseleave", leave);

    return () => {
      button.removeEventListener("mouseenter", enter);
      button.removeEventListener("mouseleave", leave);
    };
  }, []);

  
  // Active Link Helper
  
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <>
          {/* Header */}
      <header
        ref={navRef}
        className="fixed left-0 top-0 z-50 w-full"
      >
        <nav className="flex h-20 items-center justify-between border-b border-white/10 bg-[#5B1F08]/95 px-5 backdrop-blur-md md:px-8 lg:px-24">

          {/* Desktop Navigation */}

          <div className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative text-[16px] font-medium transition-all duration-300 ${
                  isActive(link.href)
                    ? "text-[#F6B26B]"
                    : "text-white hover:text-[#F6B26B]"
                }`}
                              >
                {link.name}

                <span
                  className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-[#F6B26B] transition-all duration-300 ${
                    isActive(link.href)
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMenuOpen(true)}
            className="text-white transition-colors hover:text-[#F6B26B] lg:hidden"
          >
            <Menu
              size={30}
              strokeWidth={2.2}
            />
          </button>

          {/* 
              Logo
           */}

          <Link
            ref={logoRef}
            href="/"
            className="absolute left-1/2 w-[130px] -translate-x-1/2 md:w-[160px] lg:w-[180px]"
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

          {/* 
              Reserve Button
           */}

          <Link href="/reservations">
            <button
              ref={reserveBtn}
              className="relative overflow-hidden rounded-xl bg-[#D55A13] px-5 py-2 text-sm font-semibold tracking-wide text-white transition-all md:px-6 md:py-3 md:text-base lg:px-8"
            >
              <span className="relative z-10">
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
           
           {/* Mobile Overlay */}

      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-all duration-300 lg:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile Sidebar */}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-[320px] flex-col bg-[#5B1F08] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-6">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="w-[120px]"
          >
            <Image
              src="/logo.png"
              alt="Maison"
              width={120}
              height={120}
              className="h-auto w-full"
            />
          </Link>

          <button
            onClick={() => setMenuOpen(false)}
            className="rounded-full p-2 text-white transition-colors hover:bg-white/10 hover:text-[#F6B26B]"
          >
            <X size={28} />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex flex-1 flex-col px-8 py-10">
          <div className="flex flex-col gap-7">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`transform text-xl font-medium transition-all duration-500 ${
                  menuOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                } ${
                  isActive(link.href)
                    ? "text-[#F6B26B]"
                    : "text-white hover:text-[#F6B26B]"
                }`}
                style={{
                  transitionDelay: `${index * 70}ms`,
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Reserve Button */}
          <Link
            href="/reservations"
            onClick={() => setMenuOpen(false)}
            className={`mt-auto transform transition-all duration-500 ${
              menuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
            style={{
              transitionDelay: `${navLinks.length * 70}ms`,
            }}
          >
            <button className="w-full rounded-xl bg-[#D55A13] py-4 text-lg font-semibold text-white transition-colors hover:bg-[#b94c10]">
              Reserve Table
            </button>
          </Link>
        </div>
      </aside>
    </>
  )
}