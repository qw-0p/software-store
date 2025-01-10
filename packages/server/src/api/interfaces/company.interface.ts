export interface Company {
  id: number;
  name: string;
  logo?: string;
  ownerId: number;
  createdAt?: Date;
  updatedAt?: Date;
}
