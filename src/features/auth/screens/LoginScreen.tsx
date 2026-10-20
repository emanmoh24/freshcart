import React from "react";
import LoginForm from "../components/login/LoginForm";
import LoginHero from "../components/login/LoginHero";

export default function LoginScreen() {
  return (
    <div className="grid grid-cols-1 gap-5 p-4 sm:gap-7 sm:p-8 xl:grid-cols-2 xl:p-15">
      <LoginHero />
      <LoginForm />
    </div>
  );
}
