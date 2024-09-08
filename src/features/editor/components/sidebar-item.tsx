import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

export const SidebarItem = ({
  icon: Icon,
  label,
  isActive,
  onClick,
}: SidebarItemProps) => {
  return (
    <Button
      variant="ghost"
      onClick={onClick}
      className={cn(
        "flex aspect-video h-full w-full flex-col rounded-none p-3 py-4",
        isActive && "bg-muted text-primary",
      )}
    >
      <Icon className="size-5 shrink-0 stroke-2" />
      <span className="mt-2 text-xs">{label}</span>
    </Button>
  );
};
