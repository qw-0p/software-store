import {
  CreateProductDto,
  GetAllProductWithQueryDto,
} from '@api/dto/product.dto';
import * as mapper from './mapper';
import * as productService from '@db/services/ProductService';
import { IProduct } from '@api/interfaces/product.interface';

export const create = async (payload: CreateProductDto): Promise<IProduct> => {
  return mapper.toProduct(await productService.create(payload));
};

export const getAll = async (payload: GetAllProductWithQueryDto) => {
  return mapper.toProducts(await productService.getAll(payload));
};
