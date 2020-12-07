import { useEffect } from "react";
import { EventInput } from "@fullcalendar/react";
import useLoadingBar from "../shared/loading-bar.service";
import { useGetEventsQuery } from "../generated/api";

export default function useEventsAPI(): [typeof events, typeof error] {
  const { data, loading, error } = useGetEventsQuery();

  const events =
    data?.events.map<EventInput>((event) => ({
      id: event.id,
      title: event.name,
      start: event.start,
      end: event.end,
      allDay: true,
    })) ?? [];

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

  return [events, error];
}
