import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartApiResponse, CartEntity } from "../types/cart.types";

export type CartInitialValues = {
    status: string,
      message: string,
      numOfCartItems: number,
      cartId: null | string,
      data: {
        products: CartEntity[], 
        totalCartPrice: number
      },
}

const cartInitialValues:CartInitialValues = {
    status: "",
      message: "",
      numOfCartItems: 0,
      cartId: null,
      data: {
        products: [], 
        totalCartPrice: 0
      },
}

const cartSlice = createSlice({
    name: "cart", 
    initialState: cartInitialValues, 
    reducers: {
      setCartInfo: function (state, action:PayloadAction<CartApiResponse>) {
        state.status = action.payload.status
        state.cartId = action.payload.cartId
        state.data = {
          products: action.payload.data.products, 
          totalCartPrice: action.payload.data?.totalCartPrice ?? 0
        }
        state.message = action.payload.message
        state.numOfCartItems = action.payload.numOfCartItems
      },
      
      clearCart: function (state){
        state.cartId = null
        state.data = {
          products: [], 
          totalCartPrice: 0
        }
        state.numOfCartItems = 0
      }
    }
})


export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions
