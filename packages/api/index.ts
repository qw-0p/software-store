import dotenv from 'dotenv'
import express, { Request, Response } from 'express'
import cors from 'cors'

dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

const port = process.env.API_PORT || 8001

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
	res.send('Hello, TypeScript Express!')
})

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})
