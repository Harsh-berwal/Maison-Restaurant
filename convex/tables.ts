import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const seedTables = mutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db.query("tables").collect();

    if (existing.length > 0) {
      throw new Error("Tables have already been seeded.");
    }

    const tables = [
      { number: 1, seats: 2 },
      { number: 2, seats: 2 },
      { number: 3, seats: 4 },
      { number: 4, seats: 4 },
      { number: 5, seats: 6 },
      { number: 6, seats: 2 },
      { number: 7, seats: 2 },
      { number: 8, seats: 4 },
      { number: 9, seats: 4 },
      { number: 10, seats: 6 },
      { number: 11, seats: 2 },
      { number: 12, seats: 4 },
      { number: 13, seats: 2 },
      { number: 14, seats: 4 },
      { number: 15, seats: 6 },
      { number: 16, seats: 8 },
    ];

    for (const table of tables) {
      await ctx.db.insert("tables", table);
    }

    return `${tables.length} tables added successfully.`;
  },
});

export const getTables = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("tables").order("asc").collect();
  },
});