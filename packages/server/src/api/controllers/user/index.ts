import { CreateUserDto } from '../../dto/user.dto'
import { User } from '../../interfaces/user.interface'
import * as service from '../../../database/services/UserService'
import * as mapper from './mapper'
import BadRequestError from "../../../errors/BadRequestError";

export const create = async (payload: CreateUserDto): Promise<User> => {
	const {email, password} = payload
	console.log(email, password)
	if (!email || !password) {
		throw new BadRequestError({code: 400, message: "Email and password are required", logging: true})
	}

	return mapper.toUser(await service.create(payload))
}

export const getByEmail = async (email: string): Promise<User | null> => {
	return mapper.toUser(await service.getByEmail(email))
}
