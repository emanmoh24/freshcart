import { Product } from './products.types';

export interface ReviewUser {
  _id: string;
  name: string;
}

// Review Entity
export interface Review {
  _id: string;
  review: string;
  rating: number;
  product: string; // Product ID reference
  user: ReviewUser;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ProductDetails extends Product {
    reviews: Review[];
}

// Single Product Details API Response
export interface SingleProductApiResponse {
  data: ProductDetails;
}