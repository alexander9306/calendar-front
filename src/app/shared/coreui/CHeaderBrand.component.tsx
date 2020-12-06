/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import { CHeaderBrand as CHeaderBrandProps } from "@coreui/react";
import CBrand from "./CBrand.component";

// component - CoreUI / CHeaderBrand

const CHeaderBrand: React.FunctionComponent<CHeaderBrandProps> = (props) => {
  return <CBrand {...props} className={["c-header-brand", props.className]} />;
};

export default CHeaderBrand;
