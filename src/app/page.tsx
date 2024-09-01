import { protectServer } from "@/features/auth/utils";

export default async function Home() {
  await protectServer();

  return (
    <div>
      <h1>You are logged in</h1>
    </div>
  );
}
