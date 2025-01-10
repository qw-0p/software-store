export interface IProduct {
  id: number;
  name: string;
  price: number;
  rating: number;
  description: string;
  companyId: number;
  categoryId?: number;
  img?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
