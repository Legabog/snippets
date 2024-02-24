import { FC } from "react";
import Link from "next/link";
import { Card, CardBody, CardHeader, Code } from "@nextui-org/react";

import { db } from "@/db";

const Main: FC = async () => {
  const snippets = await db.snippet.findMany({});

  const renderSnippets = snippets.map(({ id, title, code }) => {
    return (
      <Card className="py-4" key={id}>
        <Link href={`/snippets/${id}`}>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">id {id}</h4>
            <p className="text-tiny uppercase font-bold">{title}</p>
          </CardHeader>
        </Link>
        <CardBody className="overflow-visible py-2">
          <Code>{code}</Code>
        </CardBody>
      </Card>
    );
  });

  return (
    <div className="flex flex-col gap-6">
      <div className="flex">
        <h1 className="text-xt font-bold grow">Snippets</h1>
        <Link href={"/snippets/new"} className="border p-2 border-rounded">
          New
        </Link>
      </div>
      {renderSnippets}
    </div>
  );
};

export default Main;
