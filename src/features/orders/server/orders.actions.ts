"use server";
import { apiClient } from "@/services/apiClient";
import { Axios, AxiosRequestConfig } from "axios";
import { cookies } from "next/headers";
import { OrdersApiResponse } from "../types/orders.types";

export async function getUserOrders(): Promise<OrdersApiResponse> {
  const options: AxiosRequestConfig = {
    url: `/orders/`,
    method: "GET",
  };

  const { data } = await apiClient.request(options);
  return data;
}
