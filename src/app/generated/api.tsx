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
  stringOrBoolean: any;
};

export type CreateEventInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  date: Scalars['DateTime'];
};


export type Event = {
  __typename?: 'Event';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  date: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
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
  isDarkTheme: Scalars['Boolean'];
  isLoggedIn: Scalars['Boolean'];
  loadingBarStatus: Scalars['Int'];
  sidebarShow: Scalars['stringOrBoolean'];
};


export type QueryEventArgs = {
  id: Scalars['ID'];
};


export type UpdateEventInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
};

export type GetEventsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEventsQuery = (
  { __typename?: 'Query' }
  & { events: Array<(
    { __typename?: 'Event' }
    & Pick<Event, 'id' | 'name' | 'date'>
  )> }
);

export type GetSideBarShowQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSideBarShowQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'sidebarShow'>
);

export type GetLoadingBarStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLoadingBarStatusQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'loadingBarStatus'>
);


export const GetEventsDocument = gql`
    query GetEvents {
  events {
    id
    name
    date
  }
}
    `;

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
export const GetSideBarShowDocument = gql`
    query GetSideBarShow {
  sidebarShow @client
}
    `;

/**
 * __useGetSideBarShowQuery__
 *
 * To run a query within a React component, call `useGetSideBarShowQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSideBarShowQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSideBarShowQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSideBarShowQuery(baseOptions?: Apollo.QueryHookOptions<GetSideBarShowQuery, GetSideBarShowQueryVariables>) {
        return Apollo.useQuery<GetSideBarShowQuery, GetSideBarShowQueryVariables>(GetSideBarShowDocument, baseOptions);
      }
export function useGetSideBarShowLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSideBarShowQuery, GetSideBarShowQueryVariables>) {
          return Apollo.useLazyQuery<GetSideBarShowQuery, GetSideBarShowQueryVariables>(GetSideBarShowDocument, baseOptions);
        }
export type GetSideBarShowQueryHookResult = ReturnType<typeof useGetSideBarShowQuery>;
export type GetSideBarShowLazyQueryHookResult = ReturnType<typeof useGetSideBarShowLazyQuery>;
export type GetSideBarShowQueryResult = Apollo.QueryResult<GetSideBarShowQuery, GetSideBarShowQueryVariables>;
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

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    