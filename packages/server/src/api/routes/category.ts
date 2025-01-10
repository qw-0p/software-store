import { Request, Response, Router } from 'express';
import * as categoryController from '@api/controllers/category';
import { authMiddleware } from '@api/middlewares/auth';
import { CustomRequest } from '@pTypes/requests';
import BadRequestError from '@errors/BadRequestError';

const categoryRouter = Router();

categoryRouter.post(
  '/',
  authMiddleware,
  async (req: Request, res: Response) => {
    const category = await categoryController.create({
      ...req.body,
      ownerId: (req as CustomRequest).user.id,
    });

    res.status(201).send(category);
  },
);

categoryRouter.delete(
  '/',
  authMiddleware,
  async (req: Request, res: Response) => {
    const result = await categoryController.remove(req.body);

    if (result) {
      res.status(204).send({ message: 'Success' });
    } else {
      throw new BadRequestError({
        code: 404,
        message: 'Item not found',
        logging: true,
      });
    }
  },
);

export default categoryRouter;
