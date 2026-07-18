import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const subscribe = mutation({
  args: {
    email: v.string(),
  },

  handler: async (ctx, { email }) => {
    const normalizedEmail = email.trim().toLowerCase();

    const existing = await ctx.db
      .query("newsletter")
      .withIndex("by_email", (q) =>
        q.eq("email", normalizedEmail)
      )
      .unique();

    if (existing) {
      return {
        success: false,
        message: "You are already subscribed!",
      };
    }

    await ctx.db.insert("newsletter", {
      email: normalizedEmail,
      subscribedAt: Date.now(),
    });

    return {
      success: true,
      message: "Subscribed successfully!",
    };
  },
});