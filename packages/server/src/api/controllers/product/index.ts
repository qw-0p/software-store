import {
  CreateProductDto,
  GetAllProductWithQueryDto,
  UpdateProductDto,
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

export const updateById = async (
  id: number,
  payload: UpdateProductDto,
): Promise<IProduct> => {
  return mapper.toProduct(await productService.updateById(id, payload));
};

export const deleteById = async (id: number): Promise<boolean> => {
  return await productService.deleteById(id);
};
