import {
  DataTypes,
  Model,
  Optional,
  CreationOptional,
  ForeignKey,
} from 'sequelize';
import sequelize from '../config';
import User from './User';
import Type from './Type';
import Company from './Company';

interface ProductAttributes {
  id: number;
  name: string;
  price: number;
  rating: number;
  ownerId: ForeignKey<User['id']>;
  companyId: ForeignKey<Company['id']>;
  description: string;
  typeId?: ForeignKey<Type['id']>;
  img?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type ProductInput = Optional<
  ProductAttributes,
  'id' | 'img' | 'typeId' | 'rating'
>;

export type ProductOutput = Required<ProductAttributes>;

class Product
  extends Model<ProductAttributes, ProductInput>
  implements ProductAttributes
{
  declare id: CreationOptional<number>;
  declare name: string;
  declare price: number;
  declare rating: number;
  declare ownerId: ForeignKey<User['id']>;
  declare description: string;
  declare companyId: ForeignKey<Company['id']>;

  declare img?: string;
  declare typeId?: ForeignKey<Type['id']>;

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
      type: DataTypes.FLOAT,
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
    companyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Company,
        key: 'id',
      },
      field: 'company_id',
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
    timestamps: true,
  },
);

export default Product;
