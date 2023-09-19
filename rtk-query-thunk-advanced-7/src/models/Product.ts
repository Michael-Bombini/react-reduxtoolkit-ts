export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ProductResponse {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
}

export interface Cart {
  title: string;
  thumbnail: string;
  price: number;
  quantity: number;
}
