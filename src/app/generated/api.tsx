import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: string;
  Function: any;
};

export type CreateEventInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  start: Scalars['DateTime'];
  end: Scalars['DateTime'];
};


export type Event = {
  __typename?: 'Event';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  start: Scalars['DateTime'];
  end: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type EventModal = {
  __typename?: 'EventModal';
  show: Scalars['Boolean'];
  selectInfo?: Maybe<Scalars['Function']>;
};


export type Mutation = {
  __typename?: 'Mutation';
  createEvent: Event;
  updateEvent: Event;
  removeEvent: Event;
};


export type MutationCreateEventArgs = {
  createEventInput: CreateEventInput;
};


export type MutationUpdateEventArgs = {
  updateEventInput: UpdateEventInput;
};


export type MutationRemoveEventArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  event: Event;
  events: Array<Event>;
  loadingBarStatus: Scalars['Int'];
  newEventModal: EventModal;
};


export type QueryEventArgs = {
  id: Scalars['ID'];
};

export type UpdateEventInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
};

export type GetEventsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEventsQuery = (
  { __typename?: 'Query' }
  & { events: Array<(
    { __typename?: 'Event' }
    & NewEventFragment
  )> }
);

export type GetEventQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetEventQuery = (
  { __typename?: 'Query' }
  & { event: (
    { __typename?: 'Event' }
    & Pick<Event, 'description'>
    & NewEventFragment
  ) }
);

export type CreateEventMutationVariables = Exact<{
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  start: Scalars['DateTime'];
  end: Scalars['DateTime'];
}>;


export type CreateEventMutation = (
  { __typename?: 'Mutation' }
  & { createEvent: (
    { __typename?: 'Event' }
    & NewEventFragment
  ) }
);

export type UpdateEventMutationVariables = Exact<{
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  start: Scalars['DateTime'];
  end: Scalars['DateTime'];
}>;


export type UpdateEventMutation = (
  { __typename?: 'Mutation' }
  & { updateEvent: (
    { __typename?: 'Event' }
    & Pick<Event, 'description'>
    & NewEventFragment
  ) }
);

export type RemoveEventMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RemoveEventMutation = (
  { __typename?: 'Mutation' }
  & { removeEvent: (
    { __typename?: 'Event' }
    & Pick<Event, 'id'>
  ) }
);

export type NewEventFragment = (
  { __typename?: 'Event' }
  & Pick<Event, 'id' | 'name' | 'start' | 'end'>
);

export type GetLoadingBarStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLoadingBarStatusQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'loadingBarStatus'>
);

export type GetNewEventModalStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNewEventModalStatusQuery = (
  { __typename?: 'Query' }
  & { newEventModal: (
    { __typename?: 'EventModal' }
    & Pick<EventModal, 'show' | 'selectInfo'>
  ) }
);

export const NewEventFragmentDoc = gql`
    fragment NewEvent on Event {
  id
  name
  start
  end
}
    `;
export const GetEventsDocument = gql`
    query GetEvents {
  events {
    ...NewEvent
  }
}
    ${NewEventFragmentDoc}`;

/**
 * __useGetEventsQuery__
 *
 * To run a query within a React component, call `useGetEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetEventsQuery(baseOptions?: Apollo.QueryHookOptions<GetEventsQuery, GetEventsQueryVariables>) {
        return Apollo.useQuery<GetEventsQuery, GetEventsQueryVariables>(GetEventsDocument, baseOptions);
      }
export function useGetEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventsQuery, GetEventsQueryVariables>) {
          return Apollo.useLazyQuery<GetEventsQuery, GetEventsQueryVariables>(GetEventsDocument, baseOptions);
        }
export type GetEventsQueryHookResult = ReturnType<typeof useGetEventsQuery>;
export type GetEventsLazyQueryHookResult = ReturnType<typeof useGetEventsLazyQuery>;
export type GetEventsQueryResult = Apollo.QueryResult<GetEventsQuery, GetEventsQueryVariables>;
export const GetEventDocument = gql`
    query GetEvent($id: ID!) {
  event(id: $id) {
    ...NewEvent
    description
  }
}
    ${NewEventFragmentDoc}`;

/**
 * __useGetEventQuery__
 *
 * To run a query within a React component, call `useGetEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetEventQuery(baseOptions: Apollo.QueryHookOptions<GetEventQuery, GetEventQueryVariables>) {
        return Apollo.useQuery<GetEventQuery, GetEventQueryVariables>(GetEventDocument, baseOptions);
      }
export function useGetEventLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventQuery, GetEventQueryVariables>) {
          return Apollo.useLazyQuery<GetEventQuery, GetEventQueryVariables>(GetEventDocument, baseOptions);
        }
export type GetEventQueryHookResult = ReturnType<typeof useGetEventQuery>;
export type GetEventLazyQueryHookResult = ReturnType<typeof useGetEventLazyQuery>;
export type GetEventQueryResult = Apollo.QueryResult<GetEventQuery, GetEventQueryVariables>;
export const CreateEventDocument = gql`
    mutation CreateEvent($id: ID!, $name: String!, $description: String, $start: DateTime!, $end: DateTime!) {
  createEvent(createEventInput: {id: $id, name: $name, description: $description, start: $start, end: $end}) {
    ...NewEvent
  }
}
    ${NewEventFragmentDoc}`;
export type CreateEventMutationFn = Apollo.MutationFunction<CreateEventMutation, CreateEventMutationVariables>;

/**
 * __useCreateEventMutation__
 *
 * To run a mutation, you first call `useCreateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEventMutation, { data, loading, error }] = useCreateEventMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      start: // value for 'start'
 *      end: // value for 'end'
 *   },
 * });
 */
export function useCreateEventMutation(baseOptions?: Apollo.MutationHookOptions<CreateEventMutation, CreateEventMutationVariables>) {
        return Apollo.useMutation<CreateEventMutation, CreateEventMutationVariables>(CreateEventDocument, baseOptions);
      }
export type CreateEventMutationHookResult = ReturnType<typeof useCreateEventMutation>;
export type CreateEventMutationResult = Apollo.MutationResult<CreateEventMutation>;
export type CreateEventMutationOptions = Apollo.BaseMutationOptions<CreateEventMutation, CreateEventMutationVariables>;
export const UpdateEventDocument = gql`
    mutation UpdateEvent($id: ID!, $name: String!, $description: String, $start: DateTime!, $end: DateTime!) {
  updateEvent(updateEventInput: {id: $id, name: $name, description: $description, start: $start, end: $end}) {
    ...NewEvent
    description
  }
}
    ${NewEventFragmentDoc}`;
export type UpdateEventMutationFn = Apollo.MutationFunction<UpdateEventMutation, UpdateEventMutationVariables>;

/**
 * __useUpdateEventMutation__
 *
 * To run a mutation, you first call `useUpdateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEventMutation, { data, loading, error }] = useUpdateEventMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      start: // value for 'start'
 *      end: // value for 'end'
 *   },
 * });
 */
export function useUpdateEventMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEventMutation, UpdateEventMutationVariables>) {
        return Apollo.useMutation<UpdateEventMutation, UpdateEventMutationVariables>(UpdateEventDocument, baseOptions);
      }
export type UpdateEventMutationHookResult = ReturnType<typeof useUpdateEventMutation>;
export type UpdateEventMutationResult = Apollo.MutationResult<UpdateEventMutation>;
export type UpdateEventMutationOptions = Apollo.BaseMutationOptions<UpdateEventMutation, UpdateEventMutationVariables>;
export const RemoveEventDocument = gql`
    mutation RemoveEvent($id: ID!) {
  removeEvent(id: $id) {
    id
  }
}
    `;
export type RemoveEventMutationFn = Apollo.MutationFunction<RemoveEventMutation, RemoveEventMutationVariables>;

/**
 * __useRemoveEventMutation__
 *
 * To run a mutation, you first call `useRemoveEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeEventMutation, { data, loading, error }] = useRemoveEventMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveEventMutation(baseOptions?: Apollo.MutationHookOptions<RemoveEventMutation, RemoveEventMutationVariables>) {
        return Apollo.useMutation<RemoveEventMutation, RemoveEventMutationVariables>(RemoveEventDocument, baseOptions);
      }
export type RemoveEventMutationHookResult = ReturnType<typeof useRemoveEventMutation>;
export type RemoveEventMutationResult = Apollo.MutationResult<RemoveEventMutation>;
export type RemoveEventMutationOptions = Apollo.BaseMutationOptions<RemoveEventMutation, RemoveEventMutationVariables>;
export const GetLoadingBarStatusDocument = gql`
    query GetLoadingBarStatus {
  loadingBarStatus @client
}
    `;

/**
 * __useGetLoadingBarStatusQuery__
 *
 * To run a query within a React component, call `useGetLoadingBarStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLoadingBarStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLoadingBarStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLoadingBarStatusQuery(baseOptions?: Apollo.QueryHookOptions<GetLoadingBarStatusQuery, GetLoadingBarStatusQueryVariables>) {
        return Apollo.useQuery<GetLoadingBarStatusQuery, GetLoadingBarStatusQueryVariables>(GetLoadingBarStatusDocument, baseOptions);
      }
export function useGetLoadingBarStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLoadingBarStatusQuery, GetLoadingBarStatusQueryVariables>) {
          return Apollo.useLazyQuery<GetLoadingBarStatusQuery, GetLoadingBarStatusQueryVariables>(GetLoadingBarStatusDocument, baseOptions);
        }
export type GetLoadingBarStatusQueryHookResult = ReturnType<typeof useGetLoadingBarStatusQuery>;
export type GetLoadingBarStatusLazyQueryHookResult = ReturnType<typeof useGetLoadingBarStatusLazyQuery>;
export type GetLoadingBarStatusQueryResult = Apollo.QueryResult<GetLoadingBarStatusQuery, GetLoadingBarStatusQueryVariables>;
export const GetNewEventModalStatusDocument = gql`
    query GetNewEventModalStatus {
  newEventModal @client {
    show
    selectInfo
  }
}
    `;

/**
 * __useGetNewEventModalStatusQuery__
 *
 * To run a query within a React component, call `useGetNewEventModalStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNewEventModalStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNewEventModalStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetNewEventModalStatusQuery(baseOptions?: Apollo.QueryHookOptions<GetNewEventModalStatusQuery, GetNewEventModalStatusQueryVariables>) {
        return Apollo.useQuery<GetNewEventModalStatusQuery, GetNewEventModalStatusQueryVariables>(GetNewEventModalStatusDocument, baseOptions);
      }
export function useGetNewEventModalStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNewEventModalStatusQuery, GetNewEventModalStatusQueryVariables>) {
          return Apollo.useLazyQuery<GetNewEventModalStatusQuery, GetNewEventModalStatusQueryVariables>(GetNewEventModalStatusDocument, baseOptions);
        }
export type GetNewEventModalStatusQueryHookResult = ReturnType<typeof useGetNewEventModalStatusQuery>;
export type GetNewEventModalStatusLazyQueryHookResult = ReturnType<typeof useGetNewEventModalStatusLazyQuery>;
export type GetNewEventModalStatusQueryResult = Apollo.QueryResult<GetNewEventModalStatusQuery, GetNewEventModalStatusQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    