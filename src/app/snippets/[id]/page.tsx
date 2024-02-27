import { FC } from "react";
import { Snippet } from "@prisma/client";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button, Code } from "@nextui-org/react";

import { db } from "@/db";
import * as lib from "@/lib";
import { Props } from "./types";

export const generateStaticParams = async () => {
  const snippets = await db.snippet.findMany({});
  return snippets.map(({ id }) => ({ id: String(id) })) as { id: string }[];
};

const ViewSnippet: FC<Props> = async ({ params }) => {
  const { id } = params;
  const snippet = await db.snippet.findFirst({
    where: {
      id: Number(id),
    },
  });

  if (!snippet) return notFound();

  const action = lib.snippet._delete.bind(null, Number(id));

  const renderSnippet = () => {
    const phrase: { [key in keyof Snippet]?: string } = {
      id: "ID",
      title: "Title",
    };

    return (
      <>
        <div className="flex gap-6">
          {["id", "title"].map((key) => {
            return (
              <div key={key}>
                <div>
                  {phrase[key as keyof Snippet]}:{" "}
                  {snippet[key as keyof Snippet]}
                </div>
              </div>
            );
          })}
        </div>
        <Code className="w-full mt-1.5">{snippet.code}</Code>
      </>
    );
  };

  return (
    <div>
      <form action={action}>
        <div className="flex justify-end gap-6">
          <Link
            href={`/snippets/${id}/edit`}
            className="border p-2 border-rounded"
          >
            Edit
          </Link>
          <Button type="submit" color="danger">
            Delete
          </Button>
        </div>
      </form>
      {renderSnippet()}
    </div>
  );
};

export default ViewSnippet;
