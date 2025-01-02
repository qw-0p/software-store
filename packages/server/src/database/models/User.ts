import { DataTypes, Model, Optional, CreationOptional } from 'sequelize';
import sequelize from '../config';
import { Role } from '../../types/user';

interface UserAttributes {
  id: number;
  email: string;
  password: string;
  role: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export type UserInput = Optional<UserAttributes, 'id' | 'role'>;

export type UserOutput = Required<UserAttributes>;

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
  declare id: CreationOptional<number>;
  declare email: string;
  declare password: string;
  declare role: Role;

  declare readonly createdAt: CreationOptional<Date>;
  declare readonly updatedAt: CreationOptional<Date>;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'USER',
    },
  },
  {
    tableName: 'users',
    sequelize,
  },
);

export default User;
