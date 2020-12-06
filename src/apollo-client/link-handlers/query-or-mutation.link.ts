import fetch from "cross-fetch";
import { HttpLink } from "@apollo/client";

const queryOrMutationLink = new HttpLink({
  uri: process.env.API_URI ?? "https://localhost:5000/graphql",
  // credentials: "omit",
  fetch,
});

export default queryOrMutationLink;
