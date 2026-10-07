import ProductDetailsScreen from '@/features/products/screens/ProductDetailsScreen'
import React from 'react'

type Props = {params:Promise<{id:string}>}

export default async function ProductDetails({params}: Props) {

  const {id} = await params
  return (
    <>
      <ProductDetailsScreen id = {id}/>
    </>
  )
}
