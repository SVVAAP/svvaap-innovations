import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  dashboardModules: defineTable({
    key: v.string(),
    title: v.string(),
    description: v.string(),
    enabled: v.boolean(),
    order: v.number(),
    updatedAt: v.number(),
  }).index("by_key", ["key"]),

  leads: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    company: v.optional(v.string()),
    message: v.string(),
    source: v.string(),
    status: v.string(),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_status", ["status"])
    .index("by_created_at", ["createdAt"]),

  projects: defineTable({
    title: v.string(),
    slug: v.string(),
    summary: v.string(),
    category: v.string(),
    status: v.string(),
    url: v.optional(v.string()),
    coverImage: v.optional(v.string()),
    tags: v.array(v.string()),
    updatedAt: v.number(),
  })
    .index("by_slug", ["slug"])
    .index("by_status", ["status"]),

  careers: defineTable({
    title: v.string(),
    location: v.string(),
    type: v.string(),
    description: v.string(),
    status: v.string(),
    postedAt: v.number(),
    updatedAt: v.number(),
  }).index("by_status", ["status"]),

  seoPages: defineTable({
    path: v.string(),
    title: v.string(),
    description: v.string(),
    keywords: v.string(),
    updatedAt: v.number(),
  }).index("by_path", ["path"]),

  activityLogs: defineTable({
    actor: v.string(),
    action: v.string(),
    targetType: v.string(),
    targetId: v.optional(v.string()),
    details: v.optional(v.string()),
    createdAt: v.number(),
  }).index("by_created_at", ["createdAt"]),
});
