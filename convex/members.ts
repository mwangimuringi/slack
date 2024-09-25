import { v } from "convex/values";

import { auth } from "./auth";
import { Id } from "./_generated/dataModel";
import { query, QueryCtx } from "./_generated/server";

// TODO: add members to workspace frontend
const populateUser = async (ctx: QueryCtx, id: Id<"users">) => {
    return ctx.db.get(id);
};

export const get = query({
  args: { workspaceId: v.id("workspaces") },
  handler: async (ctx, args) => {
    const userId = await auth.getUserId(ctx);

    if (!userId) {
      return [];
    }
    const member = await ctx.db
      .query("members")
      .withIndex("by_workspace_id_user_id", (q) =>
        q.eq("workspaceId", args.workspaceId).eq("userId", userId)
      )
      .unique();
    if (!member) {
      return [];
    }
    const data = await ctx.db
      .query("members")
      .withIndex("by_workspace_id_user_id", (q) => q.eq("workspaceId", args.workspaceId))
      .collect();
        //adding functionality to get members of workspace
    const members = [];

    for (const members of data) {
        const user = await populateUser(ctx, members.userId);

        if (user) {
            members.push({
                ...member,
                user,
            });
        }
    }
    return members;
  },
});

export const current = query({
  args: { workspaceId: v.id("workspaces") },
  handler: async (ctx, args) => {
    const userId = await auth.getUserId(ctx);

    if (!userId) {
      return null;
    }
    const member = await ctx.db
      .query("members")
      .withIndex("by_workspace_id_user_id", (q) =>
        q.eq("workspaceId", args.workspaceId).eq("userId", userId)
      )
      .unique();
    if (!member) {
      return null;
    }

    return member;
  },
});
