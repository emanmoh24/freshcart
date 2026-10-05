"use client";

import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { Product } from "../types/products.types";
import ProductCard from "./ProductCard";

export default function FeaturedCarousel({
  products,
}: {
  products: Product[];
}) {
  return (
    <section className="bg-white py-8 sm:py-10">
      <div className="container">
        <div className="mb-6 flex items-center justify-between gap-4 sm:mb-8">
          <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 sm:text-3xl">
            <span className="h-8 w-1.5 rounded-full bg-emerald-600" />
            <span>
              You May Also <span className="text-emerald-600">Like</span>
            </span>
          </h2>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              aria-label="Previous related products"
              className="featured-products-prev grid size-10 place-items-center rounded-full bg-slate-100 text-slate-700 transition-colors hover:bg-emerald-100 hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <IconChevronLeft size={20} />
            </button>
            <button
              type="button"
              aria-label="Next related products"
              className="featured-products-next grid size-10 place-items-center rounded-full bg-slate-100 text-slate-700 transition-colors hover:bg-emerald-100 hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <IconChevronRight size={20} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".featured-products-prev",
            nextEl: ".featured-products-next",
          }}
          spaceBetween={16}
          slidesPerView={1.3}
          breakpoints={{
            480: { slidesPerView: 2 },
            640: { slidesPerView: 2.5 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          className="!pb-2"
        >
          {products.map((product) => (
            <SwiperSlide key={product._id} className="!h-auto">
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
