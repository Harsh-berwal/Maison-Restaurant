import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  
  // Newsletter
  
  newsletter: defineTable({
    email: v.string(),
    subscribedAt: v.number(),
  }).index("by_email", ["email"]),

  
  // Contact Messages
  
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

  
  // Restaurant Tables
  tables: defineTable({
    number: v.number(),
    seats: v.number(),
  }).index("by_number", ["number"]),

  
  // Reservations
  
  reservations: defineTable({
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

    createdAt: v.number(),
  })
    .index("by_date", ["date"])
    .index("by_tableNumber", ["tableNumber"])
    .index("by_email", ["email"]),
});