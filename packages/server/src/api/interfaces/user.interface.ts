import { UserRole } from '../../types/user';

export interface User {
  id: number;
  email: string;
  password: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}
