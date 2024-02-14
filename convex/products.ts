import { Id } from "./_generated/dataModel";
import { mutation } from "./_generated/server";
import { query } from "./_generated/server";
import { v } from "convex/values";

type Product = {
  _id: Id<"products">;
  _creationTime: number;
  stock?: number | undefined;
  reference: string;
  name: string;
};

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

export const getAll = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("products").collect();
  },
});

export const getWithFilters = query({
  args: {
    query: v.optional(v.string()),
    reference: v.optional(v.string()),
  },
  handler: async (ctx, { query, reference }) => {
    const result: Product[] = [];

    if (query) {
      const queryResults = await ctx.db.query("products").collect();
    }
    if (reference) {
      const referenceResult = await ctx.db
        .query("products")
        .filter((q) => q.eq(q.field("reference"), reference))
        .collect();
      result.push(...referenceResult);
    }
    return result;
  },
});
