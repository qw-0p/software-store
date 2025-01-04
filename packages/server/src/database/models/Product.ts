import { DataTypes, Model, Optional, CreationOptional } from 'sequelize';
import sequelize from '../config';

interface ProductAttributes {
  id: number;
  name: string;
  price: number;
  rating: number;
  description: string;
  img?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type ProductInput = Optional<ProductAttributes, 'id' | 'img'>;

export type ProductOutput = Required<ProductAttributes>;

class Product
  extends Model<ProductAttributes, ProductInput>
  implements ProductAttributes
{
  declare id: CreationOptional<number>;
  declare name: string;
  declare price: number;
  declare rating: number;
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
