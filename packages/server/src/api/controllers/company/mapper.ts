import { CompanyOutput } from '@db/models/Company';
import { ICompany } from '@api/interfaces/company.interface';

export const toCompany = (product: CompanyOutput): ICompany => {
  return {
    id: product.id,
    name: product.name,
    logo: product.logo,
    ownerId: product.ownerId,
    createdAt: product.createdAt,
    updatedAt: product.updatedAt,
  };
};
