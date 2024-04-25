import { ApolloClient, InMemoryCache } from "@apollo/client";

export const getClient = () => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/",
  });
};
