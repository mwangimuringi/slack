"use client";

import { useMemberId } from "@/hooks/use-member-id";
import { useWorkspaceId } from "@/hooks/use-workspace-id";

const MemberPage = () => {
    const memberId = useMemberId();
    const workspaceId = useWorkspaceId();
    
    return (
        <div className="">
            {JSON.stringify({ memberId, workspaceId })}
        </div>
    );
};

export default MemberPage;