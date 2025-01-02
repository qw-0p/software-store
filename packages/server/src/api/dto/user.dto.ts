export type CreateUserDto = {
  email: string;
  password: string;
  role: string;
};

export type LoginUserDto = Pick<CreateUserDto, 'email' | 'password'>;
