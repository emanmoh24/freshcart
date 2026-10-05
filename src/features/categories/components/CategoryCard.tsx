import React from "react";
import { getAllCategories } from "../servies/getAllCategories";

export default async function CategoryCard() {
  const response = await getAllCategories();

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5">
        {response.data.map((category) => (
          <div className="group cursor-pointer overflow-hidden rounded-lg border border-emerald-100 bg-white p-3 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md sm:p-4">
            <div className="aspect-square overflow-hidden rounded-md bg-emerald-50">
              <img
                className="size-full object-cover transition duration-300 group-hover:scale-105"
                src={category.image}
                alt={category.name}
              />
            </div>
            <h3 className="mt-3 text-center text-sm font-semibold text-slate-800 transition-colors group-hover:text-emerald-700 sm:text-base">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
}
