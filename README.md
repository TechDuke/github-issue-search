# GitHub Issue Search
Application for searching issues from Facebook React's GitHub repository.

This application uses the [Github’s API](https://developer.github.com/) and an autocomplete input box for searching 
issues for [React’s repo](https://github.com/facebook/react/issues). 

## Features
* User search using an autocomplete input box.
* The user can navigate the input and results via keyboard shortcuts.
* Uses the GitHub API to query the user's search request for issues from Facebook React's GitHub repository.
  * https://github.com/facebook/react/issues
  * Each result displays the issue’s title and labels, plus more.

## Development
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## GitHub GraphQL API
* [GitHub GraphQL API](https://docs.github.com/en/free-pro-team@latest/graphql)
* [GitHub GraphQL API: Reference](https://docs.github.com/en/free-pro-team@latest/graphql/reference)
