"use server";

import prisma from "@/lib/prisma";
import { z } from "zod";

const deleteStudentSchema = z.object({
  id: z.string(),
});

export async function deleteStudent(data: unknown) {
  const parsed = deleteStudentSchema.safeParse(data);

  if (!parsed.success) {
    return { error: parsed.error.issues[0].message };
  }

  const { id } = parsed.data;

  const exists = await prisma.student.findUnique({
    where: { id },
  });

  if (!exists) {
    return { error: "Student not found" };
  }

  await prisma.student.delete({
    where: { id },
  });

  return { success: true };
}
