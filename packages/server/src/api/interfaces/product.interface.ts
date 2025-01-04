export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  description: string;
  img?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
