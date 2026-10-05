import React from 'react'
import SignupHero from '../components/signup/SignupHero'
import SignupForm from '../components/signup/SignupForm'

export default function SignupScreens() {
  return (
    <div className='grid grid-cols-2 p-15 gap-7'>
      <SignupHero/>
      <SignupForm/>
    </div>
  )
}
