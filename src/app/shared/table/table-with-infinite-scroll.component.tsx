import React from "react";
import { CSpinner } from "@coreui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import Table from "./table.component";
import Row from "./row.component";
import Cell from "./cell.component";
import type { TableHeader, TableWithInfiniteScrollProps } from "./table.types";

/**
 * Table component with the infinite scroll feature
 * @component
 */
const TableWithInfiniteScroll: React.FunctionComponent<TableWithInfiniteScrollProps> = ({
  headers,
  fetchMoreData,
  hasMore,
  dataLength,
  loader,
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
      <Headers />
      <InfiniteScroll
        loader={loader}
        dataLength={dataLength}
        next={fetchMoreData}
        hasMore={hasMore}
      >
        {children}
      </InfiniteScroll>
      {isLoading && (
        <div className="text-center">
          <CSpinner color="primary" />
        </div>
      )}
    </Table>
  );
};

export default TableWithInfiniteScroll;
