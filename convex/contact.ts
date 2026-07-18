import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Create a new contact message
export const createMessage = mutation({
  args: {
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    phone: v.string(),
    topic: v.string(),
    inquiryType: v.string(),
    message: v.string(),
    acceptedTerms: v.boolean(),
  },

  handler: async (ctx, args) => {
    return await ctx.db.insert("contactMessages", {
      ...args,
      status: "unread",
      createdAt: Date.now(),
    });
  },
});

// Get all messages (Newest First)
export const getMessages = query({
  handler: async (ctx) => {
    return await ctx.db
      .query("contactMessages")
      .order("desc")
      .collect();
  },
});

// Update message status
export const updateStatus = mutation({
  args: {
    id: v.id("contactMessages"),
    status: v.union(
      v.literal("unread"),
      v.literal("read"),
      v.literal("replied")
    ),
  },

  handler: async (ctx, { id, status }) => {
    await ctx.db.patch(id, { status });
  },
});

// Delete a message
export const deleteMessage = mutation({
  args: {
    id: v.id("contactMessages"),
  },

  handler: async (ctx, { id }) => {
    await ctx.db.delete(id);
  },
});