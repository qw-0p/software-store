import { ProductInput, ProductOutput } from '@db/models/Product';
import * as productDal from '@db/dal/product';
import { GetAllProductParams, ProductsResult } from '@pTypes/product';

export const create = async (payload: ProductInput): Promise<ProductOutput> => {
  return productDal.create(payload);
};

export const getAll = async (
  params: GetAllProductParams,
): Promise<ProductsResult> => {
  return productDal.findAndCountAll(params);
};
