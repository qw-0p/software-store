import { ProductOutput } from '@db/models/Product';
import { IProduct } from '@api/interfaces/product.interface';
import { ProductsResult } from '@pTypes/product';

export const toProduct = (product: ProductOutput): IProduct => {
  return {
    id: product.id,
    name: product.name,
    price: product.price,
    rating: product.rating,
    description: product.description,
    companyId: product.companyId,
    categoryId: product.categoryId,
    img: product.img,
    createdAt: product.createdAt,
    updatedAt: product.updatedAt,
  };
};

export const toProducts = (
  products: ProductsResult,
): { rows: IProduct[]; count: number } => {
  return {
    rows: products.rows.map((product: IProduct) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      rating: product.rating,
      description: product.description,
      companyId: product.companyId,
      categoryId: product.categoryId,
      img: product.img,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    })),
    count: products.count,
  };
};
