import ProductCard from "@/features/products/components/ProductCard";
import { getAllProducts } from "@/features/products/services/getAllProducts";
import React from "react";

export default async function FeaturedProducts() {
  const featuredProducts = await getAllProducts();

  return (
    <section id="featuredProducts">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-2 sm:mb-10">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Featured Products
          </h2>
          <div className="h-1 w-14 rounded-full bg-amber-400" />
        </div>
        <div className="grid grid-cols-5 gap-5 mb-10">
          {featuredProducts.data.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>
    </section>
  );
}
