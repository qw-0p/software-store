import { DataTypes, Model, Optional } from 'sequelize'
import dbConnection from '../config'

interface RatingAttributes {
	id: number
	rate: number
	createdAt?: Date
	updatedAt?: Date
}

export interface RatingInput extends Optional<RatingAttributes, 'id'> {}

export interface RatingOutput extends Required<RatingAttributes> {}

class Rating
	extends Model<RatingAttributes, RatingInput>
	implements RatingAttributes
{
	declare id: number
	declare rate: number

	declare readonly createdAt?: Date
	declare readonly updatedAt?: Date
}

Rating.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		rate: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
		},
	},
	{
		tableName: 'Ratings',
		timestamps: true,
		sequelize: dbConnection,
	},
)

export default Rating
