import React from "react";
import { CContainer } from "@coreui/react";
import LoadingBar from "./loading-bar.component";
import Sidebar from "./sidebar.component";
import Footer from "./footer.component";
import Header from "./header.component";

import "../../../assets/scss/style.scss";

const Layout: React.FunctionComponent = ({ children }) => {
  if (typeof window === "undefined") return null;
  return (
    <>
      <LoadingBar />
      <div className="c-app c-default-layout">
        <Sidebar />
        <div className="c-wrapper">
          <Header />
          <div className="c-body">
            <main className="c-main">
              <CContainer fluid>{children}</CContainer>
            </main>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
