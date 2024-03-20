import { z } from "zod";

export const nameSchema = z
  .string()
  .min(1, "Минимальная длина - 1 символ")
  .max(60, "Максимальная длина - 60 символов")
  .regex(/^(?!.*--)[\p{L}\s-]+$/u, "Недопустимые символы");

export const phoneSchema = z
  .string()
  .regex(/^[0-9]{10,12}$/, "Неправильный формат телефона");

export const validationSchema = z.object({
  firstname: nameSchema,
  lastname: nameSchema,
  phone: phoneSchema,
});

export const backUrl = "https://shift-backend.onrender.com";
