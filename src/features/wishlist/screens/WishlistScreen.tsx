"use client";
import Link from "next/link";
import { IconHeart } from "@tabler/icons-react";
import WishlistItem from "../components/WishlistItem";
import { AppState } from "@/store/store";
import { useSelector } from "react-redux";
import EmptyWishlistScreen from "./EmptyWishlistScreen";
import WishlistErrorScreen from "./WishlistErrorScreen";

export default function WishlistScreen() {
  const wishlistResponse = useSelector(
    (state: AppState) => state.wishlistReducer,
  );

  if (wishlistResponse.status === "fail") {
    return (
      <>
        <WishlistErrorScreen/>
      </>
    );
  }

  if (wishlistResponse.status === "success") {
    return (
      <main className="flex-1 bg-slate-50/70 py-8 sm:py-10">
        <div className="container">
          <header className="mb-8">
            <nav
              aria-label="Breadcrumb"
              className="mb-5 flex items-center gap-2 text-sm text-slate-500"
            >
              <Link href="/" className="transition-colors hover:text-rose-700">
                Home
              </Link>
              <span aria-hidden="true" className="text-slate-300">
                /
              </span>
              <span className="font-medium text-slate-800">Wishlist</span>
            </nav>

            <div className="flex items-center gap-3">
              <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-rose-600 text-white shadow-sm shadow-rose-200 sm:size-12">
                <IconHeart size={23} fill="currentColor" aria-hidden="true" />
              </span>
              <div>
                <h1 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
                  My Wishlist
                </h1>
                <p className="mt-2 text-sm text-slate-500">
                  {wishlistResponse.count}{" "}
                  {wishlistResponse.count === 1 ? "item" : "items"} saved
                </p>
              </div>
            </div>
          </header>

          <section
            aria-label="Wishlist products"
            className="overflow-hidden rounded-xl border border-emerald-100 bg-white shadow-sm"
          >
            <div className="overflow-x-auto">
              {wishlistResponse.data.length > 0 ? (
                <table className="w-full min-w-190 border-collapse text-left">
                  <thead className="bg-slate-50">
                    <tr className="border-b border-slate-100">
                      <th
                        scope="col"
                        className="px-5 py-4 text-sm font-semibold text-slate-600"
                      >
                        Product
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-4 text-sm font-semibold text-slate-600"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-4 text-sm font-semibold text-slate-600"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-4 text-right text-sm font-semibold text-slate-600"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {wishlistResponse.data?.map((item) => (
                      <WishlistItem wishlistData={item} key={item._id} />
                    ))}
                  </tbody>
                </table>
              ) : (
                <EmptyWishlistScreen />
              )}
            </div>
          </section>
        </div>
      </main>
    );
  }
}
