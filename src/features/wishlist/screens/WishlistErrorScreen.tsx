import Link from "next/link";
import {
  IconAlertTriangle,
  IconArrowLeft,
  IconHeart,
} from "@tabler/icons-react";

export default function WishlistErrorScreen() {
  return (
    <main className="flex flex-1 items-center bg-white py-10 sm:py-16">
      <div className="container grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <section className="mx-auto w-full max-w-xl lg:mx-0">
          <p className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-amber-700">
            <span className="size-2 rounded-full bg-amber-500" />
            Wishlist unavailable
          </p>
          <h1 className="max-w-lg text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
            We hit a snag loading your wishlist.
          </h1>
          <p className="mt-5 max-w-md text-base leading-7 text-slate-600">
            Your saved products aren&apos;t showing up right now. Visit the shop
            and try again in a moment.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/shop"
              className="inline-flex min-h-12 items-center gap-2 rounded-md bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
            >
              <IconArrowLeft size={18} aria-hidden="true" />
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
          <div className="relative grid size-36 place-items-center rounded-full bg-white text-rose-600 shadow-xl shadow-black/20 sm:size-44">
            <IconHeart size={72} stroke={1.4} className="sm:hidden" />
            <IconHeart
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
