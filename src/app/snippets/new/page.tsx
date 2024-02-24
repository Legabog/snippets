import { FC } from "react";
import { redirect } from "next/navigation";
import { Button, Divider, Input, Textarea } from "@nextui-org/react";

import { db } from "@/db";

const CreateSnippet: FC = () => {
  const action = async (formData: FormData) => {
    "use server";
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    await db.snippet.create({
      data: {
        title,
        code,
      },
    });

    redirect("/");
  };

  return (
    <form action={action}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <Divider className="my-4" />
      <div className="flex flex-col gap-4">
        <Input id="title" type="text" label="Title" name="title" />
        <Textarea id="code" name="code" label="Code" />
        <Button className="w-2/12 self-end" type="submit" color="primary">
          Create
        </Button>
      </div>
    </form>
  );
};

export default CreateSnippet;
