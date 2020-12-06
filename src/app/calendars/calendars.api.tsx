import { useEffect } from "react";
import useLoadingBar from "../shared/loading-bar.service";
import { useGetEventsQuery } from "../generated/api";

function useCalendarsAPI(): [typeof events, typeof loading] {
  const { data: { events } = { events: [] }, loading } = useGetEventsQuery();

  const [startLoading, stopLoading] = useLoadingBar();
  useEffect(() => {
    if (loading) {
      startLoading();
    } else {
      stopLoading();
    }
    // Disabled because needs to update the bar only when loading changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return [events, loading];
}

export default useCalendarsAPI;
