import { DataTypes, Model, Optional } from 'sequelize'
import dbConnection from '../config'

interface ExporterAttributes {
	id: number
	country: string
	flag?: string
	createdAt?: Date
	updatedAt?: Date
}

export interface ExporterInput
	extends Optional<ExporterAttributes, 'id' | 'flag'> {}

export interface ExporterOutput extends Required<ExporterAttributes> {}

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
		tableName: 'Exporter',
		timestamps: true,
		sequelize: dbConnection,
	},
)

export default Exporter
