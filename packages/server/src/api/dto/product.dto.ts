export type CreateProductDto = {
  name: string;
  price: number;
  companyId: number;
  description: string;
  ownerId: number;
  slug?: string;
  categoryId?: number;
  img?: string;
};

export type GetAllProductWithQueryDto = {
  [key: string]: string | undefined;
  ownerId?: string;
  companyId?: string;
  categoryId?: string;
  limit?: string;
  page?: string;
};
