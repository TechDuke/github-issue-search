import React from "react";
import { render } from "@testing-library/react";
// import { render, waitForElementToBeRemoved } from "@testing-library/react";
import { waitForElementToBeRemoved } from "@testing-library/dom";
// NOTE: React Testing Library builds on top of DOM Testing Library

// import { act } from "react-dom/test-utils";
// import { ApolloClient, createHttpLink, gql, InMemoryCache } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";
// import { GRAPHQL_URI, OAUTH_TOKEN } from "../config";

import Main from "./Main";

/**
 * Test that Main component renders.
 */
test("should render Main", async () => {
  const result = render(<Main />);
  const { getByText } = result;

  // Test for loading page
  const loading = getByText(/loading/i);
  expect(loading).toBeInTheDocument(); // Verify loading text displayed

  // Wait for main page to load (when Loading text node is gone from DOM)
  await waitForElementToBeRemoved(() => getByText(/loading/i)).catch((err) => console.log(err));

  // Test for main page
  const heading = getByText(/github search/i);
  expect(heading).toBeInTheDocument(); // Verify heading tag displayed
});


// NOTE: Copied from "src/_playground/apollo-client-github-api.test.js"
// /**
//  * Use this test to verify our initial development environment setup of ApolloClient using GitHub GraphQL API.
//  * References:
//  *  https://docs.github.com/en/free-pro-team@latest/graphql
//  *  https://docs.github.com/en/free-pro-team@latest/graphql/reference
//  */
// test.skip("should return results from GitHub GraphQL API server", async () => {
//   const httpLink = createHttpLink({ uri: GRAPHQL_URI });
//
//   // Create ApolloClient
//   const authLink = setContext((_, { headers }) => {
//     // Return the headers to the context so httpLink can read them
//     return {
//       headers: {
//         ...headers,
//         authorization: `Bearer ${OAUTH_TOKEN}`,
//       }
//     }
//   });
//
//   const client = new ApolloClient({
//     link: authLink.concat(httpLink),
//     cache: new InMemoryCache()
//   });
//
//   // Define GraphQL query
//   const queryViewer = async () => await client.query({
//     query: gql`
//         query {
//           viewer {
//             login
//           }
//         }
//     `
//   });
//
//   // Run test
//   const { loading, data } = await queryViewer();
//
//   expect(loading).toBeFalsy();
//   expect(data.viewer).toBeDefined();
//   expect(data.viewer.login).toEqual('TechDuke');
// });
