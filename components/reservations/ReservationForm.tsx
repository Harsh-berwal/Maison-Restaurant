"use client";

import { useRef, useState } from "react";
import { Calendar, Clock, Users, Utensils } from "lucide-react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock3, MailCheck } from "lucide-react";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

import FloorPlan from "./FloorPlan/FloorPlan";
import { watch, watch } from "fs/promises";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const reservationSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Invalid phone number"),
  date: z.string().min(1, "Select a date"),
  time: z.string().min(1, "Select a time"),
  guests: z.string().min(1, "Select guests"),
  occasion: z.string().optional(),
  notes: z.string().optional(),
});

type ReservationValues = z.infer<typeof reservationSchema>;

export default function ReservationForm() {
  const [selectedTable, setSelectedTable] = useState<number | null>(null);

  // Later this will come from Convex
 const bookedTables =
  useQuery(api.reservations.getBookedTables, {
    date: watch("date"),
    time: watch("time"),
  }) ?? [];

  const sectionRef = useRef<HTMLElement>(null);

  const formRef = useRef<HTMLDivElement>(null);

  const planRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReservationValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      occasion: "",
      notes: "",
    },
  });

  const onSubmit = (data: ReservationValues) => {
    if (!selectedTable) {
      alert("Please select a table.");
      return;
    }

    console.log({
      ...data,
      tableId: selectedTable,
    });
  };

  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.from(formRef.current, {
      x: -80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
    });

    gsap.from(planRef.current, {
      x: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },

    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="reservation-form"
      className="bg-[#F7F1E8] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="font-body text-sm font-medium uppercase tracking-[0.4em] text-[#D8844B]">
            Fine Dining Experience
          </span>

          <h2 className="font-heading mt-4 text-4xl font-semibold text-[#5B1F08] md:text-5xl">
            Reserve Your Table
          </h2>

          <div className="mx-auto mt-5 h-[2px] w-20 rounded-full bg-[#D8844B]" />

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Secure your table for an unforgettable dining experience. Choose
            your preferred date, time, and table from our interactive floor
            plan, and let us prepare an exceptional evening tailored just for
            you.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr]">
          {/* Left Side */}
          <div ref={formRef} className="rounded-3xl bg-white p-8 shadow-xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* First Name + Last Name */}
              <div className="grid gap-6 md:grid-cols-2">
                {/* First Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium tracking-wide text-[#5B1F08]">
                    First Name
                  </label>

                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D8844B]"
                    />

                    <input
                      type="text"
                      placeholder="John"
                      {...register("firstName")}
                      className="
          w-full
          rounded-xl
          border
          border-[#D7C5B5]
          bg-[#FCFAF7]
          py-3.5
          pl-12
          pr-4
          text-[#5B1F08]
          placeholder:text-gray-400
          outline-none
          transition-all
          duration-300
          focus:border-[#D8844B]
          focus:ring-4
          focus:ring-[#D8844B]/10
        "
                    />
                  </div>

                  {errors.firstName && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium tracking-wide text-[#5B1F08]">
                    Last Name
                  </label>

                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Doe"
                      {...register("lastName")}
                      className="
          w-full
          rounded-xl
          border
          border-[#D7C5B5]
          bg-[#FCFAF7]
          py-3.5
          pl-12
          pr-4
          text-[#5B1F08]
          placeholder:text-gray-400
          outline-none
          transition-all
          duration-300
          focus:border-[#D8844B]
          focus:ring-4
          focus:ring-[#D8844B]/10
        "
                    />
                  </div>

                  {errors.lastName && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[#5B1F08]">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  {...register("email")}
                  className="w-full rounded-xl border border-[#D7C5B5] px-4 py-3 outline-none transition focus:border-[#D8844B]"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[#5B1F08]">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  {...register("phone")}
                  className="w-full rounded-xl border border-[#D7C5B5] px-4 py-3 outline-none transition focus:border-[#D8844B]"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Date + Time */}
              <div className="grid gap-6 md:grid-cols-2">
                {/* Reservation Date */}
                <div>
                  <label className="mb-2 block text-sm font-medium tracking-wide text-[#5B1F08]">
                    Reservation Date
                  </label>

                  <div className="relative">
                    <Calendar
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#D8844B]"
                    />

                    <input
                      type="date"
                      {...register("date")}
                      className="
          w-full
          rounded-xl
          border
          border-[#D7C5B5]
          bg-[#FCFAF7]
          py-3.5
          pl-12
          pr-4
          text-[#5B1F08]
          outline-none
          transition-all
          duration-300
          focus:border-[#D8844B]
          focus:ring-4
          focus:ring-[#D8844B]/10
        "
                    />
                  </div>

                  {errors.date && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.date.message}
                    </p>
                  )}
                </div>

                {/* Reservation Time */}
                <div>
                  <label className="mb-2 block text-sm font-medium tracking-wide text-[#5B1F08]">
                    Reservation Time
                  </label>

                  <div className="relative">
                    <Clock
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#D8844B]"
                    />

                    <input
                      type="time"
                      {...register("time")}
                      className="
          w-full
          rounded-xl
          border
          border-[#D7C5B5]
          bg-[#FCFAF7]
          py-3.5
          pl-12
          pr-4
          text-[#5B1F08]
          outline-none
          transition-all
          duration-300
          focus:border-[#D8844B]
          focus:ring-4
          focus:ring-[#D8844B]/10
        "
                    />
                  </div>

                  {errors.time && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.time.message}
                    </p>
                  )}
                </div>
              </div>
              {/* Guests + Occasion */}
              <div className="grid gap-6 md:grid-cols-2">
                {/* Guests */}
                <div>
                  <label className="mb-2 block text-sm font-medium tracking-wide text-[#5B1F08]">
                    Number of Guests
                  </label>

                  <div className="relative">
                    <Users
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#D8844B]"
                    />

                    <select
                      {...register("guests")}
                      className="
                        w-full
                        appearance-none
                        rounded-xl
                        border
                        border-[#D7C5B5]
                        bg-[#FCFAF7]
                        py-3.5
                        pl-12
                        pr-10
                        text-[#5B1F08]
                        outline-none
                        transition-all
                        duration-300
                        focus:border-[#D8844B]
                        focus:ring-4
                        focus:ring-[#D8844B]/10
                        "
                    >
                      <option value="">Select Guests</option>
                      <option value="2">2 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="8">8 Guests</option>
                    </select>

                    <svg
                      className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m6 9 6 6 6-6"
                      />
                    </svg>
                  </div>

                  {errors.guests && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.guests.message}
                    </p>
                  )}
                </div>

                {/* Occasion */}
                <div>
                  <label className="mb-2 block text-sm font-medium tracking-wide text-[#5B1F08]">
                    Occasion
                  </label>

                  <div className="relative">
                    <Utensils
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#D8844B]"
                    />

                    <select
                      {...register("occasion")}
                      className="
                        w-full
                        appearance-none
                        rounded-xl
                        border
                        border-[#D7C5B5]
                        bg-[#FCFAF7]
                        py-3.5
                        pl-12
                        pr-10
                        text-[#5B1F08]
                        outline-none
                        transition-all
                        duration-300
                        focus:border-[#D8844B]
                        focus:ring-4
                        focus:ring-[#D8844B]/10
                        "
                    >
                      <option value="">Select Occasion</option>
                      <option value="Birthday">🎂 Birthday</option>
                      <option value="Anniversary">💍 Anniversary</option>
                      <option value="Business Dinner">
                        💼 Business Dinner
                      </option>
                      <option value="Date Night">❤️ Date Night</option>
                      <option value="Family Gathering">
                        👨‍👩‍👧‍👦 Family Gathering
                      </option>
                    </select>

                    <svg
                      className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m6 9 6 6 6-6"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="mb-2 block text-sm font-medium tracking-wide text-[#5B1F08]">
                  Special Requests
                </label>

                <textarea
                  rows={5}
                  placeholder="Dietary preferences, allergies, seating preferences, celebration requests..."
                  {...register("notes")}
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-[#D7C5B5]
                    bg-[#FCFAF7]
                    px-4
                    py-3.5
                    text-[#5B1F08]
                    placeholder:text-gray-400
                    outline-none
                    transition-all
                    duration-300
                    focus:border-[#D8844B]
                    focus:ring-4
                    focus:ring-[#D8844B]/10
                    "
                    />

                <p className="mt-2 text-xs text-gray-500">
                  Let us know if you have any dietary restrictions or special
                  arrangements.
                </p>
              </div>
              {/* Reservation Summary */}
              <div className="rounded-3xl border border-[#E8D9CC] bg-gradient-to-br from-[#FCFAF7] to-[#F7F1E8] p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#D8844B]">
                      Reservation Summary
                    </p>

                    <h3 className="mt-2 font-heading text-2xl text-[#5B1F08]">
                      Selected Table
                    </h3>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5B1F08] text-white">
                    🍽️
                  </div>
                </div>

                {selectedTable ? (
                  <div className="mt-6 rounded-2xl border border-[#E8D9CC] bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Your Table</p>

                        <p className="mt-1 text-3xl font-semibold text-[#5B1F08]">
                          Table {selectedTable}
                        </p>

                        <p className="mt-2 text-sm text-gray-500">
                          Ready for your selected date & time
                        </p>
                      </div>

                      <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                        Available
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="mt-6 rounded-2xl border-2 border-dashed border-[#D7C5B5] bg-white p-8 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#F7F1E8] text-2xl">
                      🍽️
                    </div>

                    <h4 className="text-lg font-medium text-[#5B1F08]">
                      No Table Selected
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      Choose your preferred table from the interactive floor
                      plan to continue with your reservation.
                    </p>
                  </div>
                )}
              </div>

              {/* Reserve Button */}
              <button
                type="submit"
                className="
                    group
                    relative
                    w-full
                    overflow-hidden
                    rounded-xl
                    bg-[#5B1F08]
                    px-6
                    py-4
                    font-semibold
                    tracking-wide
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#6B2910]
                    hover:shadow-[0_12px_30px_rgba(91,31,8,0.25)]
                    active:translate-y-0
                "
                >
                {/* Shine Effect */}
                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/20
                    to-transparent
                    transition-transform
                    duration-700
                    group-hover:translate-x-full
                    "
                />

                {/* Button Content */}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Confirm Reservation
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M13 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </button>
            </form>
          </div>

          {/* Right Side */}
          <div ref={planRef}>
            <FloorPlan
              selectedTable={selectedTable}
              bookedTables={bookedTables}
              onSelectTable={setSelectedTable}
            />

            {/* Reservation Information */}
            <div className="mt-8 rounded-[32px] border border-[#E8D9CC] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <div className="mb-8">
                <span className="text-sm font-medium uppercase tracking-[0.3em] text-[#D8844B]">
                  Guest Guidelines
                </span>

                <h3 className="mt-2 font-heading text-3xl text-[#5B1F08]">
                  Reservation Information
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  A few helpful details to ensure your dining experience is
                  smooth and enjoyable.
                </p>
              </div>

              <div className="space-y-4">
                {/* Arrival */}
                <div className="flex gap-4 rounded-2xl bg-[#FCFAF7] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#5B1F08]/10">
                    <Clock3 className="h-6 w-6 text-[#5B1F08]" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#5B1F08]">
                      Arrival Time
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Your table will be held for
                      <strong> 15 minutes </strong>
                      after your reservation time.
                    </p>
                  </div>
                </div>

                {/* Confirmation */}
                <div className="flex gap-4 rounded-2xl bg-[#FCFAF7] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#5B1F08]/10">
                    <MailCheck className="h-6 w-6 text-[#5B1F08]" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#5B1F08]">
                      Booking Confirmation
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      After submitting your reservation, you&apos;ll receive a
                      confirmation email with your booking details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
