import { ObjectSchema } from 'joi';

import * as auth from './auth';
import * as company from './company';

import * as product from './product';

export default {
  '/auth/login': auth.login,
  '/auth/signup': auth.signup,
  '/company/create': company.create,
  '/product/create': product.create,
} as { [key: string]: ObjectSchema };
