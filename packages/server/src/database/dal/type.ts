import { TypeInput, TypeOutput } from '../models/Type';
import { Type } from '../models';
import DatabaseError from '@errors/DatabaseError';

export const create = async (payload: TypeInput): Promise<TypeOutput> => {
  try {
    const newType = await Type.create(payload);
    return newType;
  } catch (error: unknown) {
    throw new DatabaseError({
      code: 500,
      message: 'Something went wrong',
      logging: true,
      context: { error },
    });
  }
};
