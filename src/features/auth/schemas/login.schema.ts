import z from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { error: "Please enter your email address" })
    .pipe(z.email({ error: "Please enter a valid email address" })),
  password: z
    .string()
    .min(1, { error: "Please enter a password" })
    .regex(/[A-Z]/, {
      error: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      error: "Password must contain at least one lowercase letter",
    })
    .regex(/[0-9]/, {
      error: "Password must contain at least one number",
    })
    .regex(/[!@#$%^&*_]/, {
      error:
        "Password must contain at least one special character ! @ # $ % ^ & * _",
    }),
});

export type loginValues = z.infer<typeof loginSchema>
