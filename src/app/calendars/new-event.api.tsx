import {
  useCreateEventMutation,
  GetEventsDocument,
  GetEventsQuery,
} from "../generated/api";

export default function useCreateEventsAPI(): [
  typeof createEvent,
  typeof createEventError,
  typeof loading
] {
  const [
    createEvent,
    { error: createEventError, loading },
  ] = useCreateEventMutation({
    update(cache, { data }) {
      const existing = cache.readQuery({
        query: GetEventsDocument,
      }) as GetEventsQuery;
      cache.writeQuery({
        query: GetEventsDocument,
        data: { events: [...existing.events, data?.createEvent] },
      });
    },
  });

  return [createEvent, createEventError, loading];
}
