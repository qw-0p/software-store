import { UserInput, UserOutput } from './../models/User'
import { User } from './../models'

export const create = async (payload: UserInput): Promise<UserOutput> => {
	const user = await User.create(payload)

	return user
}
