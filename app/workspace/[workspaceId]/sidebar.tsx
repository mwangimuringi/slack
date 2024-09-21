import UserButton from "@/features/auth/components/user-button";
import React from "react";
import { Bell, Home, MessagesSquare, MoreHorizontal } from "lucide-react";

import { WorkspaceSwitcher } from "./workspace-switcher";
import { SidebarButton } from "./sidebar-button";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
    const pathname = usePathname();
  return (
    <aside className="w-[70px] h-full bg-[#481349] flex flex-col gap-y-4 items-center pl-[9px] pb-4">
      <WorkspaceSwitcher />
      <SidebarButton icon={ Home } label="Home" isActive={pathname.includes("/workspace")} />
      <SidebarButton icon={MessagesSquare} label="DMs" isActive={false} />
      <SidebarButton icon={Bell} label="Activity" isActive={false} />
      <SidebarButton icon={MoreHorizontal} label="More" isActive={false} />
      <div className="flex flex-col justify-center items-center mt-auto gap-y-1">
        <UserButton />
      </div>
    </aside>
  );
};
