import { defaultTo, get } from "lodash";

export class auth {
  public static getAuthMerchant(): object {
    return JSON.parse(
      defaultTo(localStorage.getItem("merchantBasicInformation"), "{}")
    );
  }

  public static isAdmin(): boolean {
    return get(auth._getPayload(), "[cognito:groups]", []).includes(
      "BackofficeAdmin"
    );
  }

  public static publicMerchantId(): string {
    return get(auth._getPayload(), "preferred_username", "");
  }

  private static _getPayload(): object {
    return JSON.parse(defaultTo(localStorage.getItem("payload"), "{}"));
  }
}
