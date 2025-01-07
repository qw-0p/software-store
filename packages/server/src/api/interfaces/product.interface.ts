export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  description: string;
  companyId: number;
  typeId?: number;
  img?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
