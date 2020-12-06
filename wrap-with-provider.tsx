import React from "react";
import type { WrapRootElementNodeArgs } from "gatsby";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";

import store from "./src/app/store";
import client from "./src/apollo-client/client";

export default ({ element }: WrapRootElementNodeArgs): JSX.Element => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>{element}</ApolloProvider>
    </Provider>
  );

  // return <ApolloProvider client={client}>{element}</ApolloProvider>;
};
