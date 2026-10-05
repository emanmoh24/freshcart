"use client";

import Link from "next/link";
import {
  IconBabyCarriage,
  IconChevronDown,
  IconDotsVertical,
  IconHeart,
  IconId,
  IconLeaf,
  IconLogout,
  IconMail,
  IconMenu2,
  IconPhone,
  IconReportMedical,
  IconSearch,
  IconShirtSport,
  IconShoppingCart,
  IconUser,
  IconUserPlus,
} from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { authActions, authReducer } from "@/features/auth/slices/auth.slice";
import { AppState } from "@/store/store";
import { useRouter } from "next/navigation";
import { deleteToken } from "@/features/auth/server/auth.actions";

const categories = [
  {
    label: "Men's Fashion",
    icon: IconUser,
  },
  {
    // href: "/category/6439d58a0049ad0b52b9003f",
    label: "Women's Fashion",
    icon: IconShirtSport,
  },
  {
    // href: "/category/6439d40367d9aa4ca97064cc",
    label: "Baby & Toys",
    icon: IconBabyCarriage,
  },
  {
    // href: "/category/6439d30b67d9aa4ca97064b1",
    label: "Beauty & Health",
    icon: IconReportMedical,
  },
];

const menuLinks = [
  { href: "/", label: "Home" },
  { href: "/", label: "Recently Added" },
  { href: "/", label: "Featured Products" },
  { href: "/", label: "Offers" },
  { href: "/brands", label: "Brands" },
];

export default function Navbar() {
  const { isAuthenticated, userInfo } = useSelector(
    (state: AppState) => state.authReducer,
  );

  const {numOfCartItems} = useSelector((state: AppState) => state.cartReducer)
  const { logout } = authActions;
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <header className="border-b border-emerald-100 bg-white">
      <div className="container mx-auto px-4">

        <nav className="flex items-center justify-between gap-5 py-4">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2 text-2xl font-bold text-emerald-600"
          >
            <IconLeaf size={30} stroke={1.8} className="text-amber-500" />
            <span>FreshCart</span>
          </Link>

          <div className="relative hidden max-w-xl flex-1 lg:block">
            <input
              type="search"
              aria-label="Search products"
              placeholder="Search for products..."
              className="w-full rounded-lg border border-slate-200 bg-sky-50/40 py-3 pl-4 pr-12 text-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/20"
            />
            <IconSearch
              className="absolute right-4 top-1/2 -translate-y-1/2 text-sky-500"
              size={20}
            />
          </div>

          <button
            type="button"
            aria-label="Open menu"
            className="rounded-lg bg-emerald-600 p-2 text-white shadow-sm shadow-emerald-200 lg:hidden"
          >
            <IconMenu2 size={24} />
          </button>

          <ul className="hidden items-center gap-5 lg:flex">
            <li>
              <Link
                href="/wishlist"
                className="flex flex-col items-center gap-1 text-slate-700 transition hover:text-rose-500"
              >
                <IconHeart className="text-rose-500" />
                <span className="text-xs">Wishlist</span>
              </Link>
            </li>
            <li>
              <Link
                href={"/cart"}
                className="flex flex-col items-center gap-1 text-slate-700 transition hover:text-amber-600"
              >
                <span className="relative">
                  <IconShoppingCart className="text-amber-500" />
                  <span className="absolute -right-2 -top-2 flex size-4 items-center justify-center rounded-full bg-rose-500 text-[10px] text-white">
                    {numOfCartItems}
                  </span>
                </span>
                <span className="text-xs">Cart</span>
              </Link>
            </li>

            {isAuthenticated ? (
              <>
                <li>
                  <Link
                    href="/account"
                    className="flex flex-col items-center gap-1 text-slate-700 transition hover:text-sky-600"
                  >
                    <IconUser className="text-sky-500" />
                    <span className="text-xs">Account</span>
                  </Link>
                </li>
                <li
                  className="group cursor-pointer"
                  onClick={async () => {
                    dispatch(logout());
                    router.push("/login");
                    await deleteToken();
                  }}
                >
                  <span className="flex flex-col items-center gap-1 text-slate-700 transition-colors duration-200 group-hover:text-rose-600">
                    <IconLogout className="text-rose-500 transition-colors duration-200 group-hover:text-rose-600" />
                    <span className="text-xs">Logout</span>
                  </span>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    href="/login"
                    className="flex flex-col items-center gap-1 text-slate-700 transition hover:text-violet-600"
                  >
                    <IconId className="text-violet-500" />
                    <span className="text-xs">Login</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/signup"
                    className="flex flex-col items-center gap-1 text-slate-700 transition hover:text-emerald-600"
                  >
                    <IconUserPlus className="text-emerald-500" />
                    <span className="text-xs">Signup</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>

      <div className="hidden bg-gradient-to-r from-emerald-50 via-white to-amber-50 lg:block">
        <div className="container mx-auto flex items-center gap-8 px-4 py-3">
          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 font-medium text-white shadow-sm shadow-emerald-200 transition hover:bg-emerald-700"
            >
              <IconMenu2 size={20} />
              <span>All Categories</span>
              <IconChevronDown size={18} />
            </button>

            <ul className="invisible absolute left-0 top-full z-10 mt-2 w-64 translate-y-2 rounded-lg bg-white py-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {categories.map(({label, icon: CategoryIcon }) => (
                <li>
                  <span
                    className="flex cursor-pointer items-center gap-3 px-4 py-3 transition hover:bg-emerald-50 hover:text-emerald-700"
                  >
                    <CategoryIcon size={20} className="text-emerald-500" />
                    <span>{label}</span>
                  </span>
                </li>
              ))}
              <li>
                <Link
                  href="/categories"
                  className="flex items-center gap-3 border-t border-gray-100 px-4 py-3 transition hover:bg-amber-50 hover:text-amber-700"
                >
                  <IconDotsVertical size={20} className="text-amber-500" />
                  <span>View All Categories</span>
                </Link>
              </li>
            </ul>
          </div>

          <ul className="flex items-center gap-6">
            {menuLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-medium text-slate-700 transition hover:text-emerald-600"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
