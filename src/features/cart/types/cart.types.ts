// Sub-entities used across product representations
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

// Minimal Product entity nested inside Cart Items
export interface CartProduct {
  _id: string;
  id: string;
  title: string;
  slug: string;
  quantity: number;
  imageCover: string;
  category: ProductCategory;
  subcategory: ProductSubcategory[];
  brand: Brand;
  ratingsAverage: number;
}

// Individual Cart Item entity inside the products array
export interface CartEntity {
  _id: string;
  count: number;
  price: number;
  product: CartProduct;
}

// Cart Details payload
export interface CartData {
  _id?: string;
  cartOwner?: string;
  products: CartEntity[];
  totalCartPrice: number;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

// Full Add-to-Cart / Cart Response Structure
export interface CartApiResponse {
  status: "success";
  message: string;
  numOfCartItems: number;
  cartId: string;
  data: CartData;
}

export interface ApiErrorResponse {
  status: "fail";         // e.g., "fail" or "error"
  message: string;      
}