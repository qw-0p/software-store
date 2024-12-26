import jwt from 'jsonwebtoken'

const generateToken = (id, email, role) => {
	return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
		expiresIn: '24h',
	})
}
