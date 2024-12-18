import { Router, Request, Response } from 'express'

import * as userController from '../controllers/user'

const userRouter = Router()

userRouter.post('/register', async (req: Request, res: Response) => {
	console.log(req.body)

	const user = await userController.create(req.body)

	res.status(201).send(user)
})

export default userRouter
