import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WishlistEntity } from "../types/wishlist.types";

export type WishlistValues = {
  status: string;
  message?: string;
  count?: number;
  data: WishlistEntity[];
};

const wishlistValues: WishlistValues = {
  status: "",
  message: "",
  count: 0,
  data: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: wishlistValues,
  reducers: {
    setWishlistInfo: function (state, action: PayloadAction<WishlistValues>) {
      state.count = action.payload.count;
      state.message = action.payload.message;
      state.status = action.payload.status;
      state.data = action.payload.data;
    },
    removeWishlistItem: function (state, action: PayloadAction<string>) {
      state.data = state.data.filter(
        (item) => item._id !== action.payload && item.id !== action.payload,
      );
      state.count = state.data.length;
    },
  },
});

export const wishlistReducer = wishlistSlice.reducer;
export const wishlistActions = wishlistSlice.actions;
