import { Router } from 'express';
import userRouter from './users';
import typeRouter from './types';
import productRouter from './product';

const router = Router();

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/product', productRouter);

export default router;
