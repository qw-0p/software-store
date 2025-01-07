import Product, { ProductOutput, ProductInput } from '../models/Product';
import DatabaseError from '@errors/DatabaseError';
import { ProductsResult } from '@pTypes/product';
import { FindAndCountOptions } from 'sequelize';

export const create = async (payload: ProductInput): Promise<ProductOutput> => {
  try {
    const product = await Product.create(payload);
    return product as ProductOutput;
  } catch (error: unknown) {
    throw new DatabaseError({
      code: 500,
      message: 'Something went wrong',
      logging: true,
      context: { error },
    });
  }
};

export const findAndCountAll = async (
  payload: FindAndCountOptions,
): Promise<ProductsResult> => {
  try {
    const result = await Product.findAndCountAll(payload);
    return result;
  } catch (error) {
    console.log(error);
    throw new DatabaseError({
      code: 500,
      message: 'Something went wrong',
      logging: true,
      context: { error },
    });
  }
};
