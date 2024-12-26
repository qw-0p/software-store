import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from '../config'

interface ProductAttributes {
	id: number
	createdAt?: Date
	updatedAt?: Date
}

export type ProductInput = Optional<ProductAttributes, 'id'>

export type ProductOutput = Required<ProductAttributes>

class TypeProduct
	extends Model<ProductAttributes, ProductInput>
	implements ProductAttributes
{
	declare id: number

	declare readonly createdAt?: Date
	declare readonly updatedAt?: Date
}

TypeProduct.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
	},
	{
		tableName: 'type_product',
		sequelize,
	},
)

export default TypeProduct
