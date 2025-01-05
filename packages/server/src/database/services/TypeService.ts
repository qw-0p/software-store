import { TypeInput, TypeOutput } from '@db/models/Type';
import * as typeDal from '@db/dal/type';

export const create = async (payload: TypeInput): Promise<TypeOutput> => {
  return typeDal.create(payload);
};

export const remove = async (payload: TypeInput): Promise<number> => {
  return typeDal.remove(payload);
};
