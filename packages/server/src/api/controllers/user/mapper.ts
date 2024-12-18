import { UserOutput } from '../../../database/models/User'
import { User } from '../../interfaces/user.interface'

export const toUser = (user: UserOutput): User => {
	return {
		id: user.id,
		email: user.email,
		password: user.password,
		role: user.role,
		createdAt: user.createdAt,
		updatedAt: user.updatedAt,
	}
}
