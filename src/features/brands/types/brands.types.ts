// Core Brand Entity
export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
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

// Full Paginated Brands API Response Structure
export interface BrandsApiResponse {
  results: number;
  metadata: PaginationMetadata;
  data: Brand[];
}