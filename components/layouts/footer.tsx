"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin } from "lucide-react";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import {
    Phone,
    Mail,
    Clock,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    const footerRef = useRef<HTMLElement>(null);
    const columns = useRef<HTMLDivElement[]>([]);
    const socials = useRef<HTMLAnchorElement[]>([]);
    const subscribeBtn = useRef<HTMLButtonElement>(null);
    const shine = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(columns.current, {
                y: 80,
                opacity: 0,
                duration: 1,
                stagger: 0.18,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 85%",
                },
            });

            gsap.from(".footer-bottom", {
                opacity: 0,
                y: 30,
                delay: 0.5,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 85%",
                },
            });

            socials.current.forEach((icon) => {
                icon.addEventListener("mouseenter", () => {
                    gsap.to(icon, {
                        y: -6,
                        rotation: 10,
                        scale: 1.15,
                        duration: 0.35,
                        ease: "back.out(2)",
                    });
                });

                icon.addEventListener("mouseleave", () => {
                    gsap.to(icon, {
                        y: 0,
                        rotation: 0,
                        scale: 1,
                        duration: 0.35,
                    });
                });
            });

            if (!subscribeBtn.current || !shine.current) return;

            const btn = subscribeBtn.current;

            btn.addEventListener("mouseenter", () => {
                gsap.fromTo(
                    shine.current,
                    {
                        x: "-150%",
                    },
                    {
                        x: "450%",
                        duration: 1.2,
                        ease: "power2.out",
                    }
                );

                gsap.to(btn, {
                    scale: 1.03,
                    duration: 0.35,
                });
            });

            btn.addEventListener("mouseleave", () => {
                gsap.to(btn, {
                    scale: 1,
                    duration: 0.35,
                });
            });
        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer
            ref={footerRef}
            className="bg-[#1d0904] mt-15 border-t border-[#47251b] text-[#d9b39b]"
        >
            <div className="max-w-7xl mx-auto px-8 py-20">

                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-16">

                    {/* Brand */}

                    <div
                        ref={(el) => {
                            if (el) columns.current[0] = el;
                        }}
                    >
                        <h2 className="text-4xl font-serif text-white mb-2">
                            Maison
                        </h2>

                        <p className="uppercase tracking-[0.4em] text-xs text-[#b96d43] mb-8">
                            Fine Dining
                        </p>

                        <p className="leading-8 text-[#b99482]">
                            Crafting extraordinary dining experiences in the heart
                            of Paris since 1998. Every meal, an unforgettable
                            memory.
                        </p>

                        <div className="flex gap-4 mt-10">
                            {[
                                <FaInstagram key="instagram" size={18} />,
                                <FaFacebookF key="facebook" size={18} />,
                                <FaXTwitter key="twitter" size={18} />,
                            ].map((icon, i) => (
                                <a
                                    key={i}
                                    ref={(el) => {
                                        if (el) {
                                            socials.current[i] = el;
                                        }
                                    }}
                                    href="#"
                                    className="w-11 h-11 rounded-full border border-[#4e3026] flex items-center justify-center hover:bg-[#d37b44] hover:text-white transition-colors"
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}

                    <div ref={(el) => {
                        if (el) {
                            columns.current[1] = el;
                        }
                    }}>
                        <h4 className="uppercase tracking-[0.25em] text-sm text-[#8e6858] mb-8">
                            Navigation
                        </h4>

                        <ul className="space-y-5">
                            {[
                                "Home",
                                "Menu",
                                "Reservation",
                                "Gallery",
                                "Contact",
                            ].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="group inline-flex items-center"
                                    >
                                        <span className="transition-all duration-300 group-hover:translate-x-3 group-hover:text-[#d37b44]">
                                            {item}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}

                    <div ref={(el) => {
                        if (el) {
                            columns.current[2] = el;
                        }
                    }}>
                        <h4 className="uppercase tracking-[0.25em] text-sm text-[#8e6858] mb-8">
                            Contact
                        </h4>

                        <div className="space-y-6">

                            <div className="flex gap-4">
                                <MapPin className="text-[#d37b44]" size={18} />
                                <p>
                                    24 Rue des Gourmets
                                    <br />
                                    Paris 75008, France
                                </p>
                            </div>

                            <div className="flex gap-4">
                                <Phone className="text-[#d37b44]" size={18} />
                                <p>+33 1 42 60 33 44</p>
                            </div>

                            <div className="flex gap-4">
                                <Mail className="text-[#d37b44]" size={18} />
                                <p>hello@maisondining.fr</p>
                            </div>

                            <div className="flex gap-4">
                                <Clock className="text-[#d37b44]" size={18} />
                                <p>
                                    Mon–Fri 12pm–11pm
                                    <br />
                                    Sat–Sun 11am–12am
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter */}

                    <div ref={(el) => {
                        if (el) {
                            columns.current[3] = el;
                        }
                    }}>
                        <h4 className="uppercase tracking-[0.25em] text-sm text-[#8e6858] mb-8">
                            Newsletter
                        </h4>

                        <p className="leading-8 text-[#b99482] mb-8">
                            Seasonal menus, exclusive offers, and private events —
                            delivered to your inbox.
                        </p>

                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="w-full h-14 rounded-full border border-[#4e3026] bg-transparent px-6 outline-none transition-all duration-300 focus:border-[#d37b44] focus:shadow-[0_0_20px_rgba(211,123,68,0.3)]"
                        />

                        <button
                            ref={subscribeBtn}
                            className="subscribe-btn relative mt-5 w-full h-14 overflow-hidden rounded-full bg-[#d37b44] text-white font-semibold"
                        >
                            <span className="relative z-10">Subscribe</span>

                            <span
                                ref={shine}
                                className="absolute left-[-150%] top-0 h-full w-1/2 bg-white/20 blur-md rotate-12"
                            />
                        </button>
                    </div>
                </div>

                <div className="footer-bottom mt-20 pt-8 border-t border-[#47251b] flex flex-col md:flex-row justify-between items-center text-sm text-[#8d6d61]">

                    <p>
                        © 2024 Maison Fine Dining. All rights reserved.
                    </p>

                    <div className="flex gap-8 mt-6 md:mt-0">
                        <a href="#" className="hover:text-[#d37b44]">
                            Privacy Policy
                        </a>

                        <a href="#" className="hover:text-[#d37b44]">
                            Terms of Service
                        </a>

                        <a href="#" className="hover:text-[#d37b44]">
                            Cookie Policy
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}