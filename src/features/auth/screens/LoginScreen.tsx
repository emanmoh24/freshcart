import React from "react";
import LoginForm from "../components/login/LoginForm";
import LoginHero from "../components/login/LoginHero";

export default function LoginScreen() {
  return (
    <div className="grid grid-cols-2 p-15 gap-7">
      <LoginHero />
      <LoginForm />
    </div>
  );
}
