import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config';

interface BasketAttributes {
  id: number;

  createdAt?: Date;
  updatedAt?: Date;
}

export type BasketInput = Optional<BasketAttributes, 'id'>;

export type BasketOutput = Required<BasketAttributes>;

class Basket
  extends Model<BasketAttributes, BasketInput>
  implements BasketAttributes
{
  declare id: number;

  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

Basket.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    tableName: 'baskets',
    sequelize,
  },
);

export default Basket;
