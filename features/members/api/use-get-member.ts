import { Id } from "@/convex/_generated/dataModel";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

interface UseGetMemberProps {
  id: Id<"members">;
}

export const useGetMember = ({ id }: UseGetMemberProps) => {
  const data = useQuery(api.members.getById, { id });
  const isLoading = data === undefined;
  if (isLoading) return { data: undefined, isLoading };

  return {
    data,
    isLoading,
  };
};
