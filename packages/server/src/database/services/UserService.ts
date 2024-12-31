import { UserInput, UserOutput } from '../models/User';
import * as userDal from '../dal/user';

export const create = async (payload: UserInput): Promise<UserOutput> => {
  return userDal.create(payload);
};

export const getByEmail = async (email: string): Promise<UserOutput> => {
  return userDal.getByEmail(email);
};
