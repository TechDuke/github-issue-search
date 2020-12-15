import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { GRAPHQL_URI, OAUTH_TOKEN } from '../config';

import Main from './Main';
import customTheme from './theme';

// Ref: https://www.apollographql.com/docs/react/networking/authentication/

// GitHub [OAuth token] Personal access token: c2f945a54c1006df1bbe5118cdf512ab231c0887
// Ref: https://docs.github.com/en/free-pro-team@latest/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql

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
  cache: new InMemoryCache()
});


// Create our custom theme that is based on our palette colors
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

