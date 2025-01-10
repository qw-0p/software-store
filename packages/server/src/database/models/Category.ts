import {
  DataTypes,
  Model,
  Optional,
  CreationOptional,
  ForeignKey,
} from 'sequelize';
import sequelize from '../config';
import { User } from '.';

interface CategoryAttributes {
  id: number;
  name: string;
  ownerId: ForeignKey<User['id']>;
  createdAt?: Date;
  updatedAt?: Date;
}

export type CategoryInput = Optional<CategoryAttributes, 'id' | 'ownerId'>;

export type CategoryOutput = Required<CategoryAttributes>;

class Category
  extends Model<CategoryAttributes, CategoryInput>
  implements CategoryAttributes
{
  declare id: CreationOptional<number>;
  declare name: string;

  declare ownerId: ForeignKey<User['id']>;

  declare readonly createdAt: CreationOptional<Date>;
  declare readonly updatedAt: CreationOptional<Date>;
}

Category.init(
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
      field: 'owner_id',
    },
  },
  {
    tableName: 'categories',
    sequelize,
    timestamps: true,
  },
);

export default Category;
