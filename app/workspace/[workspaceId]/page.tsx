//Created a workspace redirect
"use client";
import React from 'react'

import useGetWorkspace from '@/features/workspaces/api/use-get-workspace';
import { useWorkspaceId } from '@/hooks/use-workspace-id';

const WorkspaceIdPage = () => {
    const workspaceId = useWorkspaceId();
    const { data } = useGetWorkspace({id: workspaceId});
    return (
    <div>
      Data: {JSON.stringify(data)}
    </div>
  )
}

export default WorkspaceIdPage;
