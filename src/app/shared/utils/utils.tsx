import { useEffect, useRef } from "react";

function getMinutesFromDate(date: Date) {
  const minutes = date.getMinutes();
  return minutes > 9 ? minutes.toString() : `0${minutes}`;
}

/**
 * Format dates into a very readable date string
 * @param  {Date | string} date the date to transform
 * @example
 * // returns 16/7/2020 12:51
 * dateFormatter("2020-07-16T16:51:08.000Z");
 */
export function dateFormatter(date: Date | string): string {
  const givenDate = typeof date === "string" ? new Date(date) : date;

  const [day, month, year, hours, minutes] = [
    new Intl.DateTimeFormat("es-DO", {
      day: "2-digit",
    }).format(givenDate),
    new Intl.DateTimeFormat("es-DO", {
      month: "2-digit",
    }).format(givenDate),
    new Intl.DateTimeFormat("es-DO", {
      year: "numeric",
    }).format(givenDate),
    new Intl.DateTimeFormat("es-DO", {
      hour: "2-digit",
      hour12: false,
    }).format(givenDate),
    getMinutesFromDate(givenDate),
  ];

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

/**
 * Avoid an async call to run or edit the dom if current component is not mounted
 * @example
 * const isMountedRef = useIsMountedRef();
 * function asyncAPICall {
 * // True if current commponent is mounted, false otherwise.
 *  if(isMountedRef.current) {
 *    doAsyncCallWithSideEffects()
 *  }
 * };
 */
export function useIsMountedRef(): typeof isMountedRef {
  const isMountedRef = useRef(false);
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  });
  return isMountedRef;
}
