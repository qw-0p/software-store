import { CreateCompanyDto } from '@api/dto/company.dto';
import * as mapper from './mapper';
import * as companyService from '@db/services/CompanyService';

export const create = async (payload: CreateCompanyDto) => {
  return mapper.toCompany(await companyService.create(payload));
};
