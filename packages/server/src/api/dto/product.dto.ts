export type CreateProductDto = {
  name: string;
  price: number;
  companyId: number;
  description: string;
  ownerId: number;
  slug?: string;
  typeId?: number;
  img?: string;
};

export type GetAllProductWithQueryDto = {
  ownerId: number;
  companyId: string;
  typeId: string;
  limit: string;
  page: string;
};
