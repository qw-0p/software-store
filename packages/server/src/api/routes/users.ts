import { Router, Request, Response } from 'express';
import * as userController from '../controllers/user';
import { authMiddleware, checkRoleMiddleware } from '@middlewares/.';
const userRouter = Router();

userRouter.post('/signup', async (req: Request, res: Response) => {
  const user = await userController.create(req.body);

  res.status(201).send(user);
});

userRouter.post('/login', async (req: Request, res: Response) => {
  const user = await userController.login(req.body);

  res.status(201).send(user);
});

userRouter.post(
  '/auth',
  authMiddleware,
  checkRoleMiddleware('ADMIN', 'MODERATOR'),
  async (req: Request, res: Response) => {
    const result = await userController.check(req);

    res.status(201).send(result);
  },
);

export default userRouter;
