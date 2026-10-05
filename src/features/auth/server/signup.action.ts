"use server";
import { AxiosRequestConfig, isAxiosError } from "axios";
import { signupSchema, signupValues } from "../schemas/signup.schema";
import z from "zod";
import { apiClient } from "@/services/apiClient";

type signupFieldErrors = Partial<Record<keyof signupValues, string[]>>;
type signupActionReturn =
  | {
      success: true;
      message: string;
    }
  | {
      success: false;
      message: string;
      fieldErrors?: signupFieldErrors;
    };

export async function signupAction(
  values: signupValues,
): Promise<signupActionReturn> {
  const validationResults = signupSchema.safeParse(values);

  if (validationResults.success === false) {
    const { fieldErrors, formErrors } = z.flattenError(validationResults.error);

    console.log({ fieldErrors });
    return {
      success: false,
      message: formErrors[0] ?? "Fix the highlighted errors",
      fieldErrors,
    };
  }

  try {
    const options: AxiosRequestConfig = {
      url: "/auth/signup",
      method: "POST",
      data: validationResults.data,
    };

    await apiClient.request(options);
    return {
        success: true, 
        message: "Account created successfully"
    }
    
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        success: false,
        message:
          error.response?.data.message ??
          "Cannot reach the server, try again later",
      };
    }

    return {
      success: false,
      message: "Something went wrong",
    };
  }
}
