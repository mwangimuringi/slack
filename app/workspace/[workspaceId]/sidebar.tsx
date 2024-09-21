import UserButton from "@/features/auth/components/user-button";
import React from "react";
import { WorkspaceSwitcher } from "./workspace-switcher";

export const Sidebar = () => {
  return (
    <aside className="w-[70px] h-full bg-[#481349] flex flex-col gap-y-4 items-center pl-[9px] pb-4">
      <WorkspaceSwitcher />
      <SidebarButton />
      <div className="flex flex-col justify-center items-center mt-auto gap-y-1">
        <UserButton />
      </div>
    </aside>
  );
};
