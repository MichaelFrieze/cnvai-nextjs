interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex h-full flex-col bg-[url(/bg.jpg)] bg-cover bg-top">
      <div className="z-[4] flex h-full w-full flex-col items-center justify-center">
        <div className="h-full w-full md:h-auto md:w-[420px]">{children}</div>
      </div>
      <div className="fixed inset-0 z-[1] bg-[linear-gradient(180deg,rgba(0,0,0,0.8),rgba(0,0,0,.4),rgba(0,0,0,.8))]" />
    </div>
  );
};

export default AuthLayout;
