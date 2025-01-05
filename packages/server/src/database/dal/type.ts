import { TypeInput, TypeOutput } from '../models/Type';
import { Type } from '../models';
import DatabaseError from '@errors/DatabaseError';

export const create = async (payload: TypeInput): Promise<TypeOutput> => {
  try {
    return await Type.create(payload);
  } catch (error: unknown) {
    throw new DatabaseError({
      code: 500,
      message: 'Something went wrong',
      logging: true,
      context: { error },
    });
  }
};

export const remove = async (payload: TypeInput): Promise<number> => {
  try {
    return await Type.destroy({
      where: payload,
    });
  } catch (error: unknown) {
    throw new DatabaseError({
      code: 500,
      message: 'Something went wrong',
      logging: true,
      context: { error },
    });
  }
};
