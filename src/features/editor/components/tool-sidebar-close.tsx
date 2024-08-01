import { ChevronsLeft } from "lucide-react";

interface ToolSidebarCloseProps {
  onClick: () => void;
}

export const ToolSidebarClose = ({ onClick }: ToolSidebarCloseProps) => {
  return (
    <button
      onClick={onClick}
      className="group absolute -right-[1.80rem] top-1/2 flex h-[70px] -translate-y-1/2 transform items-center justify-center rounded-r-xl border-y border-r bg-white px-1 pr-2"
    >
      <ChevronsLeft className="size-4 text-black transition group-hover:opacity-75" />
    </button>
  );
};
