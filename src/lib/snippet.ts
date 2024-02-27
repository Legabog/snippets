"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { db } from "@/db";

export const _create = async (
  formState: { titleError: string; codeError: string },
  formData: FormData
) => {
  const errors = {
    titleError: "",
    codeError: "",
  };

  const title = formData.get("title") as string;
  const code = formData.get("code") as string;

  if (typeof title !== "string" || title.length < 3)
    errors.titleError = "Title must be at least 3 characters long";
  if (typeof code !== "string" || code.length < 10)
    errors.codeError = "Code must be at least 10 characters long";
  if (errors.codeError || errors.titleError) return errors;

  await db.snippet.create({
    data: {
      title,
      code,
    },
  });

  revalidatePath("/");
  redirect(`/`);
};
export const _edit = async (id: number, code: string) => {
  await db.snippet.update({
    where: {
      id: Number(id),
    },
    data: {
      code,
    },
  });

  revalidatePath(`/snippets/${id}`);
  redirect(`/snippets/${id}`);
};

export const _delete = async (id: number) => {
  await db.snippet.delete({
    where: {
      id,
    },
  });

  revalidatePath("/");
  redirect(`/`);
};
