import {
  DataTypes,
  Model,
  Optional,
  CreationOptional,
  ForeignKey,
} from 'sequelize';
import sequelize from '../config';
import { Type, User } from '.';

interface ProductAttributes {
  id: number;
  name: string;
  price: number;
  rating: number;
  typeId?: ForeignKey<Type['id']> | null;
  ownerId: ForeignKey<User['id']>;
  description: string;
  img?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type ProductInput = Optional<ProductAttributes, 'id' | 'img' | 'typeId'>;

export type ProductOutput = Required<ProductAttributes>;

class Product
  extends Model<ProductAttributes, ProductInput>
  implements ProductAttributes
{
  declare id: CreationOptional<number>;
  declare name: string;
  declare price: number;
  declare rating: number;
  declare typeId: ForeignKey<Type['id']> | null;
  declare ownerId: ForeignKey<User['id']>;
  declare description: string;
  declare img: string;

  declare readonly createdAt?: CreationOptional<Date>;
  declare readonly updatedAt?: CreationOptional<Date>;
}

Product.init(
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
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    typeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Type,
        key: 'id',
      },
      field: 'type_id',
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
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'products',
    sequelize,
  },
);

export default Product;
