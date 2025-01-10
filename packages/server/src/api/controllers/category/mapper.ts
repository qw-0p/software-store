import { CategoryOutput } from '@db/models/Category';
import { Type } from '@api/interfaces/type.interface';

export const toType = (type: CategoryOutput): Type => {
  return {
    id: type.id,
    name: type.name,
    ownerId: type.ownerId,
    createdAt: type.createdAt,
    updatedAt: type.updatedAt,
  };
};
