import { UserOutput } from '@db/models/User';
import { User } from '@api/interfaces/user.interface';

export const toUser = (user: UserOutput): User => {
  return {
    id: user.id,
    email: user.email,
    password: user.password,
    role: user.role,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
};
