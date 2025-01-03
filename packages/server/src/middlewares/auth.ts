import { NextFunction, Request, RequestHandler, Response } from 'express';
import BadRequestError from '@errors/BadRequestError';
import jwt, { JwtPayload } from 'jsonwebtoken';

export const authMiddleware: RequestHandler = (
  req: Request,
  _: Response,
  next: NextFunction,
) => {
  if (req.method === 'OPTIONS') {
    next();
  }
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    throw new BadRequestError({
      code: 400,
      message: 'Authorization token is required',
      logging: true,
    });
  }

  jwt.verify(token, process.env.SECRET_KEY as string, (err, data) => {
    if (err) {
      throw new BadRequestError({
        code: 400,
        message: 'Authorization token is invalid',
        logging: true,
      });
    }

    (req as JwtPayload).user = data;
  });

  next();
};
