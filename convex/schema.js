import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";


export default defineSchema({
    users: defineTable({
        name: v.string(),
        email: v.string(),
        image: v.string(),
        credits: v.number(),
        paymentId: v.optional(v.string()),
    })
})