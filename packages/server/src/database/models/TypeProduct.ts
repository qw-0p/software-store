import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from '../config'

interface ProductAttributes {
	id: number
	createdAt?: Date
	updatedAt?: Date
}

export interface ProductInput extends Optional<ProductAttributes, 'id'> {}

export interface ProductOutput extends Required<ProductAttributes> {}

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
