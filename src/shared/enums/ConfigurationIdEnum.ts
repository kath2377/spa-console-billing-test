export enum ConfigurationIdEnum {
  CN001 = "cn001",
  CN002 = "cn002",
  CN003 = "cn003",
  CN004 = "cn004",
  CN005 = "cn005",
  CN006 = "cn006",
  CN010 = "cn010",
  CN011 = "cn011",
  CN015 = "cn015",
  CN016 = "cn016",
  CN017 = "cn017",
  CN007 = "cn007",
  CN008 = "cn008",
  CN018 = "cn018",
  CN014 = "cn014",
}

/*cn001	Basic Data
cn002	Contact Data
cn003	Billing
cn004	Dispersion
cn005	Rates Settings
cn006	Discounts Settings
cn007	Proccessor
cn008	Routing Rules
cn009	Security rules
cn010	Deferred
cn011	Services
cn012	Account Preferences
cn013	Credentials
cn014	Webhooks
cn015	Legal Data
cn016	Billing Data
cn017	Charge
cn018 Minimo Comisional*/

export const ASYNC_DECENTRALIZATION_CONFIGS: string[] = [
  ConfigurationIdEnum.CN008,
  ConfigurationIdEnum.CN010,
];
