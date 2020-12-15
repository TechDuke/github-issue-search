import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { GRAPHQL_URI, OAUTH_TOKEN } from '../config';

import Main from './Main';
import customTheme from './theme';

// Create ApolloClient for GraphQL queries
const httpLink = createHttpLink({ uri: GRAPHQL_URI });
const authLink = setContext((_, { headers }) => {
  // Return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${OAUTH_TOKEN}`,
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  shouldBatch: true, // Ref: https://www.apollographql.com/blog/query-batching-in-apollo-63acfd859862/
});


// Create our custom Material-UI theme that is based on our palette colors
const muiTheme = createMuiTheme(customTheme);

/**
 * The main application [Function] Component.
 */
const App = () => (
  <ThemeProvider theme={muiTheme}>
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  </ThemeProvider>
);

export default App;

