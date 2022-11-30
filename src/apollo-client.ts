import { InMemoryCache, HttpLink, ApolloClient } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import config from "./config";
import { getToken } from "./token";

const cache = new InMemoryCache();

const link = new HttpLink({
  uri: config.graphql.url,
});

const authLink = setContext((_, { headers }) => {
const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});


export const apolloClient = new ApolloClient({
  cache,
  link: authLink.concat(link),
});
