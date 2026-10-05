import { getAllCategories } from "@/features/categories/servies/getAllCategories";
import React from "react";

export default async function HomeCategories() {
  const categoriesResponse = await getAllCategories();
  return (
    <section className="bg-white px-4 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-2 sm:mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
            FreshCart collection
          </p>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Shop by category
          </h2>
          <div className="h-1 w-14 rounded-full bg-amber-400" />
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-6">
          {categoriesResponse.data.map((category) => (
            <div
              key={category._id}
              className="group cursor-pointer flex flex-col items-center rounded-2xl p-3 text-center transition duration-200 hover:-translate-y-1 sm:p-4"
            >
              <div className="aspect-square w-full overflow-hidden rounded-full border-4 border-emerald-50 bg-emerald-50 shadow-sm transition-colors group-hover:border-emerald-200 group-hover:shadow-md">
                <img
                  className="size-full object-cover transition duration-300 group-hover:scale-105"
                  src={category.image}
                  alt={category.name}
                />
              </div>
              <h3 className="mt-3 text-sm font-semibold text-slate-800 transition-colors group-hover:text-emerald-700 sm:text-base">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
