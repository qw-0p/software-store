import { UserInput, UserOutput } from '../models/User'
import { User } from './../models'

export const create = async (payload: UserInput): Promise<UserOutput> => {
	return await User.create(payload)
}

export const getByEmail = async (email: string): Promise<UserOutput> => {
	const user = await User.findOne({ where: { email } })
	return user ?? ({} as UserOutput)
}
