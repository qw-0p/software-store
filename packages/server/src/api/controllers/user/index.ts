import { CreateUserDto, LoginUserDto } from '@api/dto/user.dto';
import { IUser } from '@api/interfaces/user.interface';
import * as userService from '@db/services/UserService';
import * as mapper from './mapper';
import BadRequestError from '@errors/BadRequestError';
import argon2 from 'argon2';
import { generateToken } from '@utils/generate-token';
import { JwtPayload } from 'jsonwebtoken';
import { isEmpty } from '@utils/is-empty';

export const create = async (payload: CreateUserDto): Promise<string> => {
  const { password } = payload;
  const hashPassword = await argon2.hash(password);

  const user = await userService.create({
    ...payload,
    password: hashPassword,
  });

  return generateToken(user.id, user.email, user.role);
};

export const login = async (payload: LoginUserDto): Promise<string> => {
  const { email, password } = payload;
  const user = await userService.getByEmail(email);
  let comparePassword: boolean;

  if (isEmpty(user)) {
    comparePassword = false
  } else {
    comparePassword = await argon2.verify(user?.password, password)
  }

  if (!user.email || !comparePassword) {
    throw new BadRequestError({
      code: 400,
      message: 'Email or password is incorrect',
      logging: true,
    });
  }

  return generateToken(user.id, user.email, user.role);
};

export const getByEmail = async (email: string): Promise<IUser> => {
  return mapper.toUser(await userService.getByEmail(email));
};

export const check = async (payload: JwtPayload) => {
  const { user } = payload;

  return user;
};
