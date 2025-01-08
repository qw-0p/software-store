import { Request, Response, Router } from 'express';
import { authMiddleware } from '@api/middlewares/auth';
import * as companyController from '@api/controllers/company';
import { CustomRequest } from '@pTypes/requests';

const companyRouter = Router();

companyRouter.post('/', authMiddleware, async (req: Request, res: Response) => {
  const company = await companyController.create({
    ...req.body,
    creatorId: (req as CustomRequest).user.id,
  });

  res.status(201).send(company);
});

export default companyRouter;
