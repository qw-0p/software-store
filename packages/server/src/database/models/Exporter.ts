import { DataTypes, Model, Optional, CreationOptional } from 'sequelize';
import sequelize from '../config';

interface ExporterAttributes {
  id: CreationOptional<number>;
  name: string;
  logo?: string;
  origin?: string;
  createdAt?: CreationOptional<Date>;
  updatedAt?: CreationOptional<Date>;
}

export type ExporterInput = Optional<
  ExporterAttributes,
  'id' | 'logo' | 'origin'
>;

export type ExporterOutput = Required<ExporterAttributes>;

class Exporter
  extends Model<ExporterAttributes, ExporterInput>
  implements ExporterAttributes
{
  declare id: CreationOptional<number>;
  declare name: string;
  declare logo: string;
  declare origin: string;

  declare readonly createdAt?: CreationOptional<Date>;
  declare readonly updatedAt?: CreationOptional<Date>;
}

Exporter.init(
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
    origin: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: 'exporters',
    sequelize,
  },
);

export default Exporter;
