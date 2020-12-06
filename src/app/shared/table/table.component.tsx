import React from "react";
import { css } from "@emotion/core";

const Table: React.FunctionComponent = ({ children }) => {
  return (
    <div
      css={css`
  display: table;
  margin: 0;
  width: 100% !important;

  @media screen and (max-width: 768px) {
    display: block;
  }
`}
    >
      {children}
    </div>
  );
};

export default Table;
