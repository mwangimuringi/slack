import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { IconType } from "react-icons/lib";
import { cva, type VariantProps } from "class-variance-authority"; //comes with shacn

import { Button } from "@/components/ui/button";
import { useWorkspaceId } from "@/hooks/use-workspace-id";

const sidebarItemVariants = cva(
    "flex items-center gap-1.5 justify-center font-normal h-7 px-[18px] text-sm overflow-hidden ",{
        variants: {
    }
)


interface SidebarItemProps {
  label: string;
  id: string;
  icon: LucideIcon | IconType;
}

export const SidebarItem = ({ label, id, icon: Icon }: SidebarItemProps) => {
  const workspaceId = useWorkspaceId();
  return (
    <Button variant="transparent" size="sm" asChild>
      <Link href={`/workspace/${workspaceId}/channel/${id}`}>
        <Icon />
        <span>{label}</span>
      </Link>
    </Button>
  );
};
