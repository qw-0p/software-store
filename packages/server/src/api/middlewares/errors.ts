import { NextFunction, Request, Response } from 'express';
import { CustomError } from '@errors/CustomError';

export const errorsMiddleware = (
  err: Error,
  _: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof CustomError) {
    const { statusCode, errors, logging } = err;
    if (logging) {
      console.error(
        JSON.stringify(
          {
            code: err.statusCode,
            errors: err.errors,
            stack: err.stack,
          },
          null,
          2,
        ),
      );
    }

    return next(res.status(statusCode).send({ errors }));
  }

  return next(
    res.status(500).send({ errors: [{ message: 'Something went wrong' }] }),
  );
};
