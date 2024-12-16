import { DataTypes, Model, Optional } from 'sequelize'
import dbConnection from '../config'

interface UserAttributes {
	id: number
	email: string
	password: string
	role?: string
	createdAt?: Date
	updatedAt?: Date
}

type Role = 'USER' | 'ADMIN'

export interface UserInput extends Optional<UserAttributes, 'id'> {}

export interface UserOutput extends Required<UserAttributes> {}

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
	declare id: number
	declare email: string
	declare password: string
	declare role?: Role

	declare readonly createdAt?: Date
	declare readonly updatedAt?: Date
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
			defaultValue: 'USER',
		},
	},
	{
		tableName: 'Users',
		timestamps: true,
		sequelize: dbConnection,
	},
)

export default User
