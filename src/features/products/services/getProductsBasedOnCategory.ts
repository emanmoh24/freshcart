import { apiClient } from "@/services/apiClient";
import { AxiosRequestConfig } from "axios";
import { ProductsApiResponse } from "../types/products.types";

export async function getProductsBasedOnCategory(
  id: string,
): Promise<ProductsApiResponse> {
  const options: AxiosRequestConfig = {
    url: `/products?category=${id}`,
    method: "GET",
  };
  const { data } = await apiClient.request(options);
  return data;
}
