"use server";

import prisma from "@/lib/prisma";
import { z } from "zod";

const bloodMap = {
  "A+": "A_POS",
  "A-": "A_NEG",
  "B+": "B_POS",
  "B-": "B_NEG",
  "AB+": "AB_POS",
  "AB-": "AB_NEG",
  "O+": "O_POS",
  "O-": "O_NEG",
} as const;

type BloodUI = keyof typeof bloodMap;

const updateStudentSchema = z.object({
  id: z.string(),
  fullName: z.string().min(1),
  username: z.string().min(1),
  phone: z.string().min(10),
  fatherName: z.string().min(1),
  motherName: z.string().min(1),
  bloodGroup: z.custom<BloodUI>(),
  healthIssues: z.boolean(),
});

export async function updateStudent(data: unknown) {
  const parsed = updateStudentSchema.safeParse(data);

  if (!parsed.success) {
    return { error: parsed.error.issues[0].message };
  }

  const student = parsed.data;

  await prisma.student.update({
    where: { id: student.id },
    data: {
      fullName: student.fullName,
      username: student.username,
      mobileNumber: student.phone,
      fatherName: student.fatherName,
      motherName: student.motherName,
      bloodGroup: bloodMap[student.bloodGroup],
      healthIssues: student.healthIssues ? "YES" : "NO",
    },
  });

  return { success: true };
}
