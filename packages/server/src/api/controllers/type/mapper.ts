import { TypeOutput } from '@db/models/Type';
import { Type } from '@api/interfaces/type.interface';

export const toType = (type: TypeOutput): Type => {
  return {
    id: type.id,
    name: type.name,
    ownerId: type.ownerId,
    createdAt: type.createdAt,
    updatedAt: type.updatedAt,
  };
};
