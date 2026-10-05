import {
  IconCash,
  IconCheck,
  IconCreditCard,
  IconLock,
} from "@tabler/icons-react";

type PaymentMethod = {
    selectedMethod: "cash" | "card", 
    changeMethod: (method: "cash" | "card" ) => void 
}

export default function PaymentMethods({selectedMethod, changeMethod}: PaymentMethod) {
  return (
    <section className="w-full overflow-hidden rounded-lg border border-emerald-100 bg-white shadow-sm">
      <header className="flex items-center gap-3 border-b border-slate-100 px-5 py-4">
        <span className="grid size-10 shrink-0 place-items-center rounded-md bg-emerald-50 text-emerald-700">
          <IconCreditCard size={19} aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-lg font-bold text-slate-900">Payment Method</h2>
          <p className="mt-0.5 text-xs text-slate-500">
            Choose how you&apos;d like to pay
          </p>
        </div>
      </header>

      <div className="space-y-3 p-5 sm:p-6">
        <label className="group flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 transition-colors hover:border-emerald-300 has-[:checked]:border-emerald-500 has-[:checked]:bg-emerald-50/50">
          <input
            type="radio"
            name="paymentMethod"
            value="cash"
            defaultChecked
            aria-label="Cash on Delivery"
            className="peer sr-only"
            onChange={() => {
                changeMethod("cash")
            }}
          />
          <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-slate-100 text-slate-500 transition-colors group-has-[:checked]:bg-emerald-600 group-has-[:checked]:text-white group-has-[:checked]:shadow-sm group-has-[:checked]:shadow-emerald-200">
            <IconCash size={23} aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-slate-900 group-has-[:checked]:text-emerald-800">
              Cash on Delivery
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Pay when your order arrives at your doorstep
            </p>
          </div>
          <span className="grid size-5 shrink-0 place-items-center rounded-full border-2 border-slate-300 text-transparent transition-colors group-has-[:checked]:border-emerald-600 group-has-[:checked]:bg-emerald-600 group-has-[:checked]:text-white">
            <IconCheck className="size-3" stroke={3} />
          </span>
        </label>

        <label className="group flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 transition-colors hover:border-emerald-300 has-[:checked]:border-emerald-500 has-[:checked]:bg-emerald-50/50">
          <input
            type="radio"
            name="paymentMethod"
            value="online"
            aria-label="Pay Online"
            className="peer sr-only"
             onChange={() => {
                changeMethod("card")
            }}
          />
          <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-slate-100 text-slate-500 transition-colors group-has-[:checked]:bg-emerald-600 group-has-[:checked]:text-white group-has-[:checked]:shadow-sm group-has-[:checked]:shadow-emerald-200">
            <IconCreditCard size={22} aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-slate-900 group-has-[:checked]:text-emerald-800">
              Pay Online
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Secure payment with Credit/Debit Card via Stripe
            </p>
            <div
              aria-label="Accepted cards: Visa, Mastercard, and American Express"
              className="mt-2 flex items-center gap-1.5"
            >
              <span className="rounded bg-blue-700 px-1.5 py-0.5 text-[9px] font-bold tracking-wide text-white">
                VISA
              </span>
              <span className="flex items-center rounded bg-white px-1.5 py-0.5 text-[9px] font-bold text-slate-700 ring-1 ring-slate-200">
                <span className="mr-0.5 size-2 rounded-full bg-rose-500" />
                <span className="-ml-0.5 size-2 rounded-full bg-amber-400/90" />
              </span>
              <span className="rounded bg-sky-700 px-1.5 py-0.5 text-[9px] font-bold tracking-wide text-white">
                AMEX
              </span>
            </div>
          </div>
          <span className="grid size-5 shrink-0 place-items-center rounded-full border-2 border-slate-300 text-transparent transition-colors group-has-[:checked]:border-emerald-600 group-has-[:checked]:bg-emerald-600 group-has-[:checked]:text-white">
            <IconCheck className="size-3" stroke={3} />
          </span>
        </label>

        <div className="flex items-center gap-3 rounded-lg border border-emerald-100 bg-emerald-50/70 p-3">
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700">
            <IconLock size={17} aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm font-medium text-emerald-800">
              Secure &amp; Encrypted
            </p>
            <p className="mt-0.5 text-xs text-emerald-700">
              Your payment info is protected with 256-bit SSL encryption
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
