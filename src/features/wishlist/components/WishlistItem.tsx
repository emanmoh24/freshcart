"use client";
import { IconShoe, IconShoppingCart, IconTrash } from "@tabler/icons-react";
import React from "react";
import { WishlistEntity } from "../types/wishlist.types";
import { addProductToCart } from "@/features/cart/server/cart.actions";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { cartActions } from "@/features/cart/slices/cart.slice";
import { removeFromWishlist } from "../server/whishlist.actions";
import { wishlistActions } from "../slices/wishlist.slice";
import Swal from "sweetalert2";

export default function WishlistItem({
  wishlistData,
}: {
  wishlistData: WishlistEntity;
}) {
  const {
    _id,
    imageCover,
    price,
    priceAfterDiscount,
    title,
    category,
    quantity,
  } = wishlistData;

  const { setWishlistInfo, removeWishlistItem } = wishlistActions;
  const dispatch = useDispatch();
  const { setCartInfo } = cartActions;

  async function handleAddToCart() {
    const response = await addProductToCart(_id);

    if (response.status === "fail") {
      toast.error(response.message);
      return;
    }

    if (response.status === "success") {
      dispatch(setCartInfo(response));
      toast.success(response.message);
    }
  }

  // async function handleRemoveFromWishlist() {
  //   const response = await removeFromWishlist(_id);

  //   if (response.status === "fail") {
  //     toast.error(response.message);
  //   }

  //   if (response.status === "success") {
  //     toast.success(response.message);
  //     // dispatch(setWishlistInfo(response))
  //     dispatch(removeWishlistItem(_id));
  //   }
  // }

  async function handleRemoveFromWishlist() {
    Swal.fire({
      title: "Remove this item?",
      html: '<p class="text-sm leading-6 text-slate-600">This product will be removed from your wishlist.</p>',
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Remove item",
      cancelButtonText: "Keep item",
      buttonsStyling: false,
      customClass: {
        popup: "rounded-xl border border-emerald-100 bg-white shadow-xl",
        title: "text-xl font-bold text-slate-900",
        htmlContainer: "mt-1",
        confirmButton:
          "m-0 rounded-md bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2",
        cancelButton:
          "m-0 rounded-md border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2",
        actions: "gap-3",
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await removeFromWishlist(_id);

        if (response.status === "fail") {
          toast.error(response.message);
        }

        if (response.status === "success") {
          toast.success(response.message);
          // dispatch(setWishlistInfo(response));
          dispatch(removeWishlistItem(_id));
        }
      }
      Swal.fire({
        title: "Deleted!",
        html: '<p class="text-sm leading-6 text-slate-600">Product has been removed from your wishlist.</p>',
        icon: "success",
        buttonsStyling: false,
        customClass: {
          popup: "rounded-xl border border-emerald-100 bg-white shadow-xl",
          title: "text-xl font-bold text-slate-900",
          htmlContainer: "mt-1",
          confirmButton:
            "m-0 rounded-md bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2",
        },
      });
    });
  }

  return (
    <>
      <tr>
        <td className="px-5 py-4">
          <div className="flex items-center gap-4">
            <span className="grid size-14 shrink-0 place-items-center overflow-hidden rounded-lg border border-slate-100 bg-slate-50 text-slate-600">
              <img
                src={imageCover}
                alt={title}
                className="object-cover object-center"
              />
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-900">{title}</p>
              <p className="mt-1 text-sm text-slate-500">{category?.name}</p>
            </div>
          </div>
        </td>
        <td className="whitespace-nowrap px-5 py-4 text-sm font-semibold text-slate-900">
          {price} EGP
        </td>
        <td className="px-5 py-4">
          {quantity === 0 ? (
            <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-800">
              <span className="size-1.5 rounded-full bg-red-600" />
              Out of Stock
            </span>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
              <span className="size-1.5 rounded-full bg-emerald-600" />
              In Stock
            </span>
          )}
        </td>
        <td className="px-5 py-4">
          <div className="flex items-center justify-end gap-2">
            <button
              onClick={handleAddToCart}
              type="button"
              className="inline-flex cursor-pointer min-h-10 items-center gap-2 rounded-md bg-emerald-700 px-4 text-sm font-semibold text-white"
            >
              <IconShoppingCart size={16} aria-hidden="true" />
              Add to Cart
            </button>
            <button
              onClick={handleRemoveFromWishlist}
              type="button"
              aria-label="Remove Hoops 3.0 Low Classic Vintage Shoes from wishlist"
              className="grid cursor-pointer size-10 place-items-center rounded-md border border-slate-200 bg-white text-slate-500"
            >
              <IconTrash size={17} aria-hidden="true" />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}
