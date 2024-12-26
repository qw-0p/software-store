import { CreateUserDto } from '../../dto/user.dto'
import { User } from '../../interfaces/user.interface'
import * as service from '../../../database/services/UserService'
import * as mapper from './mapper'

export const create = async (payload: CreateUserDto): Promise<User> => {
	const {email, password} = payload
	if (!email || !password) {

	}

	return mapper.toUser(await service.create(payload))
}

export const getByEmail = async (email: string): Promise<User | null> => {
	return mapper.toUser(await service.getByEmail(email))
}
