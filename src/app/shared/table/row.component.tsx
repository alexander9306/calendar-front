import React, { MouseEvent, KeyboardEvent } from "react";
import { css } from "@emotion/core";

interface IRowProps {
  /**
   * @param header Determines if the row is for the headers
   */
  header?: boolean;
  /**
   * @param selected Determines if the current row is selected
   */
  selected?: boolean;
  /**
   * @param defaultPointer Set default pointer if true
   */
  defaultPointer?: boolean;
  /**
   * @param onClick Onclick event to perform.
   */
  onClick?: (event: MouseEvent | KeyboardEvent) => void;
}

/**
 * The row used with the table component
 * @component
 */
const Row: React.FunctionComponent<IRowProps> = ({
  children,
  defaultPointer,
  header,
  onClick,
}) => {
  return (
    <div
      role="button"
      onClick={onClick}
      onKeyPress={onClick}
      tabIndex={0}
      css={css`
  display: table;
  background: ${header ? "inherit" : `#fff`};
  width: 100% !important;

  &:hover {
    background-color: ${header ? "inherit" : `#ececff`};
    cursor: ${defaultPointer || header ? `default` : `pointer`};
  }

  @media screen and (max-width: 768px) {
    display: block;
    ${
      /* sc-custom */
      header
        ? `
      padding: 0;
      height: 0;`
        : ""
    }
  }

  @media (max-width: 768px) {
    border-bottom: 1px solid #f2f2f2;
    padding-bottom: 5px;
    padding-top: 5px;
    padding-right: 15px;
    margin: 0;
    width: 100% !important;
  }`}
    >
      {children}
    </div>
  );
};

export default Row;
