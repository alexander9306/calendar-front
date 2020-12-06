import { createPersistedQueryLink } from "@apollo/client/link/persisted-queries";
import { sha256 } from "crypto-hash";

const persistedQuery = createPersistedQueryLink({
  sha256,
});

export default persistedQuery;
