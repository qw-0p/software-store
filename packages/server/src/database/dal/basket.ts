import { BasketInput, BasketOutput } from '../models/Basket';
import Basket from '../models/Basket';

export const create = async (payload: BasketInput): Promise<BasketOutput> => {
  return Basket.create(payload);
};
