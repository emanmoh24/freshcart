import React from "react";
import { getSpecificProduct } from "../services/getSpecificProduct";
import ProductInfo from "@/features/products/components/ProductInfo";
import Reviews from "@/features/products/components/Reviews";
import Featured from "../components/Featured";

export default async function ProductDetailsScreen({ id }: { id: string }) {
  const productDetails = await getSpecificProduct(id);
  return (
    <div>
      <ProductInfo product={productDetails.data} />
      <Reviews product={productDetails.data} />
      <Featured product={productDetails.data}/>
    </div>
  );
}
