import { Router, Request, Response } from 'express'
import * as userController from '../controllers/user'
const userRouter = Router()

userRouter.post('/signup', async (req: Request, res: Response) => {
	const user = await userController.create(req.body)

	res.status(201).send(user)
})

export default userRouter
