"use client"; //opens  a boundary between server and client

import { useEffect, useState } from "react";

import { CreateWorkspaceModal } from "@/features/workspaces/components/create-workspace-modal";

export const Modals = () => {
  const [mounted, setMounted] = useState(false);

  // To prevent potential hydration problem, useEffect is used to force this to be a client-side component
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <CreateWorkspaceModal />
    </>
  );
};
