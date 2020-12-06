import { ApolloClient, ApolloLink } from "@apollo/client";
import { persistedQueryLink, queryOrMutationLink } from "./link-handlers";
import cache from "./cache";

const links = [queryOrMutationLink, persistedQueryLink];

const client = new ApolloClient({
  link: ApolloLink.from(links),
  cache,
});

export default client;
