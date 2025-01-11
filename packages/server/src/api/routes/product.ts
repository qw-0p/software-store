import { authMiddleware, validationMiddleware } from '@api/middlewares';
import { Request, Response, Router } from 'express';
import * as productController from '@api/controllers/product';
import { CustomRequest } from '@pTypes/requests';
import { GetAllProductWithQueryDto } from '@api/dto/product.dto';
import BadRequestError from '@errors/BadRequestError';

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
  const filters = req.query as GetAllProductWithQueryDto;

  const productsResult = await productController.getAll(filters);
  const products = productsResult.rows;

  res.status(201).send(products);
});

productRouter.put('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const payload = req.body;

  const product = await productController.updateById(id, payload);

  res.status(201).send(product);
});

productRouter.delete(
  '/:id',
  authMiddleware,
  async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const isDeleted = await productController.deleteById(id);

    if (isDeleted) {
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

export default productRouter;
