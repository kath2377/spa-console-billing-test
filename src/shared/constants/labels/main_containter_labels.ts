import { ConfigurationIdEnum } from "../../enums/ConfigurationIdEnum";

export const SIDEBAR = "sidebar";
export const SUB_MERCHANT = "Subcomercio";
export const OPEN_MODAL = "abrir modal";
export const CANCELAR = "Cancelar";
export const CENTRALIZAR = "Centralizar";
export const DESCENTRALIZAR = "Descentralizar";
export const CENTRALIZE_TEXT =
  "Al centralizar, los branches seleccionados perderán su información y replicarán la información del customer.";
export const DECENTRALIZE_DEFAULT_TEXT =
  "Al descentralizar, los branches seleccionados conservarán la información actual, misma que podrá ser editada individualmente.";
export const DECENTRALIZE_PROCESSORS_TEXT =
  "Al descentralizar, los branches seleccionados deberán ser modificados para agregar los procesadores que requiera de manera individual.";
export const DECENTRALIZE_BUSINESS_RULES_TEXT =
  "Al descentralizar, los branches seleccionados deberán ser modificados para agregar las reglas de negocio que requiera de manera individual.";
export const CENTRALIZE_TITLE = (numberbranches: number) =>
  `Se centralizarán ${numberbranches} branch(es), ¿deseas continuar?`;
export const DESCENTRALIZE_TITLE = (numberbranches: number) =>
  `Se descentralizarán ${numberbranches}  branch(es), ¿deseas continuar?`;
export const LIST_BRANCHES = "Listado de Branches";
export const CENTRALIZE_MESSAGE = "Para realizar una acción masiva ";
export const SELECT_BRANCHES = "Branches seleccionados: ";
export const TITLE_ALERT_BRANCH =
  "Los branches con país de constitución diferentes al customer serán modificados. ";
export const TITLE_ALERT_BRANCH_CEN =
  "Recuerda que el Customer debe tener las configuraciones completas en caso de que desees centralizar la configuracion de los branches.";
export const DESCRIPTION_ALERT_BRANCH =
  "Ten en cuenta que todos los branches, tendrán el mismo país de constitución del customer. Luego podrás modificarlo. ";
export const DESCRIPTION_ALERT_BRA_CEN =
  "Ten en cuenta que todos los branches, tendrán el mismo país de constitución del customer. Luego podrás modificarlo. ";

export const CENTRALIZE_MESSAGE2 = "(centralizar o descentralizar) ";
export const CENTRALIZE_MESSAGE3 =
  "los branches que selecciones deben tener el mismo grupo ";
export const CENTRALIZE_MESSAGE4 = "(centralizado o descentralizado).";
export const CENTRALIZE_TOOLTIP_DESCENTRALIZE =
  "Para realizar esta acción debes seleccionar sólo Branch(es) que este en el grupo Descentralizado";
export const CENTRALIZE_TOOLTIP_CENTRALIZE =
  "Para realizar esta acción debes seleccionar sólo Branch(es) que este en el grupo Centralizado";
export const M_CLIENTS = "M_CLIENTS";

export enum ComponentIdsEnum {
  M_CLIENTS_EDIT_CENTRALIZE = "M_CLIENTS.Edicion.Centralizar",
  M_CLIENTS_EDIT_DECENTRALIZE = "M_CLIENTS.Edicion.Desentralizar",
}

export const getDescentralizeModalText = (configurationId?: string): string => {
  switch (configurationId) {
    case ConfigurationIdEnum.CN007:
      return DECENTRALIZE_PROCESSORS_TEXT;
    case ConfigurationIdEnum.CN008:
      return DECENTRALIZE_BUSINESS_RULES_TEXT;
    default:
      return DECENTRALIZE_DEFAULT_TEXT;
  }
};
