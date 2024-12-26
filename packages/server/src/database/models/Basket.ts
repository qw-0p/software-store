import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from '../config'

interface BasketAttributes {
	id: number
}

export type BasketInput = Optional<BasketAttributes, 'id'>

export type BasketOutPut = Required<BasketAttributes>

class Basket
	extends Model<BasketAttributes, BasketInput>
	implements BasketAttributes
{
	declare id: number
}

Basket.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
	},
	{
		tableName: 'baskets',
		sequelize,
	},
)

export default Basket
