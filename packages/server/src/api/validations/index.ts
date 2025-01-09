import { ObjectSchema } from 'joi';

import * as auth from './auth';

export default {
  '/auth/login': auth.authLogin,
  '/auth/signup': auth.authSignup,
} as { [key: string]: ObjectSchema };
