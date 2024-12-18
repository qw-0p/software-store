import User, { UserInput, UserOutput } from '../models/User'
import * as userDal from '../dal/user'

export const create = async (payload: UserInput): Promise<UserOutput> => {
	return userDal.create(payload)
}
