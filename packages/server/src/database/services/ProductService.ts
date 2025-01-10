import { ProductInput, ProductOutput } from '@db/models/Product';
import * as productDal from '@db/dal/product';
import { ProductsResult } from '@pTypes/product';
import { kebabCase } from '@utils/kebab-case';
import { GetAllProductWithQuery } from '@db/dal/types';

export const create = async (payload: ProductInput): Promise<ProductOutput> => {
  const slug = kebabCase(payload.name);

  const slugExists = await productDal.checkSlugExists(slug);
  payload.slug = slugExists
    ? `${slug}-${Math.floor(Math.random() * 1000)}`
    : slug;

  return productDal.create(payload);
};

export const getAll = async (
  params: GetAllProductWithQuery,
): Promise<ProductsResult> => {
  return productDal.findAndCountAll(params);
};
