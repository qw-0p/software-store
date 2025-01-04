import { Request, Response, Router } from 'express';
import * as typeController from '@api/controllers/type';
import { authMiddleware } from '@middlewares/auth';
import { CustomRequest } from '../../types/requests';

const typeRouter = Router();

typeRouter.post('/', authMiddleware, async (req: Request, res: Response) => {
  const type = await typeController.create({
    ...req.body,
    ownerId: (req as CustomRequest).user.id,
  });

  res.status(201).send(type);
});

export default typeRouter;
