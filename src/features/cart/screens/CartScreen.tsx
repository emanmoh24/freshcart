"use client";

import {
  IconAlertTriangle,
  IconArrowLeft,
  IconArrowRight,
  IconCheck,
  IconLock,
  IconShoppingCart,
  IconTrash,
  IconTruckDelivery,
} from "@tabler/icons-react";
import Link from "next/link";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";
import { AppState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { cartActions, cartReducer } from "../slices/cart.slice";
import { clearCart } from "../server/cart.actions";
import { toast } from "sonner";
import EmptyCart from "../components/EmptyCart";

export default function CartScreen() {
  const cartResponse = useSelector((state: AppState) => state.cartReducer);
  const { setCartInfo } = cartActions;
  const dispatch = useDispatch();

  async function handleClearCart() {
    const response = await clearCart();
    if (response.status === "fail") {
      toast.error(response.message);
    }

    if (response.status === "success") {
      toast.success(response.message);
      dispatch(setCartInfo(response));
    }
  }

  if (cartResponse.status === "fail") {
    return (
      <main className="flex flex-1 items-center bg-white py-10 sm:py-16">
        <div className="container grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <section className="mx-auto w-full max-w-xl lg:mx-0">
            <p className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-amber-700">
              <span className="size-2 rounded-full bg-amber-500" />
              Cart unavailable
            </p>
            <h1 className="max-w-lg text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
              We hit a snag loading your cart.
            </h1>
            <p className="mt-5 max-w-md text-base leading-7 text-slate-600">
              Your items aren't showing up right now. Head back to the shop and
              try again in a moment.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/shop"
                className="inline-flex min-h-12 items-center gap-2 rounded-md bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
              >
                <IconArrowLeft size={18} />
                Continue shopping
              </Link>
              <Link
                href="/"
                className="inline-flex min-h-12 items-center px-2 py-3 text-sm font-semibold text-slate-700 transition-colors hover:text-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
              >
                Back to home
              </Link>
            </div>
          </section>

          <div
            aria-hidden="true"
            className="relative mx-auto grid aspect-square w-full max-w-md place-items-center overflow-hidden rounded-md bg-emerald-950"
          >
            <div className="absolute size-[78%] rounded-full border border-emerald-700/70" />
            <div className="absolute size-[58%] rounded-full border border-dashed border-emerald-600/70" />
            <div className="relative grid size-36 place-items-center rounded-full bg-white text-emerald-800 shadow-xl shadow-black/20 sm:size-44">
              <IconShoppingCart size={72} stroke={1.4} className="sm:hidden" />
              <IconShoppingCart
                size={88}
                stroke={1.4}
                className="hidden sm:block"
              />
              <span className="absolute -right-1 -top-1 grid size-12 place-items-center rounded-full border-4 border-emerald-950 bg-amber-400 text-emerald-950">
                <IconAlertTriangle size={23} stroke={2} />
              </span>
            </div>
            <span className="absolute bottom-[12%] left-[12%] size-3 rounded-full bg-amber-400" />
            <span className="absolute right-[14%] top-[18%] size-2 rounded-full bg-emerald-300" />
            <p className="absolute bottom-6 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-100/75">
              FreshCart support
            </p>
          </div>
        </div>
      </main>
    );
  }

  if (cartResponse.status === "success") {
    return (
      <main className="flex-1 bg-slate-50/70 py-8 sm:py-10">
        <div className="container">
          <header className="mb-8">
            <nav
              aria-label="Breadcrumb"
              className="mb-5 flex items-center gap-2 text-sm text-slate-500"
            >
              <Link
                href="/"
                className="transition-colors hover:text-emerald-700"
              >
                Home
              </Link>
              <span aria-hidden="true" className="text-slate-300">
                /
              </span>
              <span className="font-medium text-slate-800">Shopping Cart</span>
            </nav>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="flex items-center gap-3 text-2xl font-bold text-slate-900 sm:text-3xl">
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-emerald-700 text-white shadow-sm shadow-emerald-200 sm:size-12">
                    <IconShoppingCart size={23} />
                  </span>
                  Shopping Cart
                </h1>
                <p className="mt-2 text-sm text-slate-500">
                  You have{" "}
                  <span className="font-semibold text-emerald-700">
                    {cartResponse.numOfCartItems}{" "}
                    {cartResponse.numOfCartItems === 1 ? "item" : "items"}
                  </span>{" "}
                  in your cart
                </p>
              </div>

              <Link
                href="/shop"
                className="inline-flex min-h-10 w-fit items-center gap-2 rounded-md border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 transition-colors hover:bg-emerald-50"
              >
                <IconArrowLeft size={17} />
                Continue shopping
              </Link>
            </div>
          </header>

          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-8">
            {cartResponse.data.products.length === 0 ? (
              <EmptyCart />
            ) : (
              <div className="space-y-5">
                {cartResponse.data.products.map((product) => (
                  <CartItem key={product._id} productInfo={product} />
                ))}
              </div>
            )}
            <CartSummary cart={cartResponse} />
          </div>

          <section aria-label="Cart items" className="space-y-4">
            <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-800"
              >
                <IconArrowLeft size={17} />
                Continue Shopping
              </Link>
              <button
                onClick={handleClearCart}
                type="button"
                className="group cursor-pointer inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-rose-600"
              >
                <IconTrash
                  size={15}
                  className="transition-transform group-hover:scale-110"
                />
                <span>Clear all items</span>
              </button>
            </div>
          </section>
        </div>
      </main>
    );
  }
}
