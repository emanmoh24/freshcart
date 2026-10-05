"use client";

import Image from "next/image";
import Link from "next/link";
import {
  IconBolt,
  IconCheck,
  IconChevronRight,
  IconHeart,
  IconHome2,
  IconMinus,
  IconPlus,
  IconRefresh,
  IconShieldCheck,
  IconShoppingCart,
  IconStarFilled,
  IconTruckDelivery,
} from "@tabler/icons-react";
import type { ProductDetails } from "../types/productDetails.types";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import {
  addProductToCart,
  updateProductQuantity,
} from "@/features/cart/server/cart.actions";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { cartActions } from "@/features/cart/slices/cart.slice";
import {
  addToWishlist,
  getUserWishlist,
} from "@/features/wishlist/server/whishlist.actions";
import { wishlistActions } from "@/features/wishlist/slices/wishlist.slice";

export default function ProductInfo({ product }: { product: ProductDetails }) {
  const {
    category,
    title,
    imageCover,
    brand,
    ratingsAverage,
    ratingsQuantity,
    price,
    priceAfterDiscount,
    quantity,
    description,
    images,
    _id,
  } = product;
  const { setCartInfo } = cartActions;
  const { setWishlistInfo } = wishlistActions;
  const dispatch = useDispatch();

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
    <section className="bg-slate-50/70 py-6 sm:py-8 lg:py-10">
      <div className="container">
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 transition-colors hover:text-emerald-700"
          >
            <IconHome2 size={16} />
            <span>Home</span>
          </Link>
          <IconChevronRight size={15} className="text-slate-300" />
          <Link
            href={`/categories/${category._id}`}
            className="transition-colors hover:text-emerald-700"
          >
            {category.name}
          </Link>
          <IconChevronRight size={15} className="text-slate-300" />
          <span className="max-w-full truncate font-medium text-slate-800">
            {title}
          </span>
        </nav>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-8">
          <div className="min-w-0">
            <div className="overflow-hidden rounded-lg border border-emerald-100 bg-white shadow-sm">
              <div className=" overflow-hidden bg-linear-to-br from-emerald-50 via-white to-amber-50 p-6 sm:p-10">
                <ImageGallery
                  showNav={false}
                  showPlayButton={false}
                  items={images?.map((image) => {
                    return {
                      original: image,
                      thumbnail: image,
                    };
                  })}
                />
              </div>
            </div>
          </div>

          <div className="min-w-0 rounded-lg border border-emerald-100 bg-white p-5 shadow-sm sm:p-7 lg:p-8">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Link
                href={`/categories/${category._id}`}
                className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-800 transition-colors hover:bg-emerald-100"
              >
                {category.name}
              </Link>
              <span className="rounded-full bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-800">
                {brand.name}
              </span>
            </div>

            <h1 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
              {title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              <span
                aria-label={`${ratingsAverage.toFixed(1)} out of 5 stars`}
                className="flex items-center gap-0.5 text-amber-400"
              >
                {Array.from({ length: 5 }, (_, index) => (
                  <IconStarFilled key={index} size={16} />
                ))}
              </span>
              <span className="text-sm font-semibold text-slate-700">
                {ratingsAverage.toFixed(1)}
              </span>
              <span className="text-sm text-slate-400">
                ({ratingsQuantity} reviews)
              </span>
            </div>

            <div className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-slate-100 pb-6">
              <span className="text-3xl font-bold text-slate-900">
                EGP {price || priceAfterDiscount}
              </span>
              {priceAfterDiscount && (
                <span className="text-base text-slate-400 line-through">
                  EGP {price.toLocaleString()}
                </span>
              )}
            </div>

            <div className="mt-5 flex items-center gap-2 text-sm">
              <span
                className={`size-2.5 rounded-full ${
                  quantity > 0 ? "bg-emerald-500" : "bg-rose-500"
                }`}
              />
              <span
                className={`font-semibold ${
                  quantity > 0 ? "text-emerald-800" : "text-rose-700"
                }`}
              >
                {quantity > 0 ? "In stock" : "Out of stock"}
              </span>
              {quantity > 0 ? (
                <span className="text-slate-500">· {quantity} available</span>
              ) : null}
            </div>

            {description && (
              <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-600">
                {product.description}
              </p>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold text-slate-700">
                Quantity
              </span>
              <div className="flex h-11 items-center overflow-hidden rounded-md border border-slate-200 bg-white">
                <span className="grid size-10 place-items-center text-slate-400">
                  <IconMinus size={16} />
                </span>
                <span className="grid h-full w-10 place-items-center border-x border-slate-200 text-sm font-semibold text-slate-800">
                  1
                </span>
                <span className="grid size-10 place-items-center text-slate-600">
                  <IconPlus size={16} />
                </span>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={handleAddToCart}
                className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-md bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-800"
              >
                <IconShoppingCart size={19} />
                Add to cart
              </button>
              <button
                type="button"
                className="inline-flex min-h-12 items-center cursor-pointer justify-center gap-2 rounded-md bg-amber-400 px-5 py-3 text-sm font-semibold text-emerald-950 transition-colors hover:bg-amber-300"
              >
                <IconBolt size={18} />
                Buy now
              </button>
            </div>

            <button
              onClick={handleAddToWishlist}
              type="button"
              className="mt-3 inline-flex cursor-pointer min-h-11 w-full items-center justify-center gap-2 rounded-md border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-rose-200 hover:bg-rose-50 hover:text-rose-700"
            >
              <IconHeart size={18} />
              Add to wishlist
            </button>

            <div className="mt-7 grid gap-4 border-t border-slate-100 pt-6 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-700">
                  <IconTruckDelivery size={20} />
                </span>
                <span>
                  <span className="block text-xs font-semibold text-slate-800">
                    Quick delivery
                  </span>
                  <span className="mt-0.5 block text-xs text-slate-500">
                    Delivered to your door
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-amber-50 text-amber-700">
                  <IconRefresh size={19} />
                </span>
                <span>
                  <span className="block text-xs font-semibold text-slate-800">
                    Easy returns
                  </span>
                  <span className="mt-0.5 block text-xs text-slate-500">
                    Hassle-free support
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-700">
                  <IconShieldCheck size={19} />
                </span>
                <span>
                  <span className="block text-xs font-semibold text-slate-800">
                    Secure checkout
                  </span>
                  <span className="mt-0.5 block text-xs text-slate-500">
                    Protected payment
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
