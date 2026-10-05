import path from "path";
import z from "zod";
export const signupSchema = z.object({
  name: z.string().min(1, { error: "Please enter your name" }),
  email: z
    .email({ error: "Please enter a valid email address" })
    .min(1, { error: "Please enter your email address" }),
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
  rePassword: z.string().min(1, { error: "Please confirm your password" }),
  phone: z.string().min(1, {error: "Please enter your phone number"}).regex(/^01[0125][0-9]{8}$/, {error: "Please enter a valid egyptian number"})
}).refine((data) => data.password === data.rePassword, {error: "Passwords do not match", path: ["rePassword"]});


export type signupValues = z.infer<typeof signupSchema>