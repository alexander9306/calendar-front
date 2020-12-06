import React, { HTMLAttributes } from "react";
import { css } from "@emotion/core";

interface CellProps {
  /**
   * @param dataTitle It is used for showing the titles on small screens
   */
  dataTitle?: string;
  boldText?: boolean;
  style?: HTMLAttributes<HTMLDivElement>["style"];
}

/**
 * The cell used with the table component
 * @component
 */
const Cell: React.FunctionComponent<CellProps> = ({
  children,
  dataTitle,
  style,
  boldText,
}) => {
  const cellPadding = 15;

  return (
    <div
      style={style}
      css={css`
    display: table-cell;
    font-size: ${dataTitle ? `15px` : `18px`};
    color: ${dataTitle ? `#666` : `${boldText ? `#5b5959` : `#768192`}`};
    line-height: 1.2;
    font-weight: ${boldText ? `bold` : `unset`} !important;
    padding-top: ${dataTitle ? cellPadding : cellPadding - 1}px;
    padding-bottom: ${dataTitle ? cellPadding : cellPadding - 1}px;
    border-bottom: 1px solid #f2f2f2;

    &:nth-of-type(1) {
      width: 110px;
      padding-left: 50px;
    }

    &:nth-of-type(2) {
      width: 160px;
    }

    &:nth-of-type(3) {
      width: 110px;
    }

    &:nth-of-type(4) {
      width: 110px;
    }

    &:nth-of-type(5) {
      width: 100px;
    }

    @media screen and (max-width: 768px) {
      display: ${dataTitle ? `block;` : `none;`}
      ${
        dataTitle
          ? `
      &::before {
        font-size: 12px;
        color: #808080;
        line-height: 1.2;
        text-transform: uppercase;
        font-weight: unset !important;
        margin-bottom: 6px;
        content: attr(data-title);
        min-width: 98px;
        display: block;
      }
      `
          : ``
      }
    }

    @media (max-width: 768px) {
      width: 100% !important;
      border: none;
      padding-left: 30px;
      padding-top: ${cellPadding + 1}px;
      padding-bottom: ${cellPadding + 1}px;
      font-size: 17px;
      color: ${boldText ? `#5b5959` : `#555`};
      line-height: 1.2;
      font-weight: ${boldText ? `bold` : `unset`} !important;

      &:nth-of-type(1) {
        padding-left: 30px;
      }
    }
    `}
      data-title={dataTitle}
    >
      {children}
    </div>
  );
};

export default Cell;
