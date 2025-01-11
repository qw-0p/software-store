import { CategoryInput, CategoryOutput } from '@db/models/Category';
import * as categoryDal from '@db/dal/category';

export const create = async (
  payload: CategoryInput,
): Promise<CategoryOutput> => {
  return categoryDal.create(payload);
};

export const remove = async (id: number): Promise<number> => {
  return categoryDal.remove(id);
};
