import { protectServer } from "@/features/auth/utils";

import { Banner } from "./banner";
// import { ProjectsSection } from "./projects-section";
// import { TemplatesSection } from "./templates-section";

export default async function Home() {
  await protectServer();

  return (
    <div className="mx-auto flex max-w-screen-xl flex-col space-y-6 pb-10">
      <Banner />
      {/* <TemplatesSection /> */}
      {/* <ProjectsSection /> */}
    </div>
  );
}
