import { CreateCompanyDto } from '@api/dto/company.dto';
import * as mapper from './mapper';
import * as companyService from '@db/services/CompanyService';
import { ICompany } from '@api/interfaces/company.interface';

export const create = async (payload: CreateCompanyDto): Promise<ICompany> => {
  return mapper.toCompany(await companyService.create(payload));
};
