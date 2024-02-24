import { FC } from "react";
import { Snippet } from "@prisma/client";
import { notFound } from "next/navigation";

import { db } from "@/db";
import { Props } from "./types";
import { Button, Code } from "@nextui-org/react";

const ViewSnippet: FC<Props> = async ({ params }) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const snippet = await db.snippet.findFirst({
    where: {
      id: Number(params.id),
    },
  });

  if (!snippet) return notFound();

  const renderSnippet = () => {
    const phrase: { [key in keyof Snippet]?: string } = {
      id: "ID",
      title: "Title",
    }

    return (
      <>
      <div className="flex gap-6">
        {['id', 'title'].map((key) => {
          return (
            <div key={key}>
              <div>{phrase[key as keyof Snippet]}: {snippet[key as keyof Snippet]}</div>
            </div>
          );
        })}
      </div>
      <Code className="w-full mt-1.5">{snippet.code}</Code>
      </>
    );
  }

  return (
    <div>
      <div className="flex justify-end gap-6">
        <Button color="primary">Edit</Button>
        <Button color="danger">Delete</Button>
      </div>
      {renderSnippet()}
    </div>
  );
};

export default ViewSnippet;
