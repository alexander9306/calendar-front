import {
  useUpdateEventMutation,
  useGetEventLazyQuery,
  useRemoveEventMutation,
  GetEventsDocument,
  GetEventsQuery,
} from "../generated/api";

export function useUpdateEventAPI(): [
  typeof updateEvent,
  typeof data,
  typeof updateEventError,
  typeof loading
] {
  const [
    updateEvent,
    { data, error: updateEventError, loading },
  ] = useUpdateEventMutation();

  return [updateEvent, data, updateEventError, loading];
}

export function useGetEventAPI(): [
  typeof getEvent,
  typeof foundEvent,
  typeof getEventError
] {
  const [getEvent, { data, error: getEventError }] = useGetEventLazyQuery();
  const foundEvent = data?.event;
  return [getEvent, foundEvent, getEventError];
}

export function useRemoveEventAPI(): [
  typeof removeEvent,
  typeof removedEventError
] {
  const [removeEvent, { error: removedEventError }] = useRemoveEventMutation({
    update(cache, { data }) {
      const existing = cache.readQuery({
        query: GetEventsDocument,
      }) as GetEventsQuery;
      cache.writeQuery({
        query: GetEventsDocument,
        data: {
          events: existing.events.filter(
            (event) => event.id !== data?.removeEvent.id
          ),
        },
      });
    },
  });
  return [removeEvent, removedEventError];
}
