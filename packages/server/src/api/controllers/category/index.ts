import { CreateCategoryDto, RemoveCategoryDto } from '@api/dto/category.dto';
import * as mapper from './mapper';
import * as categoryService from '@db/services/CategoryService';

export const create = async (payload: CreateCategoryDto) => {
  return mapper.toCategory(await categoryService.create(payload));
};

export const remove = async (payload: RemoveCategoryDto) => {
  return await categoryService.remove(payload);
};
