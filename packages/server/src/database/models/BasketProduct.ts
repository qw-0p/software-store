import { DataTypes, Model, Optional } from 'sequelize'
import dbConnection from '../config'

interface BasketProductAttributes {
	id: number
}

export interface BasketProductInput
	extends Optional<BasketProductAttributes, 'id'> {}

export interface BasketProductOutput
	extends Required<BasketProductAttributes> {}

class BasketProduct
	extends Model<BasketProductAttributes, BasketProductInput>
	implements BasketProductAttributes
{
	declare id: number
}

BasketProduct.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
	},
	{
		tableName: 'BasketProduct',
		sequelize: dbConnection,
	},
)

export default BasketProduct
