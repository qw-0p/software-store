import { ProductOutput } from '@db/models/Product';
import { Product } from '@api/interfaces/product.interface';
import { ProductsResult } from '@pTypes/product';

export const toProduct = (product: ProductOutput): Product => {
  return {
    id: product.id,
    name: product.name,
    price: product.price,
    rating: product.rating,
    description: product.description,
    companyId: product.companyId,
    typeId: product.typeId,
    img: product.img,
    createdAt: product.createdAt,
    updatedAt: product.updatedAt,
  };
};

export const toProducts = (
  products: ProductsResult,
): { rows: Product[]; count: number } => {
  return {
    rows: products.rows.map((product: Product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      rating: product.rating,
      description: product.description,
      companyId: product.companyId,
      typeId: product.typeId,
      img: product.img,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    })) as Product[],
    count: products.count,
  };
};
