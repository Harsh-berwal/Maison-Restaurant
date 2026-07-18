import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  newsletter: defineTable({
    email: v.string(),
    subscribedAt: v.number(),
  }).index("by_email", ["email"]),

  contactMessages: defineTable({
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    phone: v.string(),
    topic: v.string(),
    inquiryType: v.string(),
    message: v.string(),
    acceptedTerms: v.boolean(),
    status: v.string(), // unread | read | replied
    createdAt: v.number(),
  })
    .index("by_createdAt", ["createdAt"])
    .index("by_status", ["status"]),
});