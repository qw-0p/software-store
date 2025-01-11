import Category, { CategoryInput, CategoryOutput } from '../models/Category';
import DatabaseError from '@errors/DatabaseError';

export const create = async (
  payload: CategoryInput,
): Promise<CategoryOutput> => {
  try {
    return await Category.create(payload);
  } catch (error: unknown) {
    throw new DatabaseError({
      code: 500,
      message: 'Something went wrong',
      logging: true,
      context: { error },
    });
  }
};

export const deleteById = async (id: number): Promise<boolean> => {
  const isDeleted = await Category.destroy({
    where: { id },
  });

  return !!isDeleted;
};
