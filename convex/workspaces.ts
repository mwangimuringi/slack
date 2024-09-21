//in queries i will not throw errors while in mutations i will
import { v } from "convex/values";
import { auth } from "./auth";
import { mutation, query } from "./_generated/server";

const generateCode = () => {
  // const code = Math.random().toString(36).substring(2, 15);
  // return code;
  const code = Array.from(
    { length: 6 },
    () =>
       "0123456789abcdefghijklmnopqrstuvwxyz" [Math.floor(Math.random() * 36)].toString()
  ).join("");
  return code;
};

//api endpoints  for workspaces
export const create = mutation({
  args: {
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const userId = await auth.getUserId(ctx);

    if (!userId) {
      throw new Error("Not authenticated");
    }

    //TODO: create a proper method later
    const joinCode = generateCode();

    const workspaceId = await ctx.db.insert("workspaces", {
      name: args.name,
      userId,
      joinCode,
    });

    // const workspace = await ctx.db.get(workspaceId);
    await ctx.db.insert("members", {
      userId,
      workspaceId,
      role: "admin",
    });

    return workspaceId;
  },
});

export const get = query({
  args: {},
  handler: async (ctx) => {
    const userId = await auth.getUserId(ctx);
    if (!userId) {
      return [];
    }

    const members = await ctx.db
      .query("members")
      .withIndex("by_user_id", (q) => q.eq("userId", userId))
      .collect();

    const workspaceIds = members.map((member) => member.workspaceId);

    const workspaces = [];
    //generate a list of workspaces
    for (const workspace of workspaceIds) {
      const workspace = await ctx.db.get(workspaceId);

      if (workspace) {
        workspaces.push(workspace);
      }
    }
    return workspaces;
  },
});

export const getById = query({
  args: {
    id: v.id("workspaces"),
  },
  handler: async (ctx, args) => {
    const userId = await auth.getUserId(ctx);

    if (!userId) {
      throw new Error("Not authenticated");
    }

    const member = await ctx.db
      .query("members")
      .withIndex("by_workspace_id_user_id", (q) =>
        q.eq("workspaceId", args.id).eq("userId", userId)
      )
      .unique();

    if (!member) {
      return null;
    }

    return await ctx.db.get(args.id);
  },
});
