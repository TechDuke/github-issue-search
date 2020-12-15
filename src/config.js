// NOTE: See .env for configuration settings

// GiHub GraphQL API constants
const GRAPHQL_URI = process.env.REACT_APP_GRAPHQL_URI;
const OAUTH_TOKEN = process.env.REACT_APP_OAUTH_TOKEN;

const REPO_OWNER = 'facebook'; // GitHub repository owner
const REPO_NAME = 'react';     // GitHub repository name
const NUM_DROPDOWN_ITEMS = 7   // Max number of items for the Autocomplete drop-down list

export {
  GRAPHQL_URI,
  OAUTH_TOKEN,
  REPO_OWNER,
  REPO_NAME,
  NUM_DROPDOWN_ITEMS
};
