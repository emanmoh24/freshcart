// Core Data Types
export interface ProductSubcategory {
  _id: string;
  name: string;
  slug: string;
  category: string; // Category ID
}

export interface ProductCategory {
  _id: string;
  name: string;
  slug: string;
  image?: string;
}

export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image?: string;
}

// Main Product Interface
export interface Product {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  quantity: number;
  sold: number;
  price: number;
  priceAfterDiscount?: number;
  imageCover: string;
  images?: string[];
  category: ProductCategory;
  subcategory: ProductSubcategory[];
  brand: Brand;
  ratingsAverage: number;
  ratingsQuantity: number;
  createdAt: string;
  updatedAt: string;
  id: string;
}

// Pagination Metadata
export interface PaginationInfo {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage?: number;
  prevPage?: number;
}

// Complete API Response
export interface ProductsApiResponse {
  results: number;
  metadata: PaginationInfo;
  data: Product[];
}