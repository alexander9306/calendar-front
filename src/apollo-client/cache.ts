import { InMemoryCache } from "@apollo/client";
import localFields from "./local-fields";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: localFields,
    },
  },
});

export default cache;
