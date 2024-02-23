'use server';
import { db } from "@/db";

export const createSnippet = async (formData: FormData) => {
  
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;

  
}