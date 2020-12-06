import React from "react";
import { CCol, CContainer, CRow } from "@coreui/react";

import SEO from "../seo";

const NotFound: React.FunctionComponent = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <SEO title="404: Not found" />
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="6">
            <div className="clearfix">
              <h1 className="float-left display-3 mr-4">404</h1>
              <h4 className="pt-3">NO ENCONTRADO.</h4>
              <p className="text-muted float-left">
                La página que esta tratando de acceder no existe.
              </p>
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default NotFound;
