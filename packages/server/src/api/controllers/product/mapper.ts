import { ProductOutput } from '@db/models/Product';
import { Product } from '@api/interfaces/product.interface';

export const toProduct = (product: ProductOutput): Product => {
  return {
    id: product.id,
    name: product.name,
    price: product.price,
    rating: product.rating,
    description: product.description,
    exporterId: product.exporterId,
    typeId: product.typeId,
    img: product.img,
    createdAt: product.createdAt,
    updatedAt: product.updatedAt,
  };
};
