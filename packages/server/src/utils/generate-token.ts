import jwt, { Secret } from 'jsonwebtoken';

export const generateToken = (
  id: number,
  email: string,
  role: string,
): string => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY as Secret, {
    expiresIn: '24h',
  });
};
