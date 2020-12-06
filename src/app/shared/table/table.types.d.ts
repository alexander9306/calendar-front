import type { HTMLAttributes } from "react";

interface TableHeader {
  title: string;
  style?: HTMLAttributes<HTMLDivElement>["style"];
}

/**
 * Table component with the infinite scroll properties
 * @properties
 */
export interface TableWithInfiniteScrollProps {
  /**
   * @param headers The headers of the table
   * @example
   * const headers = ["Nombre", "Apellido", <div>Estado</div>];
   * <TableWithInfiniteScroll headers={headers} />;
   */
  headers: Array<string | JSX.Element | TableHeader>;
  /**
   * @param fetchMoreData The function to fetch more elements as the user scroll
   * @example
   * const fetchMoreData = async () => fetchMore();
   * <TableWithInfiniteScroll fetchMoreData={fetchMoreData} />;
   */
  fetchMoreData: () => Promise<void> | void;
  /**
   * @param hasMore Determines if there's more data to fetch
   */
  hasMore: boolean;
  /**
   * @param dataLength A required property to fetch more data
   * @example
   * const data = ["Juan", "Jose"];
   * <TableWithInfiniteScroll dataLength={data.length} />;
   */
  dataLength: number;
  /**
   * @param isLoading Shows the spinner when is true
   */
  isLoading?: boolean;
  /**
   * @param loader An loader use to show a louding indator at the bottom of the table
   */
  loader?: JSX.Element;
}

/**
 * Table component without the infinite scroll properties
 * @properties
 */
export interface TableWithoutInfiniteScrollProps {
  /**
   * @param headers The headers of the table
   * @example
   * const headers = ["Nombre", "Apellido", <div>Estado</div>];
   * <TableWithoutInfiniteScroll headers={headers} />;
   */
  headers: Array<string | JSX.Element | TableHeader>;
  /**
   * @param isLoading Shows the spinner when is true
   */
  isLoading?: boolean;
}
