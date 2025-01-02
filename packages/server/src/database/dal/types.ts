type Filter = {
  limit: string;
  page: string;
};
export interface GetAllProductFilters extends Filter {
  ownerId: string;
  companyId: string;
  categoryId: string;
}
