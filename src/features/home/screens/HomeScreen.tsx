import React from 'react'
import HomeSlider from '../components/HomeSlider'
import HomeCategories from '../components/HomeCategories'
import FeaturedProducts from '../components/FeaturedProducts'

export default function HomeScreen() {
  return (
    <div>
      <HomeSlider/>
      <HomeCategories/>
      <FeaturedProducts/>
    </div>
  )
}
