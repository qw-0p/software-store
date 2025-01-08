import { Request, Response, Router } from 'express';
import * as typeController from '@api/controllers/type';
import { authMiddleware } from '@api/middlewares/auth';
import { CustomRequest } from '@pTypes/requests';
import BadRequestError from '@errors/BadRequestError';

const typeRouter = Router();

typeRouter.post('/', authMiddleware, async (req: Request, res: Response) => {
  const type = await typeController.create({
    ...req.body,
    ownerId: (req as CustomRequest).user.id,
  });

  res.status(201).send(type);
});

typeRouter.delete('/', authMiddleware, async (req: Request, res: Response) => {
  const result = await typeController.remove(req.body);

  if (result) {
    res.status(204).send({ message: 'Success' });
  } else {
    throw new BadRequestError({
      code: 404,
      message: 'Item not found',
      logging: true,
    });
  }
});

export default typeRouter;
