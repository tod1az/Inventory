import { mutation } from "./_generated/server";
import { query } from "./_generated/server";
import { v } from "convex/values";

export const createProduct = mutation({
  args: {
    reference: v.string(),
    name: v.string(),
    stock: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("products", {
      reference: args.reference,
      name: args.name,
      stock: args.stock,
    });
  },
});

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("products").collect();
  },
});
