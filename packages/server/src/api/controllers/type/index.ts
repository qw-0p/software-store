import { CreateTypeDto, RemoveTypeDto } from '@api/dto/type.dto';
import * as mapper from './mapper';
import * as typeService from '@db/services/TypeService';

export const create = async (payload: CreateTypeDto) => {
  return mapper.toType(await typeService.create(payload));
};

export const remove = async (payload: RemoveTypeDto) => {
  return await typeService.remove(payload);
};
