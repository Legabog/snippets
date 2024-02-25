"use server";
import { redirect } from "next/navigation";

import { db } from "@/db";

export const edit = async (id: number, code: string) => {
  console.log('id', id);
  console.log('code', code);
  
  db.snippet.update({
    where: {
      id: Number(id),
    },
    data: {
      code,
    },
  })

  redirect(`/snippets/${id}`);;
};