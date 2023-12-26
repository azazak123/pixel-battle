import { Client, cacheExchange, fetchExchange } from "@urql/core";

export const graphqlClient = new Client({
  url: `/graphql`,
  exchanges: [cacheExchange, fetchExchange],
});
