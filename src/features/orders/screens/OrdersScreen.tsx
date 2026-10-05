import Link from "next/link";
import {
  IconArrowRight,
  IconCalendar,
  IconCheck,
  IconChevronRight,
  IconClock,
  IconPackage,
  IconShoppingBag,
  IconTruckDelivery,
} from "@tabler/icons-react";

const orders = [
  {
    number: "FC-2025-0842",
    date: "October 18, 2025",
    status: "On the way",
    statusColor: "bg-sky-50 text-sky-700 ring-sky-200",
    statusIcon: IconTruckDelivery,
    message: "Your order is out for delivery",
    items: ["Organic produce box", "Farm fresh milk", "Whole grain bread"],
    itemCount: 5,
    total: "1,240",
    progress: 2,
  },
  {
    number: "FC-2025-0819",
    date: "October 12, 2025",
    status: "Delivered",
    statusColor: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    statusIcon: IconCheck,
    message: "Delivered on October 14",
    items: ["Fresh fruit selection", "Free-range eggs", "Greek yogurt"],
    itemCount: 4,
    total: "865",
    progress: 3,
  },
  {
    number: "FC-2025-0796",
    date: "October 8, 2025",
    status: "Processing",
    statusColor: "bg-amber-50 text-amber-700 ring-amber-200",
    statusIcon: IconClock,
    message: "We’re preparing your items",
    items: ["Weekly essentials box", "Cold-pressed orange juice"],
    itemCount: 3,
    total: "1,590",
    progress: 1,
  },
];

export default function OrdersScreen() {
  return (
    <main className="flex-1 bg-slate-50/70 py-8 sm:py-10">
      <div className="container">
        <header className="mb-8">
          <nav
            aria-label="Breadcrumb"
            className="mb-5 flex items-center gap-2 text-sm text-slate-500"
          >
            <Link href="/" className="transition-colors hover:text-emerald-700">
              Home
            </Link>
            <span aria-hidden="true" className="text-slate-300">
              /
            </span>
            <span aria-current="page" className="font-medium text-slate-800">
              My Orders
            </span>
          </nav>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="flex items-center gap-3 text-2xl font-bold text-slate-900 sm:text-3xl">
                <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-emerald-600 text-white shadow-sm shadow-emerald-200 sm:size-12">
                  <IconShoppingBag size={23} aria-hidden="true" />
                </span>
                My Orders
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                Track and manage your{" "}
                <span className="font-semibold text-emerald-700">8 orders</span>
              </p>
            </div>

            <Link
              href="/shop"
              className="inline-flex min-h-10 w-fit items-center gap-2 rounded-md border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 transition-colors hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
            >
              <IconShoppingBag size={17} aria-hidden="true" />
              Continue Shopping
            </Link>
          </div>
        </header>

        <section
          aria-label="Order summary"
          className="mb-7 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
        >
          {[
            { label: "Total orders", value: "8", icon: IconPackage },
            { label: "In progress", value: "2", icon: IconTruckDelivery },
            { label: "Delivered", value: "5", icon: IconCheck },
            { label: "Last order", value: "Oct 18", icon: IconCalendar },
          ].map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm sm:p-5"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-emerald-50 text-emerald-700">
                <Icon size={20} aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-medium text-slate-500 sm:text-sm">
                  {label}
                </p>
                <p className="mt-0.5 text-lg font-bold text-slate-900">
                  {value}
                </p>
              </div>
            </div>
          ))}
        </section>

        <section aria-labelledby="recent-orders-heading">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
            <div>
              <h2
                id="recent-orders-heading"
                className="text-lg font-bold text-slate-900 sm:text-xl"
              >
                Recent orders
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Here’s what’s happening with your recent purchases.
              </p>
            </div>
            <span className="text-xs font-medium text-slate-500">
              Showing 3 of 8
            </span>
          </div>

          <div className="space-y-4">
            {orders.map((order) => {
              const StatusIcon = order.statusIcon;

              return (
                <article
                  key={order.number}
                  className="overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm"
                >
                  <div className="flex flex-col gap-4 border-b border-slate-100 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                          Order
                        </p>
                        <p className="mt-0.5 text-sm font-bold text-slate-900">
                          {order.number}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-slate-500">
                        <IconCalendar size={16} aria-hidden="true" />
                        {order.date}
                      </div>
                    </div>
                    <span
                      className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ring-1 ring-inset ${order.statusColor}`}
                    >
                      <StatusIcon size={15} aria-hidden="true" />
                      {order.status}
                    </span>
                  </div>

                  <div className="grid gap-5 px-4 py-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:px-6">
                    <div className="flex min-w-0 items-center gap-4">
                      <div className="grid size-16 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-700 sm:size-[4.5rem]">
                        <IconPackage size={31} stroke={1.5} aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-slate-900">
                          {order.items[0]}
                        </p>
                        <p className="mt-1 truncate text-sm text-slate-500">
                          {order.items.slice(1).join(" · ")}
                        </p>
                        <p className="mt-2 text-xs font-medium text-slate-400">
                          {order.itemCount} items
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-6 border-t border-slate-100 pt-4 sm:justify-end sm:border-0 sm:pt-0">
                      <div className="sm:text-right">
                        <p className="text-xs text-slate-500">Order total</p>
                        <p className="mt-0.5 text-base font-bold text-slate-900">
                          EGP {order.total}
                        </p>
                      </div>
                      <IconChevronRight
                        size={18}
                        className="text-slate-400"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 bg-slate-50/80 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                      <StatusIcon
                        size={17}
                        className={
                          order.progress === 3
                            ? "text-emerald-600"
                            : "text-emerald-700"
                        }
                        aria-hidden="true"
                      />
                      {order.message}
                    </div>
                    <div
                      className="flex items-center gap-1.5"
                      aria-label={`Order progress: ${order.progress} of 3 steps`}
                    >
                      {[1, 2, 3].map((step) => (
                        <span
                          key={step}
                          className={`h-1.5 w-8 rounded-full ${
                            step <= order.progress
                              ? "bg-emerald-600"
                              : "bg-slate-200"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-6 flex justify-center">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
            >
              Explore more products
              <IconArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
