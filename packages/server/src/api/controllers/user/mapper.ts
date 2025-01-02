import { UserOutput } from '@db/models/User';
import { IUser } from '@api/interfaces/user.interface';

export const toUser = (user: UserOutput): IUser => {
  return {
    id: user.id,
    email: user.email,
    password: user.password,
    role: user.role,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
};
