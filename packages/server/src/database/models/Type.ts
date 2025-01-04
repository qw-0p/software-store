import { DataTypes, Model, Optional, CreationOptional } from 'sequelize';
import sequelize from '../config';
import { User } from '.';

interface TypeAttributes {
  id: number;
  name: string;
  ownerId: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export type TypeInput = Optional<TypeAttributes, 'id'>;

export type TypeOutput = Required<TypeAttributes>;

class Type extends Model<TypeAttributes, TypeInput> implements TypeAttributes {
  declare id: CreationOptional<number>;
  declare name: string;

  declare ownerId: number;

  declare readonly createdAt: CreationOptional<Date>;
  declare readonly updatedAt: CreationOptional<Date>;
}

Type.init(
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
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      },
    },
  },
  {
    tableName: 'types',
    sequelize,
  },
);

export default Type;
