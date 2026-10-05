import {
  IconBuilding,
  IconCheck,
  IconHome2,
  IconInfoCircleFilled,
  IconMapPin,
  IconPhone,
  IconPlus,
} from "@tabler/icons-react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { shippingAddressValues } from "../schema/checkout.schema";

type ShippingAddressForm = {
  register: UseFormRegister<shippingAddressValues>;
  errors: FieldErrors<shippingAddressValues>;
};

export default function CheckoutForm({
  register,
  errors,
}: ShippingAddressForm) {
  return (
    <section className="w-full overflow-hidden rounded-lg border border-emerald-100 bg-white shadow-sm">
      <header className="flex items-center gap-3 border-b border-slate-100 px-5 py-4">
        <span className="grid size-10 shrink-0 place-items-center rounded-md bg-emerald-50 text-emerald-700">
          <IconHome2 size={19} aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-lg font-bold text-slate-900">Shipping Address</h2>
          <p className="mt-0.5 text-xs text-slate-500">
            Where should we deliver your order?
          </p>
        </div>
      </header>

      <div className="space-y-5 p-5 sm:p-6">
        <div className="space-y-4">
          <div>
            <label
              htmlFor="checkout-city"
              className="mb-1.5 block text-sm font-medium text-slate-700"
            >
              City <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <IconBuilding
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                aria-hidden="true"
              />
              <input
                id="checkout-city"
                type="text"
                {...register("city")}
                placeholder="e.g. Cairo, Alexandria, Giza"
                className="h-11 w-full rounded-lg border border-slate-200 bg-white pl-10 pr-3 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>
            {errors.city && (
              <p className="mt-1.5 text-xs text-rose-600">
                {errors.city.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="checkout-street"
              className="mb-1.5 block text-sm font-medium text-slate-700"
            >
              Street Address <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <IconMapPin
                size={16}
                className="absolute left-3 top-3 text-slate-500"
                aria-hidden="true"
              />
              <textarea
                id="checkout-street"
                rows={2}
                {...register("details")}
                placeholder="Street name, building number, floor, apartment..."
                className="min-h-20 w-full resize-y rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>
            {errors.details && (
              <p className="mt-1.5 text-xs text-rose-600">
                {errors.details.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="checkout-phone"
              className="mb-1.5 block text-sm font-medium text-slate-700"
            >
              Phone Number <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <IconPhone
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                aria-hidden="true"
              />
              <input
                id="checkout-phone"
                type="tel"
                {...register("phone")}
                placeholder="01xxxxxxxxx"
                className="h-11 w-full rounded-lg border border-slate-200 bg-white pl-10 pr-32 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400">
                Egyptian numbers only
              </span>
            </div>
            {errors.phone && (
              <p className="mt-1.5 text-xs text-rose-600">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex items-start gap-2.5 rounded-lg border border-emerald-100 bg-emerald-50/70 p-3">
          <IconInfoCircleFilled
            size={17}
            className="mt-0.5 shrink-0 text-blue-500"
            aria-hidden="true"
          />
          <div>
            <p className="text-sm font-medium text-blue-700">
              Delivery Information
            </p>
            <p className="mt-1 text-xs leading-5 text-blue-600">
              Please ensure your address is accurate for smooth delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
