import { NextFunction, Response } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import BadRequestError from '@errors/BadRequestError';

export const checkRoleMiddleware = (...roles: string[]) => {
  return (req: JwtPayload, res: Response, next: NextFunction) => {
    const user = req.user;

    if (!user) {
      throw new BadRequestError({
        code: 401,
        message: 'User is not authenticated',
        logging: true,
      });
    }

    if (!roles.includes(user.role)) {
      throw new BadRequestError({
        code: 403,
        message: `Access denied for role: ${user.role}`,
        logging: true,
      });
    }

    next();
  };
};
