import { CreateProductDto } from '@api/dto/product.dto';
import * as mapper from './mapper';
import * as productService from '@db/services/ProductService';

export const create = async (payload: CreateProductDto) => {
  return mapper.toProduct(await productService.create(payload));
};
