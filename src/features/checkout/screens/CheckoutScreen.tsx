"use client";

import Image from "next/image";
import {
  IconArrowLeft,
  IconCheck,
  IconLeaf,
  IconLock,
  IconPackage,
  IconReceipt,
  IconTruckDelivery,
} from "@tabler/icons-react";
import Link from "next/link";
import CheckoutForm from "../components/CheckoutForm";
import PaymentMethods from "../components/PaymentMethods";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  shippingAddressSchema,
  shippingAddressValues,
} from "../schema/checkout.schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { createCashOrder, createOnlineOrder } from "../server/checkout.action";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "@/store/store";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { cartActions } from "@/features/cart/slices/cart.slice";

export default function CheckoutScreen() {
  const { cartId, numOfCartItems, data } = useSelector(
    (state: AppState) => state.cartReducer,
  );
  const router = useRouter();
  const { clearCart } = cartActions;
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      details: "",
      phone: "",
      city: "",
    },
    resolver: zodResolver(shippingAddressSchema),
  });

  const handleRegister: SubmitHandler<shippingAddressValues> = async (
    values,
  ) => {
    try {
      if (!cartId) return;

      if (paymentMethod === "cash") {
        const response = await createCashOrder({
          cartId,
          shippingAddress: values,
        });

        if (response.status === "success") {
          reset();
          toast.success("Order created successfully");
          router.push("/orders");
          dispatch(clearCart());
        }
      } else {
        const response = await createOnlineOrder({
          cartId,
          shippingAddress: values,
          url: location.origin,
        });

        if (response.status === "success") {
          toast.loading("Redirecting to payment gateway");
          location.href = response.session.url;
          dispatch(clearCart());
        }
      }
    } catch (error) {}
  };

  const [paymentMethod, setPaymentMethod] = useState<"cash" | "card">("cash");

  return (
    <main className="flex-1 bg-slate-50/70 py-8 sm:py-10">
      <div className="container">
        <header className="mb-8">
          <nav
            aria-label="Breadcrumb"
            className="mb-5 flex items-center gap-2 text-sm text-slate-500"
          >
            <Link href="/" className="transition-colors hover:text-emerald-700">
              Home
            </Link>
            <span aria-hidden="true" className="text-slate-300">
              /
            </span>
            <Link
              href="/cart"
              className="transition-colors hover:text-emerald-700"
            >
              Cart
            </Link>
            <span aria-hidden="true" className="text-slate-300">
              /
            </span>
            <span className="font-medium text-slate-800">Checkout</span>
          </nav>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="flex items-center gap-3 text-2xl font-bold text-slate-900 sm:text-3xl">
                <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-emerald-700 text-white shadow-sm shadow-emerald-200 sm:size-12">
                  <IconReceipt size={23} />
                </span>
                Complete Your Order
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                Review your items and complete your purchase
              </p>
            </div>

            <Link
              href="/cart"
              className="inline-flex min-h-10 w-fit items-center gap-2 rounded-md border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 transition-colors hover:bg-emerald-50"
            >
              <IconArrowLeft size={17} />
              Back to Cart
            </Link>
          </div>
        </header>

        <form
          onSubmit={handleSubmit(handleRegister)}
          className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-8"
        >
          <div className="min-w-0 space-y-6">
            <CheckoutForm register={register} errors={errors} />
            <PaymentMethods
              selectedMethod={paymentMethod}
              changeMethod={setPaymentMethod}
            />
          </div>

          <aside className="rounded-lg border border-emerald-100 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">
                Order summary
              </h2>
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800">
                {numOfCartItems} {numOfCartItems > 1 ? "items" : "item"}
              </span>
            </div>

            <div className="mt-4 space-y-3">
              {data.products.map((product) => (
                <div
                  key={product._id}
                  className="flex items-center gap-3 rounded-lg border border-emerald-100 bg-white p-3 shadow-sm"
                >
                  <span className="size-14 shrink-0 overflow-hidden rounded-md">
                    <Image
                      src={product.product.imageCover}
                      alt={product.product.title}
                      width={56}
                      height={56}
                      unoptimized
                      className="size-full object-cover"
                    />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-slate-800">
                      {product.product.title}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      {product.count} x {product.price} EGP
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-slate-800">
                    {product.count * product.price}
                  </span>
                </div>
              ))}

              <div className="mt-5 space-y-4 border-b border-slate-100 pb-5 text-sm">
                <div className="flex items-center justify-between gap-4 text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-900">
                    {data.totalCartPrice} EGP
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4 text-slate-600">
                  <span>Delivery</span>
                  {data.totalCartPrice >= 500 ? (
                    <span className="font-semibold text-emerald-700">Free</span>
                  ) : (
                    <span className="font-semibold text-emerald-700">50</span>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 py-5">
                <span className="font-semibold text-slate-800">Total</span>
                <span className="text-2xl font-bold text-slate-900">
                  {data.totalCartPrice + (data.totalCartPrice >= 500? 0 : 50)} EGP
                </span>
              </div>

              <button
                type="submit"
                className="inline-flex cursor-pointer min-h-12 w-full items-center justify-center gap-2 rounded-md bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-800"
              >
                <IconCheck size={15} aria-hidden="true" />
                Place Order
              </button>

              <div className="mt-5 space-y-3 border-t border-slate-100 pt-5 text-xs text-slate-500">
                <span className="flex items-center gap-2">
                  <IconLock size={16} className="text-amber-600" />
                  Secure checkout
                </span>
                <span className="flex items-center gap-2">
                  <IconTruckDelivery size={17} className="text-emerald-700" />
                  Fast delivery to your door
                </span>
                <span className="flex items-center gap-2">
                  <IconCheck size={17} className="text-emerald-700" />
                  Easy returns and support
                </span>
              </div>
            </div>
          </aside>
        </form>
      </div>
    </main>
  );
}
