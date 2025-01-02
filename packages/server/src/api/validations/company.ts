import Joi from 'joi';

export const create = Joi.object().keys({
  name: Joi.string().required(),
  logo: Joi.string(),
});
