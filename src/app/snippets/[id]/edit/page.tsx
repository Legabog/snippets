import { FC } from "react";
import { notFound } from "next/navigation";

import { db } from "@/db";
import { SnippetEditForm } from "@/components";
import { Props } from "./types";

const EditSnippet: FC<Props> = async ({ params }) => {
  const { id } = params;
  const snippet = await db.snippet.findFirst({
    where: {
      id: Number(id),
    },
  });

  if (!snippet) return notFound();

  return (
    <div>
      <SnippetEditForm snippet={snippet}/>
    </div>
  );
};

export default EditSnippet;
