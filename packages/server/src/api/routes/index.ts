import { Router } from 'express';
import authRouter from './auth';
import categoryRouter from './category';
import productRouter from './product';
import companyRouter from './company';

const router = Router();

router.use('/auth', authRouter);
router.use('/category', categoryRouter);
router.use('/product', productRouter);
router.use('/company', companyRouter);

export default router;
