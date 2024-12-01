import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório").max(255),
  login_email: z.string().email("Formato de email inválido").max(150),
  password: z
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .max(255),
  user_type: z.enum(["admin", "regular"], {
    errorMap: () => ({
      message: "O tipo de usuário deve ser admin ou regular",
    }),
  }),
});

export const updateUserSchema = z
  .object({
    name: z.string().min(1, "Nome é obrigatório").max(255).optional(),
    login_email: z
      .string()
      .email("Formato de email inválido")
      .max(150)
      .optional(),
    password: z
      .string()
      .min(6, "A senha deve ter pelo menos 6 caracteres")
      .max(255)
      .optional(),
    user_type: z
      .enum(["admin", "regular"], {
        errorMap: () => ({
          message: "O tipo de usuário deve ser admin ou regular",
        }),
      })
      .optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: "Pelo menos um campo deve ser fornecido para atualização",
  });
