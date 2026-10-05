import { apiClient } from "@/services/apiClient";
import { AxiosRequestConfig } from "axios";
import { SingleProductApiResponse } from "../types/productDetails.types";

export async function getSpecificProduct (id:String):Promise<SingleProductApiResponse> {
const options :AxiosRequestConfig = {
    url: `/products/${id}`, 
    method: "GET"
}

const {data} = await apiClient.request(options)
return data 
}