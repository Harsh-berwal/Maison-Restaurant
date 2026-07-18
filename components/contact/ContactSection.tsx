"use client";

import { useEffect, useRef } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

//schema

const contactSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(10, "Enter a valid phone number"),
  topic: z.string().min(1, "Select a topic"),
  inquiryType: z.string().min(1, "Choose an option"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  acceptedTerms: z.boolean().refine((value) => value === true, {
    message: "Please accept the terms.",
  }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

//Function Component

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const createMessage = useMutation(api.contact.createMessage);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),

    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      topic: "",
      inquiryType: "",
      message: "",
      acceptedTerms: false,
    },
  });

  /* GSAp Animations */

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.from(".contact-left", {
        x: -60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      }).from(
        ".form-item",
        {
          y: 40,
          opacity: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out",
        },
        "-=0.4",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* Form Submission */

  const onSubmit = async (data: ContactFormValues) => {
    const promise = createMessage(data);

    toast.promise(promise, {
      loading: "Sending your message...",
      success: () => {
        reset();
        return "Message sent successfully!";
      },
      error: "Failed to send message.",
    });

    try {
      await promise;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section ref={sectionRef} className="bg-[#F7F1E8] py-28">
      <div className="mx-auto grid max-w-7xl gap-24 px-6 lg:grid-cols-2">
        {/* Left Side */}

        <div className="contact-left">
          <p className="mb-3 uppercase tracking-[0.3em] text-[#D8844B] text-sm">
            Inquire
          </p>

          <h2 className="font-serif text-6xl text-[#5B1F08]">Send a message</h2>

          <p className="mt-8 max-w-md text-lg leading-9 text-[#5B1F08]/70">
            Tell us the occasion. Whether you&apos;re planning an intimate
            dinner, celebrating a milestone, or hosting a private event, our
            team is here to make every detail exceptional.
          </p>

          <div className="mt-14 space-y-8 text-[#5B1F08]">
            <div className="group flex items-center gap-5 transition-all duration-300 hover:translate-x-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5B1F08]/10 transition-colors duration-300 group-hover:bg-[#5B1F08]">
                <Mail className="h-5 w-5 transition-colors duration-300 group-hover:text-white" />
              </div>

              <div>
                <p className="text-sm uppercase tracking-widest text-[#D8844B]">
                  Email
                </p>
                <p className="text-lg font-medium">concierge@maison.com</p>
              </div>
            </div>

            <div className="group flex items-center gap-5 transition-all duration-300 hover:translate-x-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5B1F08]/10 transition-colors duration-300 group-hover:bg-[#5B1F08]">
                <Phone className="h-5 w-5 transition-colors duration-300 group-hover:text-white" />
              </div>

              <div>
                <p className="text-sm uppercase tracking-widest text-[#D8844B]">
                  Phone
                </p>
                <p className="text-lg font-medium">+91 98765 43210</p>
              </div>
            </div>

            <div className="group flex items-center gap-5 transition-all duration-300 hover:translate-x-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5B1F08]/10 transition-colors duration-300 group-hover:bg-[#5B1F08]">
                <MapPin className="h-5 w-5 transition-colors duration-300 group-hover:text-white" />
              </div>

              <div>
                <p className="text-sm uppercase tracking-widest text-[#D8844B]">
                  Address
                </p>
                <p className="text-lg font-medium">
                  24 Rue des Gourmets,Paris 75008, France
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
          {/* First Name + Last Name */}

          <div className="grid gap-8 md:grid-cols-2">
            {/* First Name */}
            <div className="form-item">
              <label
                htmlFor="firstName"
                className="mb-2 block text-sm font-medium text-[#5B1F08]"
              >
                First name
              </label>

              <input
                id="firstName"
                type="text"
                placeholder="John"
                {...register("firstName")}
                className="w-full border-b-2 border-[#D7C5B5] bg-transparent px-0 py-3 text-[#5B1F08] placeholder:text-[#A58B78] outline-none transition-all duration-300 focus:border-[#5B1F08]"
              />

              {errors.firstName && (
                <p className="mt-2 text-sm font-medium text-red-500">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div className="form-item">
              <label
                htmlFor="lastName"
                className="mb-2 block text-sm font-medium text-[#5B1F08]"
              >
                Last name
              </label>

              <input
                id="lastName"
                type="text"
                placeholder="Doe"
                {...register("lastName")}
                className="w-full border-b-2 border-[#D7C5B5] bg-transparent px-0 py-3 text-[#5B1F08] placeholder:text-[#A58B78] outline-none transition-all duration-300 focus:border-[#5B1F08]"
              />

              {errors.lastName && (
                <p className="mt-2 text-sm font-medium text-red-500">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          {/* Email + Phone */}

          <div className="grid gap-8 md:grid-cols-2">
            {/* Email */}
            <div className="form-item">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[#5B1F08]"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                {...register("email")}
                className="w-full border-b-2 border-[#D7C5B5] bg-transparent px-0 py-3 text-[#5B1F08] placeholder:text-[#A58B78] outline-none transition-all duration-300 focus:border-[#5B1F08] focus:shadow-[0_2px_0_0_#5B1F08]"
              />

              {errors.email && (
                <p className="mt-2 text-sm font-medium text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div className="form-item">
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium text-[#5B1F08]"
              >
                Phone Number
              </label>

              <input
                id="phone"
                type="tel"
                placeholder="+91 98765 43210"
                {...register("phone")}
                className="w-full border-b-2 border-[#D7C5B5] bg-transparent px-0 py-3 text-[#5B1F08] placeholder:text-[#A58B78] outline-none transition-all duration-300 focus:border-[#5B1F08] focus:shadow-[0_2px_0_0_#5B1F08]"
              />

              {errors.phone && (
                <p className="mt-2 text-sm font-medium text-red-500">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>
          {/* Topic */}

          <div className="form-item">
            <label
              htmlFor="topic"
              className="mb-2 block text-sm font-medium text-[#5B1F08]"
            >
              Choose a topic
            </label>

            <div className="relative">
              <select
                id="topic"
                {...register("topic")}
                className="w-full appearance-none border-b-2 border-[#D7C5B5] bg-transparent px-0 py-3 pr-10 text-[#5B1F08] outline-none transition-all duration-300 focus:border-[#5B1F08] focus:shadow-[0_2px_0_0_#5B1F08]"
              >
                <option value="">Select one...</option>
                <option value="Reservation">Reservation</option>
                <option value="Private Dining">Private Dining</option>
                <option value="Events">Events</option>
                <option value="General Question">General Question</option>
              </select>

              <ChevronDown
                size={18}
                className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[#5B1F08]/70"
              />
            </div>

            {errors.topic && (
              <p className="mt-2 text-sm font-medium text-red-500">
                {errors.topic.message}
              </p>
            )}
          </div>

          {/* Inquiry Type */}

          <div className="form-item">
            <label className="mb-4 block text-sm font-medium text-[#5B1F08]">
              Which best describes your inquiry?
            </label>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                "Private Dining",
                "Large Party",
                "Special Event",
                "Press Inquiry",
                "General Question",
                "Other",
              ].map((item) => (
                <label key={item} className="group relative cursor-pointer">
                  <input
                    type="radio"
                    value={item}
                    {...register("inquiryType")}
                    className="peer sr-only"
                  />

                  <div
                    className="
                        flex items-center justify-between
                        rounded-xl
                        border-2 border-[#D7C5B5]
                        bg-white/60
                        px-5 py-4
                        text-[#5B1F08]
                        transition-all duration-300

                        hover:-translate-y-1
                        hover:border-[#D8844B]
                        hover:bg-[#FDF8F4]
                        hover:shadow-md

                        peer-checked:border-[#5B1F08]
                        peer-checked:bg-[#5B1F08]
                        peer-checked:text-white
                        peer-checked:shadow-lg

                        peer-checked:hover:bg-[#5B1F08]
                        peer-checked:hover:border-[#5B1F08]
                        peer-checked:hover:text-white
                        peer-checked:hover:shadow-xl
                    "
                  >
                    <span className="text-sm font-medium">{item}</span>

                    <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-current">
                      <div className="h-2.5 w-2.5 scale-0 rounded-full bg-current transition-transform duration-300 peer-checked:scale-100" />
                    </div>
                  </div>
                </label>
              ))}
            </div>

            {errors.inquiryType && (
              <p className="mt-3 text-sm font-medium text-red-500">
                {errors.inquiryType.message}
              </p>
            )}
          </div>

          {/* Message */}

          <div className="form-item">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-[#5B1F08]"
            >
              Message
            </label>

            <textarea
              id="message"
              rows={6}
              placeholder="Tell us about your reservation, special event, dietary requirements, or any questions you have..."
              {...register("message")}
              className="w-full resize-none rounded-2xl border-2 border-[#D7C5B5] bg-white/50 px-5 py-4 text-[#5B1F08] placeholder:text-[#A58B78] outline-none transition-all duration-300 focus:border-[#5B1F08] focus:bg-white focus:shadow-lg"
            />

            <div className="mt-2 flex items-center justify-between">
              {errors.message ? (
                <p className="text-sm font-medium text-red-500">
                  {errors.message.message}
                </p>
              ) : (
                <p className="text-sm text-[#8A6A58]">
                  We&apos;d love to hear the details.
                </p>
              )}
            </div>
          </div>

          {/* Terms */}

          <div className="form-item">
            <label className="group flex cursor-pointer items-start gap-4 has-[:checked]:text-[#5B1F08]">
              <input
                type="checkbox"
                {...register("acceptedTerms")}
                className="peer sr-only"
              />

              <div
                className="
                mt-1 flex h-6 w-6 items-center justify-center
                rounded-md border-2 border-[#D7C5B5]
                bg-white
                transition-all duration-300
                group-has-[:checked]:border-[#5B1F08]
                group-has-[:checked]:bg-[#5B1F08]
                group-hover:border-[#D8844B]
                "
                >
                <svg
                  className="
                    h-3.5 w-3.5
                    text-white
                    opacity-0
                    scale-50
                    transition-all duration-200
                    group-has-[:checked]:opacity-100
                    group-has-[:checked]:scale-100
                    "
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              <span className="text-sm leading-6 text-[#5B1F08]">
                I agree to the{" "}
                <a
                  href="/terms"
                  className="font-medium text-[#D8844B] transition-colors hover:text-[#5B1F08]"
                >
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a
                  href="/privacy"
                  className="font-medium text-[#D8844B] transition-colors hover:text-[#5B1F08]"
                >
                  Privacy Policy
                </a>
                .
              </span>
            </label>

            {errors.acceptedTerms && (
              <p className="mt-3 text-sm font-medium text-red-500">
                {errors.acceptedTerms.message}
              </p>
            )}
          </div>
          {/* Submit */}

          <div className="form-item pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-xl bg-[#5B1F08] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-[#6D2912] hover:shadow-2xl active:scale-[0.98] disabled:pointer-events-none disabled:opacity-70 md:w-auto"
            >
              {/* Shine Effect */}
              <span className="absolute inset-0 overflow-hidden rounded-xl">
                <span className="absolute -left-full top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-all duration-700 group-hover:left-[150%]" />
              </span>

              {/* Button Content */}
              <span className="relative z-10 flex items-center gap-3">
                {isSubmitting ? (
                  <>
                    <svg
                      className="h-5 w-5 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="opacity-25"
                      />
                      <path
                        d="M22 12a10 10 0 0 1-10-10"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>

                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>

                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </>
                )}
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
