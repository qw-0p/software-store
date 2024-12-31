'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var sequelize_1 = require('sequelize');
var dbName = process.env.DB_NAME;
var dbUser = process.env.DB_USER;
var dbHost = process.env.DB_HOST;
var dbDialect = process.env.DB_DRIVER;
var dbPassword = process.env.DB_PASSWORD;
var dbPort = Number(process.env.DB_PORT);
var dbConnection = new sequelize_1.Sequelize(dbName, dbUser, dbPassword, {
  dialect: dbDialect,
  host: dbHost,
  port: dbPort,
});
exports.default = dbConnection;
