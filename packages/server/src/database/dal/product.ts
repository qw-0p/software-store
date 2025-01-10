import Product, { ProductOutput, ProductInput } from '../models/Product';
import { ProductsResult } from '@pTypes/product';
import { FindAndCountOptions } from 'sequelize';
import { isEmpty } from '@utils/is-empty';
import { GetAllProductWithQuery } from '@db/dal/types';

export const create = async (payload: ProductInput): Promise<ProductOutput> => {
  const product = await Product.create(payload);
  return product as ProductOutput;
};

export const findAndCountAll = async (
  payload: GetAllProductWithQuery,
): Promise<ProductsResult> => {
  const { companyId, typeId } = payload;

  const page: number = payload.page ? Number(payload.page) : 1;
  const limit: number = payload.limit ? Number(payload.limit) : 10;

  const offset: number = page * limit - limit;

  const params = {
    limit,
    offset,
    where: {
      ...(typeId && { typeId: Number(typeId) }),
      ...(companyId && { companyId: Number(companyId) }),
    },
  };
  const result = await Product.findAndCountAll(params as FindAndCountOptions);
  return result;
};

export const checkSlugExists = async (slug: string): Promise<boolean> => {
  const productWithSlug = await Product.findOne({
    where: {
      slug,
    },
  });

  return !isEmpty(productWithSlug || {});
};
