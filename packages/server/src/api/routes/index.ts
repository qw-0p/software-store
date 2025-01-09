import { Router } from 'express';
import authRouter from './auth';
import typeRouter from './types';
import productRouter from './product';
import companyRouter from './company';

const router = Router();

router.use('/auth', authRouter);
router.use('/type', typeRouter);
router.use('/product', productRouter);
router.use('/company', companyRouter);

export default router;
