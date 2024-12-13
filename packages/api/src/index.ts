import dotenv from 'dotenv'
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })
import express, { Request, Response } from 'express'
import cors from 'cors'
import sequelize from './database'

const PORT = process.env.API_PORT || 8001
const VERSION = process.env.npm_package_version || '1'

const app = express()

app.use(express.json())
app.use(cors())

app.get(`/api/v${VERSION[0]}/`, (req: Request, res: Response) => {
	res.send('Hello, TypeScript Express!')
})

const start = async () => {
	try {
		await sequelize.authenticate()
		await sequelize.sync()
		app.listen(PORT, () => {
			console.log(`Server running at http://localhost:${PORT}`)
		})
	} catch (error) {
		console.error(error)
		process.exit(1)
	}
}

start()
