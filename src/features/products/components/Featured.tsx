import { getProductsBasedOnCategory } from "../services/getProductsBasedOnCategory";
import { ProductDetails } from "../types/productDetails.types";
import FeaturedCarousel from "./FeaturedCarousel";

export default async function Featured({
  product,
}: {
  product: ProductDetails;
}) {
  const categoryResponse = await getProductsBasedOnCategory(
    product.category._id,
  );
  const relatedProducts = categoryResponse.data.filter(
    (item) => item._id !== product._id,
  );

  if (!relatedProducts.length) {
    return null;
  }

  return <FeaturedCarousel products={relatedProducts} />;
}
