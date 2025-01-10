import { authMiddleware, validationMiddleware } from '@api/middlewares';
import { Request, Response, Router } from 'express';
import * as productController from '@api/controllers/product';
import { CustomRequest } from '@pTypes/requests';

const productRouter = Router();

productRouter.post(
  '/',
  authMiddleware,
  validationMiddleware('/product/create'),
  async (req: Request, res: Response) => {
    const product = await productController.create({
      ...req.body,
      ownerId: (req as CustomRequest).user.id,
    });

    res.status(201).send(product);
  },
);

productRouter.get('/', authMiddleware, async (req: Request, res: Response) => {
  const productsResult = await productController.getAll({
    ...req.query,
    ownerId: (req as CustomRequest).user.id,
  });
  const products = productsResult.rows;

  res.status(201).send(products);
});

export default productRouter;
