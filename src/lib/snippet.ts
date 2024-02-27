"use server";
import { redirect } from "next/navigation";

import { db } from "@/db";

export const _edit = async (id: number, code: string) => {
  console.log('id', id);
  console.log('code', code);
  
  await db.snippet.update({
    where: {
      id: Number(id),
    },
    data: {
      code,
    },
  })

  redirect(`/snippets/${id}`);;
};

export const _delete = async (id: number) => {  
  await db.snippet.delete({
    where: {
      id
    }
   })

  redirect(`/`);;
};