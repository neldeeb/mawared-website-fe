import AppRoutes from "./AppRoutes";
import { ApolloProvider } from "@apollo/client";
import { client } from "./services/Client";

const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <AppRoutes />
      </ApolloProvider>
    </>
  );
};

export default App;
