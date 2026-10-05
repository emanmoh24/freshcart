"use client";

import Image from "next/image";
import {
  IconEye,
  IconGitCompare,
  IconHeart,
  IconHeartFilled,
  IconPlus,
  IconStar,
  IconStarFilled,
} from "@tabler/icons-react";
import { Product } from "../types/products.types";
import Link from "next/link";
import { addProductToCart } from "@/features/cart/server/cart.actions";
import { toast } from "sonner";
import { cartActions } from "@/features/cart/slices/cart.slice";
import { useDispatch } from "react-redux";
import {
  addToWishlist,
  getUserWishlist,
} from "@/features/wishlist/server/whishlist.actions";
import { success } from "zod";
import { wishlistActions } from "@/features/wishlist/slices/wishlist.slice";
import { useState } from "react";

export default function ProductCard({ product }: { product: Product }) {
  const { setCartInfo } = cartActions;
  const { setWishlistInfo } = wishlistActions;
  const dispatch = useDispatch();
  const [heart, setHeart] = useState(<IconHeart size={18} />);

  const {
    imageCover,
    title,
    ratingsQuantity,
    price,
    brand,
    ratingsAverage,
    category,
    priceAfterDiscount,
    _id,
  } = product;

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

  async function handleAddToWishlist() {
    const response = await addToWishlist(_id);

    if (response.status === "fail") {
      toast.error(response.message);
    }

    if (response.status === "success") {
      toast.success(response.message);
      const fullWishlist = await getUserWishlist();
      dispatch(setWishlistInfo(fullWishlist));
    }
  }

  return (
    <article className="group w-full max-w-xs overflow-hidden rounded-lg border border-emerald-100 bg-white transition duration-200 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md">
      <div className="relative aspect-square overflow-hidden bg-white cursor-pointer">
        <Image
          src={imageCover}
          alt={title}
          fill
          unoptimized
          sizes="(max-width: 640px) 100vw, 320px"
          className="object-contain p-5 transition-transform duration-300 group-hover:scale-[1.03]"
        />
        {priceAfterDiscount && (
          <span className="absolute left-3 top-3 rounded bg-red-500 px-2.5 py-1 text-xs font-semibold text-slate-900">
            -{Math.round(((price - priceAfterDiscount) / price) * 100)}%
          </span>
        )}
        <div className="absolute right-14 top-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={() => {
              handleAddToWishlist();
              setHeart(<IconHeartFilled size={18} />);
            }}
            aria-label="Add to wishlist"
            className="grid size-9 text-xs cursor-pointer place-items-center rounded-full bg-white text-slate-700 shadow-sm transition-colors hover:bg-rose-50 hover:text-rose-600"
          >
            {heart}
          </button>
          <Link
            href={`/products/${_id}`}
            aria-label="View product"
            className="grid size-9 place-items-center rounded-full bg-white text-slate-700 shadow-sm transition-colors hover:bg-amber-50 hover:text-amber-900"
          >
            <IconEye size={18} aria-hidden="true" />
          </Link>
          <button
            type="button"
            aria-label="Compare"
            className="grid size-9 place-items-center cursor-pointer rounded-full bg-white text-slate-700 shadow-sm transition-colors hover:bg-green-50 hover:text-green-600"
          >
            <IconGitCompare size={18} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="space-y-2.5 p-4">
        <p className="text-xs font-medium text-slate-500">{category.name}</p>
        <h2 className="line-clamp-2 min-h-10 text-sm font-semibold leading-5 text-slate-900">
          {title}
        </h2>
        <p className="text-xs text-slate-500">{brand.name}</p>
        <div
          className="flex items-center gap-1.5 text-xs text-slate-500"
          aria-label={`Rated ${ratingsAverage.toFixed(1)} out of 5, ${ratingsQuantity} ratings`}
        >
          <span
            className="flex items-center gap-0.5 text-amber-400"
            aria-hidden="true"
          >
            <IconStarFilled size={14} />
            <IconStarFilled size={14} />
            <IconStarFilled size={14} />
            <IconStarFilled size={14} />
            <IconStar size={14} />
          </span>
          <span>
            {ratingsAverage.toFixed(1)} ({ratingsQuantity})
          </span>
        </div>
        <div className="flex items-center justify-between gap-2 pt-1">
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm font-semibold text-slate-900">
              EGP {priceAfterDiscount || price}
            </p>
            {priceAfterDiscount && (
              <p className="text-sm font-semibold text-gray-400 line-through">
                EGP {priceAfterDiscount || price}
              </p>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            type="button"
            className="flex cursor-pointer shrink-0 items-center gap-1 rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
          >
            <IconPlus size={16} aria-hidden="true" />
            Add
          </button>
        </div>
      </div>
    </article>
  );
}
