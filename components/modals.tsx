"use client";//opens  a boundary between server and client

import { useEffect, useState } from "react";

import { CreateWorkspaceModal } from "@/features/workspaces/components/create-workspace-modal";

export const Modals = () => {
    const [mounted, setMounted] = useState ();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    
    return (
        <>
            <CreateWorkspaceModal />
        </>
    )
}