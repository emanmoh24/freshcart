import { IconArrowRight, IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";

export default function EmptyCart() {
  return (
    <section
      aria-labelledby="empty-cart-title"
      className="rounded-lg border border-emerald-100 bg-white p-6 shadow-sm sm:p-10"
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <div
          aria-hidden="true"
          className="relative mb-7 grid size-36 place-items-center rounded-full bg-emerald-50 sm:size-44"
        >
          <span className="absolute inset-3 rounded-full border border-dashed border-emerald-200" />
          <span className="grid size-20 place-items-center rounded-full bg-white text-emerald-700 shadow-md shadow-emerald-900/5 sm:size-24">
            <IconShoppingCart size={48} stroke={1.5} />
          </span>
          <span className="absolute right-3 top-5 size-3 rounded-full bg-amber-400" />
          <span className="absolute bottom-5 left-4 size-2 rounded-full bg-emerald-400" />
        </div>

        <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">
          Your FreshCart
        </p>
        <h2
          id="empty-cart-title"
          className="text-2xl font-bold text-slate-900 sm:text-3xl"
        >
          Your cart is waiting
        </h2>
        <p className="mt-3 max-w-md text-sm leading-6 text-slate-500 sm:text-base">
          Looks like you haven&apos;t added anything yet. Explore our fresh
          picks and find something you love.
        </p>

        <Link
          href="/"
          className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
        >
          Start shopping
          <IconArrowRight size={18} aria-hidden="true" />
        </Link>

        <p className="mt-4 text-sm text-slate-500">
          Looking for something specific?{" "}
          <Link
            href="/categories"
            className="font-semibold text-emerald-700 transition-colors hover:text-emerald-800"
          >
            Browse categories
          </Link>
        </p>
      </div>
    </section>
  );
}
