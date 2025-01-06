import { UserRole } from '../../types/user';

export type CreateUserDto = {
  email: string;
  password: string;
  role: UserRole;
};

export type LoginUserDto = Pick<CreateUserDto, 'email' | 'password'>;
