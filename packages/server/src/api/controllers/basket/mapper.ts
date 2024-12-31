import { BasketOutput } from '@db/models/Basket';
import { Basket } from '@api/interfaces/basket.interface';

export const toBasket = (basket: BasketOutput): Basket => {
  return {
    id: basket.id,
    createdAt: basket.createdAt,
    updatedAt: basket.updatedAt,
  };
};
