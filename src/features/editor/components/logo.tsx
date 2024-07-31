import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="relative size-8 shrink-0">
        <Image
          src="/logo.svg"
          fill
          alt="Image AI"
          className="shrink-0 transition hover:opacity-75"
        />
      </div>
    </Link>
  );
};
