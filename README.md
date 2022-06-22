# GitHub Search - Pimberly

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Notes

### What you have done in the coding challenge
- Create the basic layout (header and search bar) using [Chakra-ui](https://chakra-ui.com/)
- Fetch and display repository information after a search (axios)
- Split code into different components with different responsibilities
- Build my own pagination system (I could have used a package but it was more interesting to do it myself this time.)

### Any further improvements you could make
- SearchBar and Pagination share some props (the list could have been longer) it may be a good idea to introduce react Context instead of repeating the props.
- Instead of loading 25 repos we could preload 100 repos everytime and do a frontend pagination. It would allow to reduce api calls.
- display formatted star count 65253 => 65k.
- Pagination: display clickable page numbers [1, 2, 3, ..., 8,9,10] to allow quick navigation (although it seems unecessary in our case as people would be more interested in the first few pages).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.