"use server"
import { apiClient } from "@/services/apiClient"
import { Axios, AxiosRequestConfig } from "axios"
import { cookies } from "next/headers"

 

export async function getUserOrders() {
    const cookieStore = await cookies()
    const token = cookieStore.get("token")

    try{
        const options:AxiosRequestConfig = {
            url: `/orders/user/6407cf6f515bdcf347c09f17`, 
            method: "GET", 
            headers: {
                token: token?.value
            }
        }

        const {data} = await apiClient.request(options)
    } catch(error) {

    }

}