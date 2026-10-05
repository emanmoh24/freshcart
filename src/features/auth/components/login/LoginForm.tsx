"use client";
import Link from "next/link";
import {
  IconAt,
  IconBrandFacebook,
  IconBrandGoogleFilled,
  IconEye,
  IconLock,
  IconShieldCheck,
  IconStarFilled,
  IconUsers,
} from "@tabler/icons-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, loginValues } from "../../schemas/login.schema";
import { loginAction } from "../../server/login.action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { setToken } from "../../server/auth.actions";
import { authActions } from "../../slices/auth.slice";
import { useDispatch } from "react-redux";


export default function LoginForm() {

  const {setAuthState} = authActions
  const dispatch = useDispatch()
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },

    resolver: zodResolver(loginSchema),
  });

  const handleLogin: SubmitHandler<loginValues> = async function (values) {
    const response = await loginAction(values);
    if (response.success) {
      toast.success(response.message);
      router.push("/");
      await setToken(response.data.token)
      dispatch(setAuthState({isAuthenticated: true, userInfo: {
        name: response.data.user.name,
        email: response.data.user.email,
        role: response.data.user.role,
      }}))
    }

    if (!response.success) {
      if (response.fieldErrors) {
        for (const [key, messages] of Object.entries(response.fieldErrors)) {
          setError(key as keyof loginValues, { message: messages[0] });
        }
      }

      setError("root", { message: response.message });
    }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-white p-6 shadow-xl shadow-emerald-100/50 sm:p-10">
      <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-amber-100/70" />
      <div className="pointer-events-none absolute -bottom-20 -left-16 size-44 rounded-full bg-sky-100/60" />

      <div className="relative">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
            <IconLock size={29} stroke={1.8} />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Welcome Back
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Sign in to continue your fresh shopping experience
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 hover:bg-emerald-50"
          >
            <IconBrandGoogleFilled className="text-rose-500" size={19} />
            Google
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 hover:bg-emerald-50"
          >
            <IconBrandFacebook className="text-sky-600" size={19} />
            Facebook
          </button>
        </div>

        <div className="relative my-7 flex items-center">
          <div className="grow border-t border-slate-200" />
          <span className="px-4 text-xs font-bold uppercase tracking-widest text-slate-400">
            or continue with email
          </span>
          <div className="grow border-t border-slate-200" />
        </div>

        <form className="space-y-5" onSubmit={handleSubmit(handleLogin)}>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="flex items-center gap-2 text-sm font-semibold text-slate-700"
            >
              <IconAt size={17} className="text-sky-500" />
              Email Address
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-slate-200 bg-sky-50/30 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10"
            />
          </div>

          {errors.email && (
            <p role="alert" className="text-xs font-medium text-rose-500">
              {errors.email.message}
            </p>
          )}

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="flex items-center gap-2 text-sm font-semibold text-slate-700"
              >
                <IconLock size={17} className="text-violet-500" />
                Password
              </label>
              <Link
                href="/forgotPassword"
                className="text-xs font-semibold text-emerald-600 hover:text-emerald-700"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <input
                id="password"
                type="password"
                {...register("password")}
                placeholder="Enter your password"
                className="w-full rounded-xl border border-slate-200 bg-violet-50/30 px-4 py-3 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
              />
              {errors.password && (
                <p role="alert" className="text-xs font-medium text-rose-500">
                  {errors.password.message}
                </p>
              )}
              <button
                type="button"
                aria-label="Show password"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-600"
              >
                <IconEye size={19} />
              </button>
            </div>
          </div>

          {errors.root && (
            <p role="alert" className="text-xs font-medium text-rose-500">
              {errors.root.message}
            </p>
          )}

          <label className="flex items-center gap-3 text-sm text-slate-600">
            <input type="checkbox" className="size-4 accent-emerald-600" />
            Keep me signed in
          </label>

          <button
            type="submit"
            className="w-full rounded-xl bg-emerald-600 px-4 py-3.5 font-semibold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-700 hover:shadow-emerald-300"
          >
            Sign In
          </button>
        </form>

        <p className="mt-7 border-t border-slate-100 pt-6 text-center text-sm text-slate-500">
          New to FreshCart?{" "}
          <Link
            href="/signup"
            className="font-semibold text-emerald-600 hover:text-emerald-700"
          >
            Create an account
          </Link>
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <IconShieldCheck size={15} className="text-emerald-500" />
            SSL secured
          </span>
          <span className="flex items-center gap-1.5">
            <IconUsers size={15} className="text-sky-500" />
            50K+ users
          </span>
          <span className="flex items-center gap-1.5">
            <IconStarFilled size={15} className="text-amber-400" />
            4.9 rating
          </span>
        </div>
      </div>
    </div>
  );
}
