"use client";

import { ApolloProvider } from "@apollo/client";
import { getClient } from "@/components/helpers/apollo-clients";

const GraphLayout = ({ children }: React.PropsWithChildren) => {
  const client = getClient();
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default GraphLayout;
