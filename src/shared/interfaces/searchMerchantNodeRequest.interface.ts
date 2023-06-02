export interface filterInterface {
  merchantId?: string;
  status?: string;
  country?: string;
}

interface sortInterface {
  field: string;
  order: string;
}

export interface SearchMerchantNodeRequest {
  name?: string;
  entityName: string;
  path: string;
  isActive?: boolean;
  strictSearch: boolean;
  limit: number;
  offset: number;
  filter?: filterInterface;
  generalFilter?: string;
  sort?: sortInterface;
  from?: string;
  to?: string;
}
