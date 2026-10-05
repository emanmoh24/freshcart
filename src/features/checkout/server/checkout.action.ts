"use server";

import axios, { AxiosRequestConfig } from "axios";
import { cookies } from "next/headers";
import { shippingAddressValues } from "../schema/checkout.schema";
import { apiClient } from "@/services/apiClient";

export async function createCashOrder({
  cartId,
  shippingAddress,
}: {
  cartId: string;
  shippingAddress: shippingAddressValues
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  if (!token) {
    return {
        
    }
  }

  try {
    const options: AxiosRequestConfig = {
      url: `/orders/${cartId}`,
      method: "POST",
      headers: {
        token: token?.value,
      },
      data: {shippingAddress},
    };

    const {data} = await apiClient.request(options)
    return data
  } catch (error) {}
}

export async function createOnlineOrder({
  cartId,
  shippingAddress,
  url
}: {
  cartId: string;
  shippingAddress: shippingAddressValues
  url: string
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  if (!token) {
    return {
        
    }
  }

  try {
    const options: AxiosRequestConfig = {
      url: `/orders/checkout-session/${cartId}?url=${url}`,
      method: "POST",
      headers: {
        token: token?.value,
      },
      data: {shippingAddress},
    };

    const {data} = await apiClient.request(options)
    return data
  } catch (error) {}
}
