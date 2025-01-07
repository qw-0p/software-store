import { Product } from '@db/models';

export type GetAllProductParams = {
  limit?: number;
  offset?: number;
  where: {
    typeId?: number | undefined;
    companyId?: number | undefined;
  };
};

export interface ProductsResult {
  rows: Product[];
  count: number;
}
