import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from '../config'

interface BasketAttributes {
	id: number
}

export interface BasketInput extends Optional<BasketAttributes, 'id'> {}

export interface BasketOutPut extends Required<BasketAttributes> {}

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
