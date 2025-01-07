import Company, { CompanyOutput, CompanyInput } from '../models/Company';
import DatabaseError from '@errors/DatabaseError';

export const create = async (payload: CompanyInput): Promise<CompanyOutput> => {
  try {
    const product = await Company.create(payload);
    return product as CompanyOutput;
  } catch (error: unknown) {
    throw new DatabaseError({
      code: 500,
      message: 'Something went wrong',
      logging: true,
      context: { error },
    });
  }
};
