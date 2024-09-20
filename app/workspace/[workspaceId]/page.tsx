//Created a workspace redirect
"use client";

import { useParams } from 'next/navigation';
import React from 'react'

const WorkspaceIdPage = () => {
    const workspaceId = useWorkspaceId();
    return (
    <div>
      ID: {workspaceId}
    </div>
  )
}

export default WorkspaceIdPage;
