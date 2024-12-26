import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from '../config'

interface ExporterAttributes {
	id: number
	country: string
	flag?: string
	createdAt?: Date
	updatedAt?: Date
}

export type ExporterInput = Optional<ExporterAttributes, 'id' | 'flag'>

export type ExporterOutput = Required<ExporterAttributes>

class Exporter
	extends Model<ExporterAttributes, ExporterInput>
	implements ExporterAttributes
{
	declare id: number
	declare country: string
	declare img: string

	declare readonly createdAt?: Date
	declare readonly updatedAt?: Date
}

Exporter.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		country: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
		},
		flag: {
			type: DataTypes.STRING,
		},
	},
	{
		tableName: 'exporters',
		sequelize,
	},
)

export default Exporter
