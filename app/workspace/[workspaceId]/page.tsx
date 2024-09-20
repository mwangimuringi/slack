//Created a workspace redirect

interface WorkspaceIdPageProps {
  params: {
    workspaceId: string;
  };
}

import React from 'react'

const WorkspaceIdPage = ({params}: WorkspaceIdPageProps) => {
  return (
    <div>
      ID: {params.workspaceId}
    </div>
  )
}

export default WorkspaceIdPage;
