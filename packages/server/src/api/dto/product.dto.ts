export type CreateProductDto = {
  name: string;
  price: number;
  rating: number;
  info: string;
  exporterId: number;
  description: string;
  ownerId: number;
  typeId?: number;
  img?: string;
};
