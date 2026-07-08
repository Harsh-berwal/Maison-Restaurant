"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import gsap from "gsap";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const pageRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(pageRef.current, {
        scale: 1.05,
        duration: 1.4,
        ease: "expo.out",
      });

      const tl = gsap.timeline();

      tl.from(cardRef.current, {
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 0.8,
        ease: "expo.out",
      })
        .from(
          logoRef.current,
          {
            opacity: 0,
            y: -20,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          formRef.current?.children ?? [],
          {
            opacity: 0,
            x: 20,
            stagger: 0.12,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.2",
        );
    });

    return () => ctx.revert();
  }, []);

  const handleHover = () => {
    gsap.to(buttonRef.current, {
      scale: 1.04,
      y: -3,
      duration: 0.3,
      ease: "power2.out",
      boxShadow: "0 18px 40px rgba(213,90,19,.35)",
    });
  };

  const handleLeave = () => {
    gsap.to(buttonRef.current, {
      scale: 1,
      y: 0,
      duration: 0.3,
      boxShadow: "0 0 0 rgba(0,0,0,0)",
    });
  };

  return (
    <div ref={pageRef} className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <Image
        src="/images/home/hero-bg.png"
        alt="Restaurant"
        fill
        className="object-cover inverted-contrast"
      />

      <div className="absolute inset-0 bg-black/60" />

      {/* Login Card */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-5 ">
        <div
          ref={cardRef}
          className="w-full max-w-md rounded-3xl bg-[#F8F3EA] p-8 shadow-2xl backdrop-blur-md"
        >
          {/* Logo */}
          <div ref={logoRef} className="mb-8 text-center">
            <Image
              src="/Light-logo.png"
              alt="Maison"
              width={140}
              height={140}
              className="mx-auto mb-4"
            />

            <h1 className="text-3xl font-bold text-[#5B1F08]">Admin Portal</h1>

            <p className="mt-2 text-sm text-gray-500">
              Welcome back. Sign in to manage your restaurant.
            </p>
          </div>

          {/* Form */}
          <div ref={formRef} className="space-y-5">
            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-[#5B1F08]">
                Email
              </label>

              <div className="flex items-center rounded-xl border border-gray-300 px-4 focus-within:border-[#D55A13]">
                <Mail size={18} className="text-gray-400" />

                <input
                  type="email"
                  autoComplete="email"
                  placeholder="admin@maison.com"
                  className="w-full px-3 py-4 outline-none bg-transparent text-[#5B1F08] placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-[#5B1F08]">
                Password
              </label>

              <div className="flex items-center rounded-xl border border-gray-300 px-4 focus-within:border-[#D55A13]">
                <Lock size={18} className="text-gray-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="w-full px-3 py-4 outline-none bg-transparent text-[#5B1F08] placeholder:text-gray-400"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff size={18} className="text-gray-500" />
                  ) : (
                    <Eye size={18} className="text-gray-500" />
                  )}
                </button>
              </div>
            </div>

            {/* Button */}
            <button
              ref={buttonRef}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
              className="w-full cursor-pointer rounded-xl bg-[#D55A13] py-4 font-semibold text-white transition-colors hover:bg-[#bf4f11]"
            >
              Sign In
            </button>

            {/* Back */}
            <Link
              href="/"
              className="block text-center text-sm font-medium text-[#5B1F08] hover:text-[#D55A13]"
            >
              ← Back to Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
