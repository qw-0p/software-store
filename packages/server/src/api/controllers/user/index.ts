import { CreateUserDto, LoginUserDto } from '@api/dto/user.dto';
import { User } from '@api/interfaces/user.interface';
import * as userService from '@db/services/UserService';
import * as mapper from './mapper';
import BadRequestError from '@errors/BadRequestError';
import bcrypt from 'bcrypt';
import { generateToken } from '@lib/generate-token';
import { JwtPayload } from 'jsonwebtoken';

export const create = async (payload: CreateUserDto): Promise<string> => {
  const { email, password } = payload;
  if (!email || !password) {
    throw new BadRequestError({
      code: 400,
      message: 'Email and password are required',
      logging: true,
    });
  }
  const isExist = await getByEmail(email);

  if (isExist.id) {
    throw new BadRequestError({
      code: 400,
      message: 'User already exists',
      logging: true,
    });
  }

  const hashPassword = await bcrypt.hash(password, 5);

  const user = await userService.create({
    ...payload,
    email,
    password: hashPassword,
  });

  return generateToken(user.id, user.email, user.role);
};

export const login = async (payload: LoginUserDto): Promise<string> => {
  const { email, password } = payload;
  const user = await userService.getByEmail(email);
  const comparePassword = await bcrypt.compare(password, user.password ?? '');

  if (!user.email || !comparePassword) {
    throw new BadRequestError({
      code: 400,
      message: 'Email or password is incorrect',
      logging: true,
    });
  }

  return generateToken(user.id, user.email, user.role);
};

export const getByEmail = async (email: string): Promise<User> => {
  return mapper.toUser(await userService.getByEmail(email));
};

export const check = async (payload: JwtPayload) => {
  const { user } = payload;

  return user;
};
