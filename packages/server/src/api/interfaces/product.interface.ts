export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  description: string;
  exporterId: number;
  typeId?: number;
  img?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
