import {
  CreateProductDto,
  GetAllProductWithQueryDto,
} from '@api/dto/product.dto';
import * as mapper from './mapper';
import * as productService from '@db/services/ProductService';
import { GetAllProductParams } from '@pTypes/product';

export const create = async (payload: CreateProductDto) => {
  return mapper.toProduct(await productService.create(payload));
};

export const getAll = async (payload: GetAllProductWithQueryDto) => {
  const { companyId, typeId } = payload;

  const page: number = payload.page ? Number(payload.page) : 1;
  const limit: number = payload.limit ? Number(payload.limit) : 10;

  const offset: number = page * limit - limit;

  const params: GetAllProductParams = {
    limit,
    offset,
    where: {
      ...(typeId && { typeId: Number(typeId) }),
      ...(companyId && { companyId: Number(companyId) }),
    },
  };
  return mapper.toProducts(await productService.getAll(params));
};
