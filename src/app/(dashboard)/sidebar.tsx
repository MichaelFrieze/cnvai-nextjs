import { Logo } from "./logo";
import { SidebarRoutes } from "./sidebar-routes";

export const Sidebar = () => {
  return (
    <aside className="fixed left-0 hidden h-full w-[300px] shrink-0 flex-col lg:flex">
      <Logo />
      <SidebarRoutes />
    </aside>
  );
};
