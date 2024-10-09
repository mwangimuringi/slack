"use client";

import { useCreateOrGetConversation } from "@/features/conversations/use-create-or-get-conversations";

import { useMemberId } from "@/hooks/use-member-id";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
import { AlertTriangle, Loader } from "lucide-react";
import { useEffect } from "react";

const MemberPage = () => {
  const memberId = useMemberId();
  const workspaceId = useWorkspaceId();

  const { data, mutate, isPending } = useCreateOrGetConversation();

  useEffect(() => {
    mutate({ 
        workspaceId, memberId 
    })
  }, [memberId, workspaceId, mutate]);

  if (isPending) {
    return (
        <div className="h-full flex items-center justify-center">
            <Loader className="size-6 animate-spin text-muted-foreground"/>
        </div>
    )
  }

  
  if (!data) {
    return (
        <div className="h-full flex items-center justify-center">
            <AlertTriangle className="size-6 animate-spin text-muted-foreground"/>
        </div>
    )
  }

  return <div className="">{JSON.stringify({ memberId, workspaceId })}</div>;
};

export default MemberPage;
