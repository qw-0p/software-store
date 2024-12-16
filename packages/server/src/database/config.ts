import { Dialect, Sequelize } from 'sequelize'

const dbName = process.env.DB_NAME as string
const dbUser = process.env.DB_USER as string
const dbHost = process.env.DB_HOST as string
const dbDialect = 'postgres' as Dialect
const dbPassword = process.env.DB_PASSWORD
const dbPort = Number(process.env.DB_PORT)

const dbConnection = new Sequelize(dbName, dbUser, dbPassword, {
	dialect: dbDialect,
	host: dbHost,
	port: dbPort,
})

export default dbConnection
