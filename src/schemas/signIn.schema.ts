import { z } from "zod";

export const signInSchema = z.object({
    email: z.string().email().min(1),
    password: z
    .string()
    .min(8, "São necessário pelo menos oito caracteres.")
    .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
    .regex(
      /[-/~!#*$@_%+=.,^&(){}[|;:”<>?]/,
      "É necessário pelo menos um caráctere especial"
    ),
});

export type TSignInUser = z.infer<typeof signInSchema>