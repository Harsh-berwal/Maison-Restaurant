import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getBookedTables = query({
  args: {
    date: v.string(),
    time: v.string(),
  },

  handler: async (ctx, args) => {
    const reservations = await ctx.db
      .query("reservations")
      .withIndex("by_date", (q) => q.eq("date", args.date))
      .collect();

    const bookedTables = reservations
      .filter((reservation) => reservation.time === args.time)
      .map((reservation) => reservation.tableNumber);

    return bookedTables;
  },
});

export const createReservation = mutation({
  args: {
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    phone: v.string(),

    date: v.string(),
    time: v.string(),

    guests: v.number(),

    occasion: v.optional(v.string()),
    notes: v.optional(v.string()),

    tableNumber: v.number(),
  },

  handler: async (ctx, args) => {
    // Check if the selected table is already booked
    const reservations = await ctx.db
      .query("reservations")
      .withIndex("by_date", (q) => q.eq("date", args.date))
      .collect();

    const alreadyBooked = reservations.some(
      (reservation) =>
        reservation.tableNumber === args.tableNumber &&
        reservation.time === args.time
    );

    if (alreadyBooked) {
      throw new Error("This table has already been reserved.");
    }

    const reservationId = await ctx.db.insert("reservations", {
      ...args,
      createdAt: Date.now(),
    });

    return reservationId;
  },
});