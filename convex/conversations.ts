import { v } from "convex/values";
import { mutation } from "./_generated/server";
import { auth } from "./auth";

export const createOrGet  = mutation({
    args: {
        memberId: v.id("members"),
        workspaceId: v.id("workspaces"),
    },
    handler: async (ctx, args) => {
        const userId =  await auth.getUserId(ctx);

        if (!userId) {
            throw new Error("Unauthorized");
        }
    }
});