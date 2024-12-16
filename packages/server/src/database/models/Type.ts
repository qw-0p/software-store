import { DataTypes, Model, Optional } from 'sequelize'
import dbConnection from '../config'

interface TypeAttributes {
	id: number
	name: string
	createdAt?: Date
	updatedAt?: Date
}

export interface TypeInput extends Optional<TypeAttributes, 'id'> {}

export interface TypeOutput extends Required<TypeAttributes> {}

class Type extends Model<TypeAttributes, TypeInput> implements TypeAttributes {
	declare id: number
	declare name: string

	declare readonly createdAt?: Date
	declare readonly updatedAt?: Date
}

Type.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
		},
	},
	{
		tableName: 'Types',
		timestamps: true,
		sequelize: dbConnection,
	},
)

export default Type
