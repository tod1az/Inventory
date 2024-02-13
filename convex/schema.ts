import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  products: defineTable({
    reference: v.string(),
    name: v.string(),
    stock: v.optional(v.number()),
  }),
});
