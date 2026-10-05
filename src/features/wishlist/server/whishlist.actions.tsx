"use server";
import { AxiosRequestConfig } from "axios";
import { cookies } from "next/headers";
import { ApiErrorResponse, WishlistApiResponse } from "../types/wishlist.types";
import { apiClient } from "@/services/apiClient";

export async function addToWishlist(
  id: string,
): Promise<WishlistApiResponse | ApiErrorResponse> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  if (!token) {
    return {
      status: "fail",
      message: "You are not logged in. Please log in to get access",
    };
  }

  try {
    const options: AxiosRequestConfig = {
      url: `/wishlist`,
      method: "POST",
      headers: {
        token: token?.value,
      },
      data: {
        productId: id,
      },
    };

    const { data } = await apiClient.request(options);
    return data;
  } catch (error) {
    return {
      status: "fail",
      message: "Something went wrong, try again later",
    };
  }
}

export async function removeFromWishlist(
  id: string,
): Promise<WishlistApiResponse | ApiErrorResponse> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  if (!token) {
    return {
      status: "fail",
      message: "You are not logged in. Please log in to get access",
    };
  }

  try {
    const options: AxiosRequestConfig = {
      url: `/wishlist/${id}`,
      method: "DELETE",
      headers: {
        token: token?.value,
      },
    };

    const { data } = await apiClient.request(options);
    return data;
  } catch (error) {
    return {
      status: "fail",
      message: "Something went wrong, try again later",
    };
  }
}

export async function getUserWishlist(): Promise<WishlistApiResponse | ApiErrorResponse> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  if (!token) {
    return {
      status: "fail",
      message: "You are not logged in. Please log in to get access",
    };
  }

  try {
    const options: AxiosRequestConfig = {
      url: `/wishlist`,
      method: "GET",
      headers: {
        token: token?.value,
      },
    };

    const { data } = await apiClient.request(options);
    return data;
  } catch (error) {
    return {
      status: "fail",
      message: "Something went wrong, try again later",
    };
  }
}
