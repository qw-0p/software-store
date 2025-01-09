import Joi from 'joi';
import { Role } from '@pTypes/user';

const PASSWORD_REGEX = new RegExp(
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!.@#$%^&*])(?=.{8,})',
);

export const authLogin = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const authSignup = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().pattern(PASSWORD_REGEX).min(8).required(),
  role: Joi.string()
    .valid(...Object.values(Role))
    .required(),
});
