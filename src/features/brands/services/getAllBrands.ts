import { apiClient } from "@/services/apiClient";
import { AxiosRequestConfig } from "axios";
import { BrandsApiResponse } from "../types/brands.types";

export async function getAllBrands ():Promise<BrandsApiResponse> {
    const options:AxiosRequestConfig = {
        url: "/brands", 
        method: "GET"
    }

    const {data} = await apiClient.request(options)
    return data
}