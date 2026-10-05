"use client";
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandPinterest,
  IconBrandTwitter,
  IconChevronRight,
  IconLeaf,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";

const categories = [
  { href: "/categories", label: "Men's Fashion" },
  { href: "/categories", label: "Women's Fashion" },
  { href: "/categories", label: "Baby & Toys" },
  { href: "/categories", label: "Beauty & Health" },
  { href: "/categories", label: "Electronics" },
];

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/shop", label: "Shop All" },
];

const customerLinks = [
  { href: "/profile", label: "My Account" },
  { href: "/orders", label: "My Orders" },
  { href: "/wishList", label: "Wishlist" },
  { href: "/contact", label: "Returns & Refunds" },
  { href: "/contact", label: "Help Center" },
];

const socialLinks = [
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: IconBrandFacebook,
    color: "hover:bg-sky-500",
  },
  {
    href: "https://twitter.com",
    label: "Twitter",
    icon: IconBrandTwitter,
    color: "hover:bg-sky-400",
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: IconBrandInstagram,
    color: "hover:bg-rose-500",
  },
  {
    href: "https://pinterest.com",
    label: "Pinterest",
    icon: IconBrandPinterest,
    color: "hover:bg-red-500",
  },
];

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-center gap-1 text-sm text-slate-600 transition hover:translate-x-1 hover:text-emerald-600"
      >
        <IconChevronRight
          size={14}
          className="text-amber-500 opacity-0 transition group-hover:opacity-100"
        />
        <span>{label}</span>
      </Link>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      <div className="container mx-auto px-4 pt-12">
        <div className="grid grid-cols-1 gap-10 pb-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="mb-5 flex w-fit items-center gap-2 text-2xl font-bold text-emerald-700"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-amber-400 text-white shadow-sm shadow-amber-200">
                <IconLeaf size={25} />
              </span>
              FreshCart
            </Link>
            <p className="max-w-md text-sm leading-6 text-slate-600">
              FreshCart brings everyday essentials, thoughtful finds, and a
              smoother way to shop for everyone at home.
            </p>
            <div className="mt-5 space-y-3 text-sm text-slate-600">
              <a
                href="tel:+18001234567"
                className="flex w-fit items-center gap-2 transition hover:text-emerald-600"
              >
                <IconPhone size={17} className="text-emerald-600" />
                +1 (800) 123-4567
              </a>
              <a
                href="mailto:support@freshcart.com"
                className="flex w-fit items-center gap-2 transition hover:text-emerald-600"
              >
                <IconMail size={17} className="text-amber-500" />
                support@freshcart.com
              </a>
            </div>
            <div className="mt-6 flex gap-2">
              {socialLinks.map(({ href, label, icon: SocialIcon, color }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`flex size-9 items-center justify-center rounded-lg bg-white text-slate-500 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:text-white ${color}`}
                >
                  <SocialIcon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-5 text-sm font-bold uppercase tracking-wider text-slate-900">
              Categories
            </h2>
            <ul className="space-y-3">
              {categories.map((link) => (
                <FooterLink key={link.label} {...link} />
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-5 text-sm font-bold uppercase tracking-wider text-slate-900">
              Quick Links
            </h2>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <FooterLink key={link.label} {...link} />
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-5 text-sm font-bold uppercase tracking-wider text-slate-900">
              Customer Service
            </h2>
            <ul className="space-y-3">
              {customerLinks.map((link) => (
                <FooterLink key={link.label} {...link} />
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-emerald-100 py-6 text-sm text-slate-500 md:flex-row">
          <p>© 2026 FreshCart. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="size-2 rounded-full bg-emerald-500" />
            <span>Fresh shopping, delivered simply.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
