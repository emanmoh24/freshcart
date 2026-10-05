"use server";
import z, { success } from "zod";
import { loginSchema, loginValues } from "../schemas/login.schema";
import { AxiosRequestConfig, isAxiosError } from "axios";
import { apiClient } from "@/services/apiClient";

type loginFieldErrors = Partial<Record<keyof loginValues, string[]>>;
type LoginResponse = {
  message: string;
  user: {
    name: string;
    email: string;
    role: string;
  };
  token: string;
};

type loginActionReturn =
  | { success: true; message: string; data: LoginResponse }
  | { success: false; message: string; fieldErrors?: loginFieldErrors };

export async function loginAction(
  values: loginValues,
): Promise<loginActionReturn> {
  const validationResults = loginSchema.safeParse(values);

  if (!validationResults.success) {
    const { formErrors, fieldErrors } = z.flattenError(validationResults.error);

    return {
      success: false,
      message: formErrors[0] ?? "Fix the highlighted errors",
      fieldErrors,
    };
  }

  try {
    const options: AxiosRequestConfig = {
      url: "/auth/signin",
      method: "POST",
      data: validationResults.data,
    };

    const { data } = await apiClient.request(options);

    return {
      success: true,
      message: "User logged in successfully",
      data
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        success: false,
        message:
          error.response?.data.message ??
          "Cannot reach the server, please try again later",
      };
    }

    return {
      success: false,
      message: "Something went wrong",
    };
  }
}
