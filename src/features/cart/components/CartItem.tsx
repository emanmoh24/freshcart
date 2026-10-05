"use client";

import Image from "next/image";
import { IconMinus, IconPlus, IconTrash } from "@tabler/icons-react";
import Link from "next/link";
import { CartEntity } from "../types/cart.types";
import { removeFromCart, updateProductQuantity } from "../server/cart.actions";
import { toast } from "sonner";
import { cartActions } from "../slices/cart.slice";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

export default function CartItem({ productInfo }: { productInfo: CartEntity }) {
  const { _id, count, price, product } = productInfo;
  const { imageCover, title, category, id, quantity } = product;

  const { setCartInfo } = cartActions;
  const dispatch = useDispatch();

  async function handleRemoveFromCart() {
    Swal.fire({
      title: "Remove this item?",
      html: '<p class="text-sm leading-6 text-slate-600">This product will be removed from your shopping cart.</p>',
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
        const response = await removeFromCart(id);

        if (response.status === "fail") {
          toast.error(response.message);
        }

        if (response.status === "success") {
          toast.success(response.message);
          dispatch(setCartInfo(response));
        }
      }
      Swal.fire({
        title: "Deleted!",
        html: '<p class="text-sm leading-6 text-slate-600">Product has been removed from your cart.</p>',
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

  async function handleUpdateProduct(newCount: number) {
    if (newCount < 1) return;
    const response = await updateProductQuantity(id, newCount);
    if(response.status === "success") {
      dispatch(setCartInfo(response))
    }
  }

  return (
    <article className="flex gap-4 rounded-lg border border-emerald-100 bg-white p-4 shadow-sm sm:gap-6 sm:p-5">
      <Link
        href={`/products/${_id}`}
        aria-label={`View ${title}`}
        className="group relative size-28 shrink-0 overflow-hidden rounded-lg border border-slate-100 bg-slate-50 p-3 sm:size-32"
      >
        <Image
          src={imageCover}
          alt={title}
          width={128}
          height={128}
          unoptimized
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </Link>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="mb-3">
          <Link href={`/products/${_id}`} className="group/title">
            <h2 className="text-base font-semibold leading-relaxed text-slate-900 transition-colors group-hover/title:text-emerald-700 sm:text-lg">
              {title}
            </h2>
          </Link>
          <span className="mt-2 inline-block rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-800">
            {category.name}{" "}
          </span>
        </div>

        <p className="mb-4 text-lg font-bold text-emerald-700">{price}{" "} EGP</p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
          <div
            aria-label="Quantity: 1"
            className="flex items-center rounded-lg border border-slate-200 bg-slate-50 p-1"
          >
            <button
              onClick={() => {
                handleUpdateProduct(count - 1);
              }}
              disabled={count <= 1 }
              type="button"
              aria-label="Decrease quantity"
              className="grid size-8 cursor-pointer place-items-center rounded-md bg-white text-slate-500 shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <IconMinus size={14} aria-hidden="true" />
            </button>
            <span className="w-12 text-center font-bold text-slate-900">{count}</span>
            <button
              onClick={() => {
                handleUpdateProduct(count + 1);
              }}
              disabled = {count >= quantity}
              type="button"
              aria-label="Increase quantity"
              className="grid size-8 cursor-pointer place-items-center rounded-md bg-emerald-700 text-white shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <IconPlus size={14} aria-hidden="true" />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="mb-0.5 text-xs text-slate-400">Total</p>
              <p className="text-xl font-bold text-slate-900">
                {price * count}
                <span className="text-sm font-medium text-slate-400">{" "}EGP</span>
              </p>
            </div>
            <button
              onClick={handleRemoveFromCart}
              type="button"
              title="Remove item"
              aria-label="Remove item"
              className="grid cursor-pointer size-10 place-items-center rounded-lg border border-rose-200 bg-rose-50 text-rose-500"
            >
              <IconTrash size={17} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
