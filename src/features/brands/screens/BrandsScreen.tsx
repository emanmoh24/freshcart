import {
  IconBuildingStore,
  IconArrowRight,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { getAllBrands } from "../services/getAllBrands";

export default async function BrandsScreen() {
  const brandResponse = await getAllBrands();

  return (
    <main>
      <section
        aria-labelledby="brands-title"
        className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-500 py-8 text-white sm:py-10"
      >
        <div className="container">
          <nav
            aria-label="Breadcrumb"
            className="mb-5 flex items-center gap-2 text-sm text-white/75"
          >
            <span>Home</span>
            <span aria-hidden="true" className="text-white/50">
              /
            </span>
            <span aria-current="page" className="font-medium text-white">
              Brands
            </span>
          </nav>

          <div className="flex items-center gap-3">
            <div className="grid size-11 shrink-0 place-items-center rounded-lg bg-white/20 shadow-sm shadow-emerald-950/15 sm:size-12">
              <IconBuildingStore size={23} />
            </div>
            <div>
              <h1
                id="brands-title"
                className="text-2xl font-bold leading-tight sm:text-3xl"
              >
                Our Brands
              </h1>
              <p className="mt-2 text-sm leading-snug text-white/90">
                Discover trusted brands for your everyday essentials
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-10 sm:py-12">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
            Shop with confidence
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            Featured brands
          </h2>
          <div className="mt-3 h-1 w-14 rounded-full bg-amber-400" />
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6">
          {brandResponse.data.map((brand) => (
            <div
              className="group cursor-pointer rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 sm:p-5"
            >
              <div className="mb-3 flex aspect-square items-center justify-center overflow-hidden rounded-xl  p-4">
                <Image
                  alt={brand.name}
                  className="size-full object-contain transition-transform duration-500 group-hover:scale-110"
                  src={brand.image}
                  width={240}
                  height={240}
                  unoptimized
                />
              </div>
              <h3 className="truncate text-center text-sm font-semibold text-slate-900 transition-colors group-hover:text-emerald-700">
                {brand.name}
              </h3>
              <div className="mt-1.5 flex justify-center opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                <span className="inline-flex items-center gap-1 text-xs text-emerald-700">
                  View Products
                  <IconArrowRight size={12} aria-hidden="true" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
