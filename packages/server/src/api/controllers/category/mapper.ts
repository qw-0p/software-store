import { CategoryOutput } from '@db/models/Category';
import { ICategory } from '@api/interfaces/category.interface';

export const toCategory = (category: CategoryOutput): ICategory => {
  return {
    id: category.id,
    name: category.name,
    ownerId: category.ownerId,
    createdAt: category.createdAt,
    updatedAt: category.updatedAt,
  };
};
