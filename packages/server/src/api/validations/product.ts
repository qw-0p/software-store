import Joi from 'joi';

export const create = Joi.object().keys({
  name: Joi.string().required(),
  price: Joi.number().required().max(1e9),
  description: Joi.string().required().max(250),
  companyId: Joi.number().required(),
  typeId: Joi.number(),
  imgUrl: Joi.string(),
});
