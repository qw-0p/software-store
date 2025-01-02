import { UserRole } from '@pTypes/user';

export interface IUser {
  id: number;
  email: string;
  password: string;
  role?: UserRole;
  createdAt?: Date;
  updatedAt?: Date;
}
