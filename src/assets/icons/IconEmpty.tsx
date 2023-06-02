import * as React from "react";
import { SvgIcon as MuiSvgIcon, styled, SvgIconProps } from "@mui/material";

const SvgIcon = styled(MuiSvgIcon, {
  name: "IconEmpty",
  shouldForwardProp: (prop) => prop !== "fill",
})<SvgIconProps>(({ color, fontSize }) => ({
  fill: color + "!important",
  fontSize: fontSize,
}));

SvgIcon.defaultProps = {
  viewBox: "0 0 24 0",
  focusable: "false",
  "aria-hidden": "true",
};

const IconEmpty: React.FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon
      {...props}
      width="24"
      height="0"
      viewBox="0 0 24 0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      fontSize={"small"}
    />
  );
};

export default IconEmpty;
