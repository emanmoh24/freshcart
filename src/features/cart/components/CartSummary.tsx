import {
  IconArrowRight,
  IconCheck,
  IconLock,
  IconTruckDelivery,
} from "@tabler/icons-react";
import React from "react";
import { CartInitialValues } from "../slices/cart.slice";
import Link from "next/link";

export default function CartSummary({ cart }: { cart: CartInitialValues }) {
  const { data, numOfCartItems } = cart;
  const { products, totalCartPrice } = data;
  const cartTotal = totalCartPrice ?? 0;
  const freeShippingThreshold = 500;
  const hasFreeShipping = cartTotal >= freeShippingThreshold;
  const amountToFreeShipping = freeShippingThreshold - cartTotal;

  return (
    <>
      <div className="rounded-lg border border-emerald-100 bg-white p-5 shadow-sm sm:p-6">
        <h2 className="text-lg font-bold text-slate-900">Order summary</h2>
        <div
          className={`mt-4 rounded-md border p-4 shadow-sm ${
            hasFreeShipping
              ? "border-emerald-200 bg-emerald-50"
              : "border-amber-200 bg-amber-50"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-md bg-white shadow-sm">
              <IconTruckDelivery
                size={21}
                className={
                  hasFreeShipping ? "text-amber-600" : "text-emerald-700"
                }
                aria-hidden="true"
              />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-emerald-950">
                {hasFreeShipping
                  ? "Free shipping unlocked"
                  : "You're close to free shipping"}
              </p>
              <p className="mt-0.5 text-xs leading-5 text-emerald-800">
                {hasFreeShipping
                  ? "You qualify for free delivery"
                  : `Add ${amountToFreeShipping.toLocaleString()} EGP to unlock free shipping`}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 space-y-4 border-b border-slate-100 pb-5 text-sm">
          <div className="flex items-center justify-between gap-4 text-slate-600">
            <span>Subtotal</span>
            <span className="font-semibold text-slate-900">
              {cartTotal} EGP
            </span>
          </div>
          <div className="flex items-center justify-between gap-4 text-slate-600">
            <span>Delivery</span>
            {hasFreeShipping ? (
              <span className="font-semibold text-emerald-700">Free</span>
            ) : (
              <span className="font-semibold text-emerald-700">50</span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 py-5">
          <span className="font-semibold text-slate-800">Total</span>
          <span className="text-2xl font-bold text-slate-900">
            {cartTotal + (hasFreeShipping ? 0 : 50)} EGP
          </span>
        </div>

        <Link
        href={"/checkout"}
          className="inline-flex cursor-pointer min-h-12 w-full items-center justify-center gap-2 rounded-md bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-800"
        >
          Proceed to checkout
          <IconArrowRight size={18} />
        </Link>

        <div className="mt-5 space-y-3 border-t border-slate-100 pt-5 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <IconTruckDelivery size={17} className="text-emerald-700" />
            <span>Fast delivery to your door</span>
          </div>
          <div className="flex items-center gap-2">
            <IconLock size={16} className="text-amber-600" />
            <span>Secure checkout</span>
          </div>
          <div className="flex items-center gap-2">
            <IconCheck size={17} className="text-emerald-700" />
            <span>Easy returns and support</span>
          </div>
        </div>
      </div>
    </>
  );
}
