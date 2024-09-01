import { auth } from "@/auth";
import { protectServer } from "@/features/auth/utils";

export default async function Home() {
  await protectServer();

  const session = await auth();

  // console.log({ session });

  return (
    <div>
      <h1>{JSON.stringify(session)}</h1>
    </div>
  );
}
