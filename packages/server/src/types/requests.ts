import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import { UserRole } from './user';

export interface CustomUserData extends JwtPayload {
  id: number;
  email: string;
  role: UserRole;
}

export interface CustomRequest extends Request {
  user: CustomUserData;
}
