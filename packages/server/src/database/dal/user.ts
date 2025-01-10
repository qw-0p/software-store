import { UserInput, UserOutput } from '../models/User';
import { User } from '../models';
import DatabaseError from '@errors/DatabaseError';
import * as Basket from './basket';

export const create = async (payload: UserInput): Promise<UserOutput> => {
  try {
    const newUser = await User.create(payload);
    const { id } = newUser;
    await Basket.create({ ownerId: id });

    return newUser;
  } catch (error: unknown) {
    throw new DatabaseError({
      code: 500,
      message: 'Something went wrong',
      logging: true,
      context: { error },
    });
  }
};

export const getByEmail = async (email: string): Promise<UserOutput> => {
  const user = await User.findOne({ where: { email } });
  return user ?? ({} as UserOutput);
};
