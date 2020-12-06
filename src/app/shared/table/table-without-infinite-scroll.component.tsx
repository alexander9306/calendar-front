import React from "react";
import { CSpinner } from "@coreui/react";
import Table from "./table.component";
import Row from "./row.component";
import Cell from "./cell.component";
import type {
  TableHeader,
  TableWithoutInfiniteScrollProps,
} from "./table.types";

/**
 * A simple table component whithout the infinity scroll features
 * @component
 */
const TableWithoutInfiniteScroll: React.FunctionComponent<TableWithoutInfiniteScrollProps> = ({
  headers,
  children,
  isLoading,
}) => {
  const Headers: React.FunctionComponent = () => (
    <Row header>
      {headers.map((header, index) => {
        const { title, style } = header as TableHeader;
        if (title || style) {
          return (
            // Disable because the header is static
            // eslint-disable-next-line react/no-array-index-key
            <Cell style={style} key={index}>
              {title}
            </Cell>
          );
        }
        return (
          // Disable because the header is static
          // eslint-disable-next-line react/no-array-index-key
          <Cell key={index}>{header}</Cell>
        );
      })}
    </Row>
  );
  return (
    <Table>
      <Row header>
        <Headers />
      </Row>
      {children}
      {isLoading && (
        <div className="text-center">
          <CSpinner color="primary" />
        </div>
      )}
    </Table>
  );
};

export default TableWithoutInfiniteScroll;
