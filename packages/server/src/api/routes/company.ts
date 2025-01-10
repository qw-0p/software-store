import { Request, Response, Router } from 'express';
import { authMiddleware, validationMiddleware } from '@api/middlewares';
import * as companyController from '@api/controllers/company';
import { CustomRequest } from '@pTypes/requests';

const companyRouter = Router();

companyRouter.post(
  '/',
  authMiddleware,
  validationMiddleware('/company/create'),
  async (req: Request, res: Response) => {
    const company = await companyController.create({
      ...req.body,
      creatorId: (req as CustomRequest).user.id,
    });

    res.status(201).send(company);
  },
);

export default companyRouter;
