import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

export const useGetWorkspaces = () => {
  const data = useQuery(api.workspaces.get);
  const isLoading = data === undefined;

  return {
    data,
    isLoading,
  };
};