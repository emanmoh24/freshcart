"use client";
import Link from "next/link";
import {
  IconAt,
  IconCheck,
  IconLock,
  IconPhone,
  IconUser,
  IconUserPlus,
} from "@tabler/icons-react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, signupValues } from "../../schemas/signup.schema";
import { signupAction } from "../../server/signup.action";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function SignupForm() {
  const router = useRouter();

  const { register, handleSubmit, formState, setError } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    resolver: zodResolver(signupSchema),
  });

  const handleRegister: SubmitHandler<signupValues> = async function (values) {
    const response = await signupAction(values);

    if (response.success === true) {
      toast.success(response.message);
      router.push("/login");
    }

    if (response.success === false) {
      if (response.fieldErrors) {
        for (const [key, message] of Object.entries(response.fieldErrors)) {
          setError(key as keyof signupValues, { message: message[0] });
        }
      }
      setError("root", { message: response.message });
    }
  };

  const handleError: SubmitErrorHandler<signupValues> = function (errors) {
    console.log(errors);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-white p-6 shadow-xl shadow-emerald-100/50 sm:p-10">
      <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-amber-100/70" />
      <div className="pointer-events-none absolute -bottom-20 -left-16 size-44 rounded-full bg-sky-100/60" />

      <div className="relative">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
            <IconUserPlus size={29} stroke={1.8} />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Create Your Account
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Start your fresh journey with us today
          </p>
        </div>

        <form
          className="space-y-5"
          onSubmit={handleSubmit(handleRegister, handleError)}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="flex items-center gap-2 text-sm font-semibold text-slate-700"
              >
                <IconUser size={17} className="text-emerald-500" />
                Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="Ali"
                {...register("name")}
                className="w-full rounded-xl border border-slate-200 bg-sky-50/30 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
              />
              {formState.errors.name && (
                <p role="alert" className="text-xs font-medium text-rose-500">
                  {formState.errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="flex items-center gap-2 text-sm font-semibold text-slate-700"
              >
                <IconPhone size={17} className="text-amber-500" />
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+1 234 567 8900"
                {...register("phone")}
                className="w-full rounded-xl border border-slate-200 bg-amber-50/30 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/10"
              />
              {formState.errors.phone && (
                <p role="alert" className="text-xs font-medium text-rose-500">
                  {formState.errors.phone.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="flex items-center gap-2 text-sm font-semibold text-slate-700"
            >
              <IconAt size={17} className="text-sky-500" />
              Email <span className="text-rose-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              placeholder="ali@example.com"
              className="w-full rounded-xl border border-slate-200 bg-sky-50/30 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10"
            />
            {formState.errors.email && (
              <p role="alert" className="text-xs font-medium text-rose-500">
                {formState.errors.email.message}
              </p>
            )}
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="flex items-center gap-2 text-sm font-semibold text-slate-700"
              >
                <IconLock size={17} className="text-violet-500" />
                Password <span className="text-rose-500">*</span>
              </label>
              <input
                id="password"
                type="password"
                placeholder="Create a strong password"
                {...register("password")}
                autoComplete="off"
                className="w-full rounded-xl border border-slate-200 bg-violet-50/30 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
              />
              {formState.errors.password && (
                <p role="alert" className="text-xs font-medium text-rose-500">
                  {formState.errors.password.message}
                </p>
              )}

              <div className="flex items-center gap-2 pt-1">
                <div className="h-1.5 grow overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-1/2 rounded-full bg-linear-to-r from-amber-400 to-emerald-500" />
                </div>
                <span className="text-xs font-medium text-amber-600">Fair</span>
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="rePassword"
                className="flex items-center gap-2 text-sm font-semibold text-slate-700"
              >
                <IconCheck size={17} className="text-emerald-500" />
                Confirm Password <span className="text-rose-500">*</span>
              </label>
              <input
                id="rePassword"
                type="password"
                {...register("rePassword")}
                placeholder="Confirm your password"
                autoComplete="off"
                className="w-full rounded-xl border border-slate-200 bg-emerald-50/30 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
              />
              {formState.errors.rePassword && (
                <p role="alert" className="text-xs font-medium text-rose-500">
                  {formState.errors.rePassword.message}
                </p>
              )}
            </div>
          </div>

          <label className="flex items-start gap-3 text-sm leading-5 text-slate-600">
            <input
              type="checkbox"
              id="terms"
              className="mt-1 size-4 accent-emerald-600"
            />
            <span>
              I agree to the{" "}
              <Link
                href="/terms"
                className="font-semibold text-emerald-600 hover:text-emerald-700"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy-policy"
                className="font-semibold text-emerald-600 hover:text-emerald-700"
              >
                Privacy Policy
              </Link>{" "}
              <span className="text-rose-500">*</span>
            </span>
          </label>

          {formState.errors.root && (
            <p role="alert" className="text-xs font-medium text-rose-500">
              {formState.errors.root.message}
            </p>
          )}

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3.5 font-semibold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-700 hover:shadow-emerald-300"
          >
            <IconUserPlus size={20} />
            <span>Create My Account</span>
          </button>
        </form>

        <p className="mt-7 border-t border-slate-100 pt-6 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-emerald-600 hover:text-emerald-700"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
