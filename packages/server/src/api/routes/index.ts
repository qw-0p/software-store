import { Router } from 'express';
import userRouter from './users';
import typeRouter from './types';
import productRouter from './product';
import companyRouter from './company';

const router = Router();

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/product', productRouter);
router.use('/company', companyRouter);

export default router;
