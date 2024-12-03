import { z } from "zod";

export const loginSchema = z.object({
  login_email: z.string().email("Formato de email inválido").max(150),
  password: z
    .string()
    .min(5, "A senha deve ter pelo menos 5 caracteres")
    .max(255),
});
