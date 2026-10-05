"use server";
import { apiClient } from "@/services/apiClient";
import { AxiosRequestConfig } from "axios";
import { cookies } from "next/headers";
type User = {
  name: string;
  id?: string;
  email?: string;
  role: string;
};
export async function setToken(token: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set("token", token, { maxAge: 60 * 60 * 24 * 7, httpOnly: true });
}

export async function getToken(): Promise<string | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  if (!token) return null;
  return token.value;
}

export async function deleteToken(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete("token");
}

export async function verifyToken(): Promise<{
  isAuthenticated: boolean;
  userInfo: null | User;
}> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  if (!token) {
    return {
      isAuthenticated: false,
      userInfo: null,
    };
  }

  try {
    const options: AxiosRequestConfig = {
      url: "/auth/verifyToken",
      method: "GET",
      headers: {
        token: token.value,
      },
    };

    const { data } = await apiClient.request(options);

    if (data.message === "verified") {
      return {
        isAuthenticated: true,
        userInfo: {
          name: data.decoded.name,
          id: data.decoded.id,
          role: data.decoded.role,
        },
      };
    }
    return {
      isAuthenticated: false,
      userInfo: null,
    };
  } catch (error) {
    return {
      isAuthenticated: false,
      userInfo: null,
    };
  }
}
