import {
  IconClock,
  IconShieldCheck,
  IconTruckDelivery,
} from "@tabler/icons-react";

const benefits = [
  {
    label: "Free delivery",
    icon: IconTruckDelivery,
    iconClass: "bg-sky-100 text-sky-600",
  },
  {
    label: "Secure payment",
    icon: IconShieldCheck,
    iconClass: "bg-emerald-100 text-emerald-600",
  },
  {
    label: "24/7 support",
    icon: IconClock,
    iconClass: "bg-amber-100 text-amber-600",
  },
];

export default function LoginHero() {
  return (
    <div className="relative hidden overflow-hidden rounded-3xl border border-emerald-100 bg-linear-to-br from-emerald-50 via-white to-amber-50 p-7 lg:block lg:p-10">
      <div className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-amber-200/40" />
      <div className="pointer-events-none absolute -bottom-24 -left-20 size-64 rounded-full bg-sky-200/40" />

      <div className="relative flex h-full flex-col justify-center text-center">
        <div className="overflow-hidden rounded-2xl border border-white/80 bg-white/70 shadow-lg shadow-emerald-100/50">
          <img
            className="h-72 w-full object-cover xl:h-80"
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/2e5810ff3e-e750761ebcd4ae5907db.png"
            alt="Fresh vegetables and fruits in a shopping cart"
          />
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <span className="mb-3 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-700">
            Fresh choices, delivered
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Your one-stop shop for{" "}
            <span className="text-emerald-600">fresh products</span>
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Join thousands of happy customers who trust FreshCart for their
            everyday essentials.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {benefits.map(({ label, icon: BenefitIcon, iconClass }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-2 rounded-2xl border border-white/80 bg-white/70 px-3 py-3 text-sm font-semibold text-slate-600 shadow-sm"
            >
              <span
                className={`flex size-8 items-center justify-center rounded-xl ${iconClass}`}
              >
                <BenefitIcon size={17} />
              </span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
