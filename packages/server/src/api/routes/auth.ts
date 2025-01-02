import { Router, Request, Response } from 'express';
import * as userController from '../controllers/user';
import {
  authMiddleware,
  checkRoleMiddleware,
  validationMiddleware,
} from '@api/middlewares';
import { Role } from '@pTypes/user';

const userRouter = Router();

userRouter.post(
  '/signup',
  validationMiddleware('/auth/signup'),
  async (req: Request, res: Response) => {
    const user = await userController.create(req.body);

    res.status(201).send(user);
  },
);

userRouter.post(
  '/login',
  validationMiddleware('/auth/login'),
  async (req: Request, res: Response) => {
    const user = await userController.login(req.body);

    res.status(201).send(user);
  },
);

userRouter.get(
  '/',
  authMiddleware,
  checkRoleMiddleware(Role.ADMIN, Role.MODERATOR),
  async (req: Request, res: Response) => {
    const result = await userController.check(req);

    res.status(201).send(result);
  },
);

export default userRouter;
