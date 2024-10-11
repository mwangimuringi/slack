import { Id } from "@/convex/_generated/dataModel";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

interface UseGetMemberProps {
  id: Id<"members">;
  // TODO: add more props
}

export const useGetMember = ({ id }: UseGetMemberProps) => {
  const data = useQuery(api.members.getById, { id });
  const isLoading = data === undefined;

  return {
    data,
    isLoading,
  };
};
