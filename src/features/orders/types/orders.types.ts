export interface OrderUser {
  _id: string;
  name: string;
  email: string;
  phone: string;
}

export interface ShippingAddress {
  details: string;
  phone: string;
  city: string;
  postalCode?: string;
}

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

export interface Product {
  _id: string;
  id: string;
  title: string;
  imageCover: string;
  ratingsQuantity: number;
  ratingsAverage: number;
  category: Category;
  brand: Brand;
  subcategory: Subcategory[];
}

export interface CartItem {
  _id: string;
  count: number;
  price: number;
  product: Product;
}

export interface Order {
  _id: string;
  id: number;
  user: OrderUser;
  shippingAddress: ShippingAddress;
  taxPrice: number;
  shippingPrice: number;
  totalOrderPrice: number;
  paymentMethodType: 'cash' | 'card';
  isPaid: boolean;
  isDelivered: boolean;
  paidAt?: string;
  createdAt: string;
  updatedAt: string;
  cartItems: CartItem[];
}

export interface OrdersApiResponse {
  results: number;
  metadata: {
    currentPage: number;
    numberOfPages: number;
    limit: number;
    nextPage?: number;
  };
  data: Order[];
}