// Sub-entities
export interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

export interface Category {
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

// Product Entity
export interface Product {
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
  category: Category;
  subcategory: Subcategory[];
  brand: Brand;
  ratingsAverage: number;
  ratingsQuantity: number;
  createdAt: string;
  updatedAt: string;
}

// Pagination Metadata
export interface PaginationMetadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage?: number;
  prevPage?: number;
}

// Top-Level Paginated Products API Response
export interface ProductsApiResponse {
  results: number;
  metadata: PaginationMetadata;
  data: Product[];
}