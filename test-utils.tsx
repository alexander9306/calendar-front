// This is a prepare dependecy test - that's why this rule is disable
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { render, RenderResult } from "@testing-library/react";
import { ApolloProvider } from "@apollo/client";
import { setupServer } from "msw/node";
import userEvent from "@testing-library/user-event";
import client from "./src/apollo-client/client";
import requestHandlers from "./request-handlers";

const AllTheProviders: React.FunctionComponent = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CustomRender = (ui: JSX.Element, options?: any) => RenderResult;

const customRender: CustomRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };

const server = setupServer();

beforeAll(() => {
  server.listen({
    onUnhandledRequest: "error",
  });
  client.resetStore();
});
afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
  client.clearStore();
});

export { server, userEvent };
