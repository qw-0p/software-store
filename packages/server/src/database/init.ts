import { createDatabase } from './createDatabase';
import sequelize from './config';
import './models';

const isDev = process.env.NODE_ENV === 'development';
const isTest = process.env.NODE_ENV !== 'test';
const isProd = process.env.NODE_ENV === 'production';

const init = async () => {
  try {
    await createDatabase();
    await sequelize.sync({ alter: isDev || isTest, force: isProd });
  } catch (error) {
    console.error('Error synchronizing tables:', error);
  }
};

export default init;
