import React, { useEffect } from "react";
import jwtDecode, { JwtPayload } from "jwt-decode";
import { get } from "lodash";
import { useDispatch } from "react-redux";
import { TypeIssuerEnum } from "./constants/TypeIssuerEnum";
import { setCountryList } from "../store/actions/countryList.actions";

export const JwtComponent: React.FC<any> = () => {
  const dispatch = useDispatch();

  const _findTypeJwt = (type: string, issuer: string) => {
    return RegExp("\\b" + type + "\\b").test(issuer);
  };

  const _getTokenIssuer = (jwt: JwtPayload) => {
    return _findTypeJwt("cognito", jwt.iss!)
      ? TypeIssuerEnum.COGNITO
      : TypeIssuerEnum.AZURE;
  };

  useEffect(() => {
    const tokenDecoded = jwtDecode<JwtPayload>(localStorage.getItem("jwt")!);

    if (_getTokenIssuer(tokenDecoded) === TypeIssuerEnum.AZURE) {
      const countries = get(tokenDecoded, "roles", []).filter(
        (item: string) => item.indexOf("Country") > 0
      );

      dispatch(setCountryList(countries));
    }
  }, []);

  return <></>;
};
