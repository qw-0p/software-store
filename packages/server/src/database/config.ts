import { Dialect, Sequelize } from 'sequelize';

const isDev = process.env.NODE_ENV === 'development';

const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USER as string;
const dbHost = process.env.DB_HOST as string;
const dbDialect = process.env.DB_DRIVER as Dialect;
const dbPassword = process.env.DB_PASSWORD;
const dbPort = Number(process.env.DB_PORT);

const dbConnection = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: dbDialect,
  host: dbHost,
  port: dbPort,
  ...(!isDev && { logging: false }),
});

export default dbConnection;
