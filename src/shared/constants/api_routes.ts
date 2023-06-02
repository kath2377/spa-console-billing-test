import { environment } from "../../environments/environment";

export const API_ROUTES = {
  SEARCH_BILLING: `${environment.kushkiUrl}/billing-core/searchBilling`,
  BILLING_FILE: `${environment.envName}/usrv-billing-core/file/transactions-billing/`,
};
