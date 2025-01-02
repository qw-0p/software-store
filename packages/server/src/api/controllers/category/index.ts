import { CreateCategoryDto } from '@api/dto/category.dto';
import * as mapper from './mapper';
import * as categoryService from '@db/services/CategoryService';
import { ICategory } from '@api/interfaces/category.interface';

export const create = async (
  payload: CreateCategoryDto,
): Promise<ICategory> => {
  return mapper.toCategory(await categoryService.create(payload));
};

export const deleteById = async (id: number): Promise<boolean> => {
  return await categoryService.deleteById(id);
};
