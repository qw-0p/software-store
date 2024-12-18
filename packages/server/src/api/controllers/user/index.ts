import { CreateUserDto } from '../../dto/user.dto'
import { User } from '../../interfaces/user.interface'
import * as service from '../../../database/services/UserService'
import * as mapper from './mapper'

export const create = async (payload: CreateUserDto): Promise<User> => {
	return mapper.toUser(await service.create(payload))
}
