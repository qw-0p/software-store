import {
  DataTypes,
  Model,
  Optional,
  CreationOptional,
  ForeignKey,
} from 'sequelize';
import sequelize from '../config';
import User from './User';
import Category from './Category';
import Company from './Company';

interface ProductAttributes {
  id: number;
  name: string;
  price: number;
  rating: number;
  ownerId: ForeignKey<User['id']>;
  companyId: ForeignKey<Company['id']>;
  description: string;
  slug: string;
  categoryId?: ForeignKey<Category['id']>;
  img?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type ProductInput = Optional<
  ProductAttributes,
  'id' | 'slug' | 'rating'
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

  declare slug: string;
  declare img: string;
  declare categoryId: ForeignKey<Category['id']>;

  declare readonly createdAt: CreationOptional<Date>;
  declare readonly updatedAt: CreationOptional<Date>;
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
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: Category,
        key: 'id',
      },
      field: 'category_id',
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
      type: DataTypes.TEXT,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    img: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'products',
    sequelize,
    paranoid: true,
  },
);

export default Product;
