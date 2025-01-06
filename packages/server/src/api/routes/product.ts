import { authMiddleware } from '@middlewares/auth';
import { Request, Response, Router } from 'express';
import * as productController from '@api/controllers/product';
import { CustomRequest } from '@pTypes/requests';

const productRouter = Router();

productRouter.post('/', authMiddleware, async (req: Request, res: Response) => {
  const type = await productController.create({
    ...req.body,
    ownerId: (req as CustomRequest).user.id,
  });

  res.status(201).send(type);
});

export default productRouter;
