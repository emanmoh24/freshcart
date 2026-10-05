import Link from "next/link";
import { IconArrowRight, IconHeart } from "@tabler/icons-react";

export default function EmptyWishlistScreen() {
  return (
    <main className="flex-1 bg-slate-50/70 py-8 sm:py-10">
      <div className="container">
      
        <section
          aria-labelledby="empty-wishlist-title"
        >
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <div
              aria-hidden="true"
              className="relative mb-7 grid size-36 place-items-center rounded-full bg-rose-50 sm:size-44"
            >
              <span className="absolute inset-3 rounded-full border border-dashed border-rose-200" />
              <span className="grid size-20 place-items-center rounded-full bg-white text-rose-500 shadow-md shadow-rose-900/5 sm:size-24">
                <IconHeart
                  size={48}
                  stroke={1.5}
                  fill="currentColor"
                  className="opacity-90"
                />
              </span>
              <span className="absolute right-3 top-5 size-3 rounded-full bg-amber-400" />
              <span className="absolute bottom-5 left-4 size-2 rounded-full bg-emerald-400" />
            </div>

            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">
              A little inspiration
            </p>
            <h2
              id="empty-wishlist-title"
              className="text-2xl font-bold text-slate-900 sm:text-3xl"
            >
              Your wishlist is waiting
            </h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-500 sm:text-base">
              You haven&apos;t saved any products yet. Explore the shop and keep
              the things you love all in one place.
            </p>

            <Link
              href="/"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
            >
              Explore products
              <IconArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
