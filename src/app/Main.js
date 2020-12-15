import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, TextField, Divider } from '@material-ui/core';
import { Autocomplete } from "@material-ui/lab";
import SearchIcon from '@material-ui/icons/Search';
import { gql, useLazyQuery } from '@apollo/client';

import "./Main.css";
import { REPO_OWNER, REPO_NAME, NUM_DROPDOWN_ITEMS } from "../config";
import { SearchResults } from "./SearchResults";

// Define Material-UI 'useStyles' Custom React Hook to make 'classes' styles available
const useStyles = makeStyles((theme) => ({
  container: {
    width: 450,
    marginLeft: theme.spacing(1),
  },
  divider: {
    marginTop: theme.spacing(5),
    backgroundColor: 'darkgray',
  },
  button: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const GET_FACEBOOK_ISSUE_TITLES = gql`
  query ($filter: String!, $first: Int!) {
    search(query: $filter, first: $first, type: ISSUE) {
      edges {
        node {
          ... on Issue {
            title
          }
        }
      }
    }
  }
`;

/** Query variables for GET_FACEBOOK_ISSUE_TITLES query */
const getQueryVariables = (searchTerm) => {
  return {
    variables: {
      filter: `${searchTerm} in:title repo:${REPO_OWNER}/${REPO_NAME} state:open`,
      first: NUM_DROPDOWN_ITEMS
    }
  };
};

/** Refactor results from GET_FACEBOOK_ISSUE_TITLES query */
const parseIssues = (data) => {
  const issueTitles = data.search.edges
    .filter((x) => x.node.title != null) // Make sure each node has a title attribute
    .map((x, index) => x.node.title); // Only keep the title string
  return issueTitles;
}


/**
 * Main application
 * @returns {JSX.Element}
 * @constructor
 */
const Main = () => {
  // Use Material-UI's React Hook to access 'classes' styles
  const classes = useStyles();

  // Current search term for Autocomplete component's TextField
  // Note: This state is used with the Autocomplete value/onChange props combination.
  const [predictionValue, setPredictionValue] = React.useState(null);

  // Current list of issues for Autocomplete component's dropdown
  const [predictions, setPredictions] = useState([]);

  // When 'searchValue' is non-null, the issue details will be fetched by <SearchResults>
  const [searchValue, setSearchValue] = useState(null);

  // Fetch list of issues that match the real-time input as the user is typing
  const [getIssues, { loading, error, data }] = useLazyQuery(GET_FACEBOOK_ISSUE_TITLES);

  // Used to save fetched issues
  useEffect(() => {
    if (!loading && !error && data) { // Only save issues state when done loading, no error, and data is valid
      setPredictions(parseIssues(data));
    }
  }, [loading, error, data]); // Note: Run effect (after render) only when 'loading', 'error' or 'data' change

  /** Handle TextField change as user types */
  const handleChange = (event) => {
    const searchTerm = event.target.value;
    getIssues(getQueryVariables(searchTerm));
  }

  /** Initiate fetching the detailed results of the chosen issue
   * NOTE: When 'searchValue' is non-null, the issue details will be fetched by <SearchResults>  */
  const getSearchResults = () => {
    setSearchValue(predictionValue);
  }

  return (
    <>
      <Typography variant='h2'>GitHub Search</Typography>
      <Typography variant='h5'>Facebook React GitHub repository</Typography>

      <div className={classes.container}>
        <Typography variant='body1'>
          Search for issues:
        </Typography>
        <Autocomplete
          id="controlled-demo"
          options={predictions}
          getOptionLabel={(option) => option}
          value={predictionValue}
          onChange={(event, newValue) =>
            setPredictionValue(newValue) // Handle user choice
          }
          renderInput={(params) =>
            <TextField {...params} label="Enter text" margin="normal" onChange={handleChange} />
          }
        />

        <Button
          variant='contained'
          size='small'
          color='primary'
          className={classes.button}
          startIcon={<SearchIcon />}
          onClick={getSearchResults}
          component='p'
        >Search</Button>
      </div>

      {searchValue &&
        <div>
          <Divider variant='fullWidth' className={classes.divider} />
          <Typography variant='h4'>Issue</Typography>
          <SearchResults searchTerm={searchValue} />
        </div>
      }
    </>
  );
}

export default Main;
