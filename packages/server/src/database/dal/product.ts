import Product, { ProductOutput, ProductInput } from '../models/Product';
import DatabaseError from '@errors/DatabaseError';

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
