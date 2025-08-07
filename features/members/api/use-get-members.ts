import { Id } from "@/convex/_generated/dataModel";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

interface UseGetMembersProps {
  workspaceId: Id<"workspaces">;
}

export const useGetMembers = ({ workspaceId }: UseGetMembersProps) => {
  const data = useQuery(api.members.get, { workspaceId });
  const isLoading = data === undefined;
  console.log("data", data);

  return {
    data,
    isLoading,
    error: data?.error,
  };
};
