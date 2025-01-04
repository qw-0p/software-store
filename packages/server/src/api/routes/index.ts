import { Router } from 'express';
import userRouter from './users';
import typeRouter from './types';

const router = Router();

router.use('/user', userRouter);
router.use('/type', typeRouter);

export default router;
