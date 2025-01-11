import Product, { ProductInput, ProductOutput } from '../models/Product';
import { ProductsResult } from '@pTypes/product';
import { FindAndCountOptions } from 'sequelize';
import { isEmpty } from '@utils/is-empty';
import { GetAllProductFilters } from '@db/dal/types';
import DatabaseError from '@errors/DatabaseError';

export const create = async (payload: ProductInput): Promise<ProductOutput> => {
  return await Product.create(payload);
};

export const findAndCountAll = async (
  payload: Partial<GetAllProductFilters>,
): Promise<ProductsResult> => {
  const { companyId, categoryId } = payload;

  const page: number = payload.page ? Number(payload.page) : 1;
  const limit: number = payload.limit ? Number(payload.limit) : 10;

  const offset: number = page * limit - limit;

  const params = {
    limit,
    offset,
    where: {
      ...(categoryId && { typeId: Number(categoryId) }),
      ...(companyId && { companyId: Number(companyId) }),
    },
  };
  return await Product.findAndCountAll(params as FindAndCountOptions);
};

export const updateById = async (
  id: number,
  payload: Partial<ProductInput>,
): Promise<ProductOutput> => {
  const product = await Product.findByPk(id);

  if (!product) {
    throw new DatabaseError({
      message: 'Product is not exists',
      code: 400,
    });
  }

  return await product.update(payload);
};

export const deleteById = async (id: number): Promise<boolean> => {
  const isDeleted = await Product.destroy({
    where: {
      id,
    },
  });

  return !!isDeleted;
};

export const checkSlugExists = async (slug: string): Promise<boolean> => {
  const productWithSlug = await Product.findOne({
    where: {
      slug,
    },
  });

  return !isEmpty(productWithSlug || {});
};
