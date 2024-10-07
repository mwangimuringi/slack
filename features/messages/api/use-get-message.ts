import { useQuery } from "convex/react";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

interface useGetMessageProps {
    id: Id<"messages">
};

export const useGetMessage = ({ id }: useGetMessageProps) => {
    const data = useQuery(api.messages.getById, { id });
    const isLoading = data === undefined;

    return { data, isLoading };
};