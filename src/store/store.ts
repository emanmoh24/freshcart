import { wishlistReducer, WishlistValues } from './../features/wishlist/slices/wishlist.slice';
import { CartInitialValues, cartReducer } from '@/features/cart/slices/cart.slice';
import { authReducer, InitialState } from './../features/auth/slices/auth.slice';
import { configureStore } from "@reduxjs/toolkit";

export type PreloadedState = {
  authReducer: InitialState, 
  cartReducer: CartInitialValues, 
  wishlistReducer: WishlistValues
}

export function createStore (preloadedState: PreloadedState) {
  const myStore = configureStore({
    reducer: {
      authReducer,
      cartReducer, 
      wishlistReducer
    }, 
    preloadedState
  })

  return myStore 
}

export type AppStore = ReturnType<typeof createStore>
export type AppState = ReturnType<AppStore["getState"]>
