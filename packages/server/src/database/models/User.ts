import { DataTypes, Model } from 'sequelize'
import dbConnection from '../config'

interface UserAttributes {
	id: number
	email: string
	password: string
	role?: string
	createdAt?: Date
	updatedAt?: Date
}

type Role = 'USER' | 'ADMIN' | 'MODERATOR'

class User extends Model<UserAttributes> implements UserAttributes {
	declare id: number
	declare email: string
	declare password: string
	role?: Role
}

User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		email: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		role: {
			type: DataTypes.STRING,
			defaultValue: 'MODERATOR',
		},
	},
	{
		timestamps: true,
		sequelize: dbConnection,
		paranoid: true,
	},
)

export default User
