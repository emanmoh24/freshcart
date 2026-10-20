import React from 'react'
import SignupHero from '../components/signup/SignupHero'
import SignupForm from '../components/signup/SignupForm'

export default function SignupScreens() {
  return (
    <div className="grid grid-cols-1 gap-5 p-4 sm:gap-7 sm:p-8 xl:grid-cols-2 xl:p-15">
      <SignupHero />
      <SignupForm />
    </div>
  )
}
