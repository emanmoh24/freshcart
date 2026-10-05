import { IconCategory } from "@tabler/icons-react";
import CategoryCard from "../components/CategoryCard";

export default async function CategoriesScreen() {
  return (
    <main>
      <section
        aria-labelledby="categories-title"
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
              Categories
            </span>
          </nav>

          <div className="flex items-center gap-3">
            <div className="grid size-11 shrink-0 place-items-center rounded-lg bg-white/20 shadow-sm shadow-emerald-950/15 sm:size-12">
              <IconCategory size={23} />
            </div>
            <div>
              <h1
                id="categories-title"
                className="text-2xl font-bold leading-tight sm:text-3xl"
              >
                All Categories
              </h1>
              <p className="mt-2 text-sm leading-snug text-white/90">
                Browse our wide range of product categories
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl my-10">
        <div className="mb-8 flex flex-col gap-2 sm:mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
            FreshCart collection
          </p>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Shop by category
          </h2>
          <div className="h-1 w-14 rounded-full bg-amber-400" />
        </div>
        <CategoryCard />
      </section>
    </main>
  );
}
