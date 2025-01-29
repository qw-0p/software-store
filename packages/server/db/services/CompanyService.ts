import { CompanyOutput, CompanyInput } from '@db/models/Company';
import * as companyDal from '@db/dal/company';

export const create = async (payload: CompanyInput): Promise<CompanyOutput> => {
  return companyDal.create(payload);
};
