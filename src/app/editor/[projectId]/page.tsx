import { protectServer } from "@/features/auth/utils";
import { Editor } from "@/features/editor/components/editor";

const EditorProjectIdPage = async () => {
  await protectServer();

  return (
    <div>
      <Editor />
    </div>
  );
};

export default EditorProjectIdPage;
