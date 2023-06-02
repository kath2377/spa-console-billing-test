import { environment } from "../../environments/environment";

export const API_ROUTES = {
  ASYNC_MASSIVE_ACTION: `${environment.kushkiUrl}/hierarchy/v1/massive/action`,
  CENTRALIZE: `${environment.kushkiUrl}/hierarchy/v1/node/centralize`,
  CENTRALIZE_PROCESSORS: {
    CASH: `${environment.kushkiUrl}/cash/v1/centralizeProcessor`,
    PAYOUTS_CASH: `${environment.kushkiUrl}/payouts/cash/v1/centralizeProcessor`,
    PAYOUTS_TRANSFER: `${environment.kushkiUrl}/payouts/transfer/v1/centralizeProcessor`,
    TRANSFER: `${environment.kushkiUrl}/transfer/v1/centralizeProcessor`,
    TRANSFER_SUBS: `${environment.kushkiUrl}/transfer-subscriptions/v1/centralizeProcessor`,
    TRX_RULE: `${environment.kushkiUrl}/rules/v1/centralizeProcessor`,
  },
  DESCENTRALIZE: `${environment.kushkiUrl}/hierarchy/v1/node/decentralize`,
  HISTORICAL_REFUNDS: `${environment.kushkiUrl}/b2c-analytics/v1/refund-transaction-list`,
  NODE_INFO: `${environment.kushkiUrl}/billing-core-node/v1/node/info`,
  SEARCH_MERCHANT_NODE: `${environment.kushkiUrl}/billing-core-node/v1/merchant-node/search`,
  WS_DECENTRALIZATION: `wss://${environment.webSocketMassiveUrl}/billingcorenodews`,
};
