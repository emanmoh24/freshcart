// Sub-entities
export interface ProductSubcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

export interface ProductCategory {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

// Wishlist Product Item
export interface WishlistEntity {
  _id: string;
  id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  sold: number;
  price: number;
  priceAfterDiscount?: number;
  imageCover: string;
  images: string[];
  category: ProductCategory;
  subcategory: ProductSubcategory[];
  brand: Brand;
  ratingsAverage: number;
  ratingsQuantity: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

// Wishlist / Product List API Response
export interface WishlistApiResponse {
  status: string;
  count?: number;
  data: WishlistEntity[];
  message?:string
}

export interface ApiErrorResponse {
  status: "fail";         // e.g., "fail" or "error"
  message: string;      
}