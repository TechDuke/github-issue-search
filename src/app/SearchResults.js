import React, { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';

import loadingIcon from './logo.svg';
import { REPO_OWNER, REPO_NAME, NUM_DROPDOWN_ITEMS } from "../config";

// Define Material-UI 'useStyles' Custom React Hook to make 'classes' styles available
const useStyles = makeStyles((theme) => ({
  issue: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    borderRadius: 18,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: theme.palette.primary.dark,
    backgroundColor: theme.palette.primary.light,
  },
}));

// Wrap GraphQL query string in Apollo's gql template literal tag, that parses it into standard GraphQL AST
const GET_FACEBOOK_ISSUE_DETAILS = gql`
  query ($filter: String!, $first: Int!) {
    search(query: $filter, first: $first, type: ISSUE) {
      edges {
        node {
          ... on Issue {
            title
            bodyText
            url
            labels(first:5) {
              edges {
                node {
                  name                
                }
              }
            }
          }
        }
      }
    }
  }
`;

/** Query variables for GET_FACEBOOK_ISSUE_DETAILS query */
const getQueryVariables = (searchTerm) => {
  return {
    variables: {
      filter: `${searchTerm} in:title repo:${REPO_OWNER}/${REPO_NAME} state:open`,
      first: NUM_DROPDOWN_ITEMS
    }
  };
};

/**
 * Refactor results from GET_FACEBOOK_ISSUE_DETAIL query.
 */
const parseIssues = (data) => {
  const issuesList = data.search.edges.map((x, index) => {
    const { title, bodyText, url, labels } = x.node;
    return {
      title,
      text: bodyText,
      url,
      labels: labels.edges.map((y) => y.node.name) // Refactor labels edges into simpler array
    };
  });
  return issuesList;
}

const LoadingMessage = () =>
  <div className="center">
    <img className="loading-icon" src={loadingIcon} alt="Loading" />
    <span className="loading">Loading...</span>
  </div>
;

const ErrorMessage = () => <div className='error'>Error loading images. Please try again later</div>;

/**
 * Function Component for fetching and displaying our Node.js/Express/GraphQL server version.
 * @returns {JSX.Element}
 */
const SearchResults = (props) => {
  const classes = useStyles(); // Use Material-UI's React Hook to access 'classes' styles

  const { searchTerm = '*' } = props;
  console.log('searchTerm=', searchTerm);

  // Use ApolloClient to fetch data from GitLab GraphQL API
  const { loading, error, data } = useQuery(GET_FACEBOOK_ISSUE_DETAILS, getQueryVariables(searchTerm));

  const [issues, setIssues] = useState([]);

  // Save fetched issue details
  useEffect(() => {
    if (!loading && !error && data) { // Only save issues state when done loading, no error, and data is valid
      setIssues(parseIssues(data));
    }
  }, [loading, error, data]); // Note: Run effect (after render) only when 'loading', 'error' or 'data' change

  if (loading) return <LoadingMessage/>;
  if (error) return <ErrorMessage/>;
  if (issues && issues.length === 0) return <div>No issues found</div>

  return (
    <div>
      {issues.map((x, i) => (
        <div className={classes.issue} key={i}>
          <h3>{x.title}</h3>
          <p>{x.text}</p>
          <a href={x.url} >{x.url}</a>
          <h5>Labels</h5>
          <ul>
            {x.labels.map((name, j) => <li key={j}>{name}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
};

export {
  SearchResults,
};
