"use client";

import React, { useState } from "react";
import { IconCheck, IconPackage, IconStarFilled } from "@tabler/icons-react";
import { ProductDetails } from "../types/productDetails.types";

const keyFeatures = [
  "Premium Quality Product",
  "100% Authentic Guarantee",
  "Fast & Secure Packaging",
  "Quality Tested",
];

export default function Reviews({ product }: { product: ProductDetails }) {
  const [activeTab, setActiveTab] = useState<"details" | "reviews">("details");
  const { category, brand, sold, description, reviews, ratingsAverage } =
    product;
  const ratingRows = [5, 4, 3, 2, 1].map((stars) => {
    const count = reviews.filter((review) => review.rating === stars).length;
    const percent = reviews.length
      ? Math.round((count / reviews.length) * 100)
      : 0;

    return { stars, percent };
  });

  const tabs = [
    { key: "details", label: "Product Details", icon: IconPackage },
    {
      key: "reviews",
      label: `Reviews (${reviews.length})`,
      icon: IconStarFilled,
    },
  ] as const;

  return (
    <section className="bg-slate-50 pb-10 pt-2">
      <div className="container">
        <div className="flex flex-wrap items-center gap-8 border-b border-slate-200 bg-transparent">
          {tabs.map(({ key, label, icon: Icon }) => {
            const isActive = activeTab === key;

            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveTab(key)}
                className={`relative flex items-center gap-2 pb-3 pt-2.5 text-sm font-medium transition-colors sm:text-base ${
                  isActive
                    ? "text-emerald-700"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span
                  className={`inline-flex items-center justify-center ${
                    isActive ? "text-emerald-700" : "text-slate-500"
                  }`}
                >
                  <Icon size={16} />
                </span>
                <span>{label}</span>
                {isActive && (
                  <span className="absolute inset-x-0 -bottom-px h-[3px] rounded-t-md bg-emerald-600" />
                )}
              </button>
            );
          })}
        </div>

        {activeTab === "details" ? (
          <div className="pt-8">
            <h2 className="text-lg font-semibold text-slate-800">
              About this Product
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              {description}
            </p>

            <div className="mt-6 grid gap-6 border-t border-slate-200 pt-6 lg:grid-cols-2 lg:gap-10">
              <div>
                <h3 className="text-base font-semibold text-slate-800">
                  Product Information
                </h3>

                <div className="mt-4 space-y-3 text-sm text-slate-600">
                  <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] items-center gap-3 sm:gap-8">
                    <span className="text-slate-500">Category</span>
                    <span className="text-left font-medium text-slate-800">
                      {category.name}
                    </span>
                    <span className="text-slate-500">Brand</span>
                    <span className="text-left font-medium text-slate-800">
                      {brand.name}
                    </span>
                    <span className="text-slate-500">Sold Items</span>
                    <span className="text-left font-medium text-slate-800">
                      {sold}+ sold
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-slate-800">
                  Key Features
                </h3>

                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  {keyFeatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        <IconCheck size={14} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="pt-8">
            <div className="grid gap-6 sm:grid-cols-[220px_minmax(0,1fr)] sm:items-center">
              <div className="flex flex-col items-start justify-center">
                <div className="flex items-end gap-2 leading-none text-slate-900">
                  <span className="text-4xl font-bold">{ratingsAverage}</span>
                </div>

                <div className="mt-3 flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }, (_, index) => (
                    <IconStarFilled key={index} size={22} />
                  ))}
                </div>

                <p className="mt-3 text-sm text-slate-500">
                  Based on {reviews.length} reviews
                </p>
              </div>

              <div className="w-full space-y-3">
                {ratingRows.map(({ stars, percent }) => (
                  <div
                    key={stars}
                    className="grid grid-cols-[26px_54px_minmax(0,1fr)_34px] items-center gap-2 text-sm text-slate-500"
                  >
                    <span className="text-right font-medium text-slate-600">
                      {stars}
                    </span>
                    <span className="text-left font-medium text-slate-600">
                      {stars === 1 ? "star" : "stars"}
                    </span>
                    <div className="h-3 overflow-hidden rounded-md bg-slate-200">
                      <div
                        className="h-full rounded-md bg-[#f4c50a]"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                    <span className="text-right font-medium text-slate-500">
                      {percent}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
