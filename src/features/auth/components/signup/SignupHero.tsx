import {
  IconShieldCheck,
  IconStarFilled,
  IconTruckDelivery,
} from "@tabler/icons-react";
import Image from "next/image";
import reviewAuthorImg from "../../../../assets/images/review-author.png";

const benefits = [
  {
    title: "Premium Quality",
    description: "Thoughtfully selected products from trusted suppliers.",
    icon: IconStarFilled,
    iconClass: "bg-amber-100 text-amber-500",
  },
  {
    title: "Fast Delivery",
    description: "Same-day delivery available in most areas.",
    icon: IconTruckDelivery,
    iconClass: "bg-sky-100 text-sky-600",
  },
  {
    title: "Secure Shopping",
    description: "Your data and payments stay protected at every step.",
    icon: IconShieldCheck,
    iconClass: "bg-emerald-100 text-emerald-600",
  },
];

export default function SignupHero() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-linear-to-br from-emerald-50 via-white to-amber-50 p-7 sm:p-10">
      <div className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-amber-200/40" />
      <div className="pointer-events-none absolute -bottom-24 -left-20 size-64 rounded-full bg-sky-200/40" />

      <div className="relative">
        <div className="mb-8 max-w-xl">
          <span className="mb-4 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-700">
            A fresher way to shop
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Welcome to <span className="text-emerald-600">FreshCart</span>
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Join thousands of happy customers enjoying quality essentials
            delivered right to their doorstep.
          </p>
        </div>

        <ul className="space-y-5">
          {benefits.map(
            ({ title, description, icon: BenefitIcon, iconClass }) => (
              <li key={title} className="flex items-start gap-4">
                <div
                  className={`flex size-12 shrink-0 items-center justify-center rounded-2xl ${iconClass}`}
                >
                  <BenefitIcon size={24} />
                </div>
                <div>
                  <h2 className="font-bold text-slate-900">{title}</h2>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {description}
                  </p>
                </div>
              </li>
            ),
          )}
        </ul>

        <div className="mt-9 rounded-2xl border border-white/80 bg-white/80 p-5 shadow-lg shadow-sky-100/50 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <Image
              src={reviewAuthorImg}
              alt="Sarah Johnson"
              className="size-12 rounded-full object-cover ring-4 ring-amber-100"
            />
            <div>
              <h3 className="font-bold text-slate-900">Sarah Johnson</h3>
              <div
                className="mt-1 flex gap-0.5 text-amber-400"
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }, (_, index) => (
                  <IconStarFilled key={index} size={17} />
                ))}
              </div>
            </div>
          </div>
          <blockquote className="mt-4 border-l-2 border-amber-300 pl-4 text-sm italic leading-6 text-slate-600">
            “FreshCart has transformed my shopping experience. The quality is
            outstanding, and delivery is always on time.”
          </blockquote>
        </div>
      </div>
    </div>
  );
}
