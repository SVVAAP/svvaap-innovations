import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

const defaultModules = [
  {
    key: "overview",
    title: "Overview",
    description: "High-level business metrics and activity feed.",
    order: 1,
  },
  {
    key: "leads",
    title: "Leads",
    description: "Incoming inquiries and follow-up pipeline.",
    order: 2,
  },
  {
    key: "projects",
    title: "Projects",
    description: "Portfolio and delivery status management.",
    order: 3,
  },
  {
    key: "careers",
    title: "Careers",
    description: "Job openings and hiring pipeline.",
    order: 4,
  },
  {
    key: "seo",
    title: "SEO",
    description: "Meta tags, local landing pages, and indexing controls.",
    order: 5,
  },
];

function now() {
  return Date.now();
}

function toSafeSlug(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export const seedDashboardModules = mutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db.query("dashboardModules").collect();
    if (existing.length > 0) {
      return { seeded: false, count: existing.length };
    }

    const ts = now();
    for (const module of defaultModules) {
      await ctx.db.insert("dashboardModules", {
        ...module,
        enabled: true,
        updatedAt: ts,
      });
    }

    return { seeded: true, count: defaultModules.length };
  },
});

export const listModules = query({
  args: {},
  handler: async (ctx) => {
    const rows = await ctx.db.query("dashboardModules").collect();
    return rows.sort((a, b) => a.order - b.order);
  },
});

export const toggleModule = mutation({
  args: {
    id: v.id("dashboardModules"),
    enabled: v.boolean(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      enabled: args.enabled,
      updatedAt: now(),
    });
    return { ok: true };
  },
});

export const listLeads = query({
  args: {},
  handler: async (ctx) => {
    const rows = await ctx.db.query("leads").collect();
    return rows.sort((a, b) => b.createdAt - a.createdAt);
  },
});

export const createLead = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    company: v.optional(v.string()),
    message: v.string(),
    source: v.string(),
  },
  handler: async (ctx, args) => {
    const ts = now();
    const id = await ctx.db.insert("leads", {
      ...args,
      status: "new",
      createdAt: ts,
      updatedAt: ts,
    });

    await ctx.db.insert("activityLogs", {
      actor: "admin",
      action: "lead_created",
      targetType: "lead",
      targetId: id,
      details: `${args.name} (${args.email})`,
      createdAt: ts,
    });

    return { id };
  },
});

export const updateLeadStatus = mutation({
  args: {
    id: v.id("leads"),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      status: args.status,
      updatedAt: now(),
    });

    await ctx.db.insert("activityLogs", {
      actor: "admin",
      action: "lead_status_updated",
      targetType: "lead",
      targetId: args.id,
      details: args.status,
      createdAt: now(),
    });

    return { ok: true };
  },
});

export const listProjects = query({
  args: {},
  handler: async (ctx) => {
    const rows = await ctx.db.query("projects").collect();
    return rows.sort((a, b) => b.updatedAt - a.updatedAt);
  },
});

export const upsertProject = mutation({
  args: {
    id: v.optional(v.id("projects")),
    title: v.string(),
    summary: v.string(),
    category: v.string(),
    status: v.string(),
    url: v.optional(v.string()),
    coverImage: v.optional(v.string()),
    tags: v.array(v.string()),
  },
  handler: async (ctx, args) => {
    const ts = now();
    const payload = {
      title: args.title,
      slug: toSafeSlug(args.title),
      summary: args.summary,
      category: args.category,
      status: args.status,
      url: args.url,
      coverImage: args.coverImage,
      tags: args.tags,
      updatedAt: ts,
    };

    let recordId = args.id;
    if (args.id) {
      await ctx.db.patch(args.id, payload);
    } else {
      recordId = await ctx.db.insert("projects", payload);
    }

    await ctx.db.insert("activityLogs", {
      actor: "admin",
      action: args.id ? "project_updated" : "project_created",
      targetType: "project",
      targetId: recordId,
      details: args.title,
      createdAt: ts,
    });

    return { id: recordId };
  },
});

export const listCareers = query({
  args: {},
  handler: async (ctx) => {
    const rows = await ctx.db.query("careers").collect();
    return rows.sort((a, b) => b.updatedAt - a.updatedAt);
  },
});

export const upsertCareer = mutation({
  args: {
    id: v.optional(v.id("careers")),
    title: v.string(),
    location: v.string(),
    type: v.string(),
    description: v.string(),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    const ts = now();
    const payload = {
      title: args.title,
      location: args.location,
      type: args.type,
      description: args.description,
      status: args.status,
      postedAt: ts,
      updatedAt: ts,
    };

    let recordId = args.id;
    if (args.id) {
      await ctx.db.patch(args.id, payload);
    } else {
      recordId = await ctx.db.insert("careers", payload);
    }

    await ctx.db.insert("activityLogs", {
      actor: "admin",
      action: args.id ? "career_updated" : "career_created",
      targetType: "career",
      targetId: recordId,
      details: args.title,
      createdAt: ts,
    });

    return { id: recordId };
  },
});

export const listSeoPages = query({
  args: {},
  handler: async (ctx) => {
    const rows = await ctx.db.query("seoPages").collect();
    return rows.sort((a, b) => a.path.localeCompare(b.path));
  },
});

export const upsertSeoPage = mutation({
  args: {
    path: v.string(),
    title: v.string(),
    description: v.string(),
    keywords: v.string(),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("seoPages")
      .withIndex("by_path", (q) => q.eq("path", args.path))
      .first();

    const ts = now();
    const payload = {
      ...args,
      updatedAt: ts,
    };

    let recordId = existing?._id;
    if (existing) {
      await ctx.db.patch(existing._id, payload);
    } else {
      recordId = await ctx.db.insert("seoPages", payload);
    }

    await ctx.db.insert("activityLogs", {
      actor: "admin",
      action: existing ? "seo_updated" : "seo_created",
      targetType: "seo",
      targetId: recordId,
      details: args.path,
      createdAt: ts,
    });

    return { id: recordId };
  },
});

export const listActivity = query({
  args: {},
  handler: async (ctx) => {
    const rows = await ctx.db.query("activityLogs").collect();
    return rows.sort((a, b) => b.createdAt - a.createdAt).slice(0, 20);
  },
});

export const getDashboardStats = query({
  args: {},
  handler: async (ctx) => {
    const [leads, projects, careers, pages] = await Promise.all([
      ctx.db.query("leads").collect(),
      ctx.db.query("projects").collect(),
      ctx.db.query("careers").collect(),
      ctx.db.query("seoPages").collect(),
    ]);

    return {
      totalLeads: leads.length,
      newLeads: leads.filter((lead) => lead.status === "new").length,
      activeProjects: projects.filter((project) => project.status === "active").length,
      openRoles: careers.filter((career) => career.status === "open").length,
      seoPages: pages.length,
    };
  },
});
