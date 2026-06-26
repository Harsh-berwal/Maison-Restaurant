import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const subscribe = mutation({
  args: {
    email: v.string(),
  },

  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("newsletter")
      .withIndex("by_email", (q) =>
        q.eq("email", args.email.toLowerCase())
      )
      .first();

    if (existing) {
      throw new Error("Email already subscribed.");
    }

    await ctx.db.insert("newsletter", {
      email: args.email.toLowerCase(),
      subscribedAt: Date.now(),
    });

    return {
      success: true,
      message: "Subscribed successfully!",
    };
  },
});