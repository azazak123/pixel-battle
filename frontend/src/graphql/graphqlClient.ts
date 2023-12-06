import { Client, cacheExchange, fetchExchange } from "@urql/core";

export const graphqlClient = new Client({
  url: import.meta.env.VITE_GRAPHQL_URL,
  exchanges: [cacheExchange, fetchExchange],
});
