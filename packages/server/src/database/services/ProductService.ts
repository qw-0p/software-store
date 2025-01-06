import { ProductInput, ProductOutput } from '@db/models/Product';
import * as productDal from '@db/dal/product';

export const create = async (payload: ProductInput): Promise<ProductOutput> => {
  return productDal.create(payload);
};
