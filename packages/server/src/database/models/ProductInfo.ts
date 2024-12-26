import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from '../config'

interface ProductInfoAttributes {
	id: number
	title: string
	description: string
	createdAt?: Date
	updatedAt?: Date
}

export type ProductInfoInput = Optional<ProductInfoAttributes, 'id'>

export type ProductInfoOutput = Required<ProductInfoAttributes>

class ProductInfo
	extends Model<ProductInfoAttributes, ProductInfoInput>
	implements ProductInfoAttributes
{
	declare id: number
	declare title: string
	declare description: string

	declare readonly createdAt?: Date
	declare readonly updatedAt?: Date
}

ProductInfo.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		title: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		tableName: 'product_info',
		sequelize,
	},
)

export default ProductInfo
