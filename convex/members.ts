import { v } from "convex/values";

import { query } from "./_generated/server";
import { auth } from "./auth";

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
                q.eq("workspaceId", ags.workspaceId).eq("userId", userId)
            )
            .collect();
        if (!member) {
            return null;
        }
        return member;
    },
});