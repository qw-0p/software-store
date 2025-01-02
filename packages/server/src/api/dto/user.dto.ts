import { UserRole } from '@pTypes/user';

export type CreateUserDto = {
  email: string;
  password: string;
  role: UserRole;
};

export type LoginUserDto = Pick<CreateUserDto, 'email' | 'password'>;
