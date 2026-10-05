import z from "zod";

export const shippingAddressSchema = z.object({
  details: z
    .string().nonempty("Address in required")
    .min(10, "Address must be at least 10 characters long")
    .max(200, "Address must be at most 200 characters long"),
  phone: z
    .string()
    .nonempty("Phone number is required")
    .regex(/^(\+2)?01[0125][0-9]{8}$/, "Invalid phone number"),
  city: z
    .string().nonempty("City is required")
    .min(2, "City must be at least 2 characters long")
    .max(50, "City must be at most 50 characters long"),
});

export type shippingAddressValues = z.infer<typeof shippingAddressSchema>
