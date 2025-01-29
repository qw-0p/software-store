import { CategoryInput, CategoryOutput } from '@db/models/Category';
import * as categoryDal from '@db/dal/category';

export const create = async (
  payload: CategoryInput,
): Promise<CategoryOutput> => {
  return categoryDal.create(payload);
};

export const deleteById = async (id: number): Promise<boolean> => {
  return categoryDal.deleteById(id);
};
