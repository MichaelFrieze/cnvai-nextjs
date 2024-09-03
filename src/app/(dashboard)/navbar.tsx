import { UserButton } from "@/features/auth/components/user-button";

export const Navbar = () => {
  return (
    <nav className="flex h-[68px] w-full items-center p-4">
      <div className="ml-auto">
        <UserButton />
      </div>
    </nav>
  );
};
