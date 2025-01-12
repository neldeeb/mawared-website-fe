import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import config from "../config";

const httpLink = createHttpLink({
  uri: `${config.API_PRODUCTION}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),

  cache: new InMemoryCache({
    addTypename: false,
  }),

  connectToDevTools: false,
  queryDeduplication: true,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
    },
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
    mutate: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
  },
});
