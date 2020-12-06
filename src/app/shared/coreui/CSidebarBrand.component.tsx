/* eslint react/prop-types: 0 */
import React from "react";
import type { CSidebarBrand as CSidebarBrandProps } from "@coreui/react";
import CBrand from "./CBrand.component";

// component - CoreUI / CSidebarBrand
const CSidebarBrand: React.FunctionComponent<CSidebarBrandProps> = (props) => {
  return <CBrand {...props} className={["c-sidebar-brand", props.className]} />;
};

export default CSidebarBrand;
