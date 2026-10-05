import { apiClient } from "@/services/apiClient";
import { AxiosRequestConfig } from "axios";
import { CategoryApiResponse } from "../types/categories.types";

export async function getAllCategories(): Promise<CategoryApiResponse> {
  const options: AxiosRequestConfig = {
    url: "/categories",
    method: "GET",
  };

  const { data } = await apiClient.request(options);

  return data;
}
