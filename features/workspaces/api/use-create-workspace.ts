//this file is tring to repopulate react query library

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useCallback } from "react";
import { Doc, Id } from "@/convex/_generated/dataModel";
import { error } from "console";

type RequestType = {name: string};
type ResponseType = Id<"workspaces">;

type Options = {
    onSuccess?: (data: Id<"workspaces">) => void;
    onError?: (error: Error) => void;
    onSettled?: () => void;
    throwError?: boolean;
};

export const useCreateWorkspace = () => {
    const mutation = useMutation(api.workspaces.create);

    const mutate = useCallback(async (values: any, options?: Options ) => {
        try {
            const response = await mutation(values);
            options?.onSuccess?.(response);
            return response;
        } catch {
            options?.onError?.(error as Error);

            if (options?.throwError) {
                throw error;
            }
        } finally {
            options?.onSettled?.();
        }
    }, [mutation]);

    return {
        mutate,
    }

}