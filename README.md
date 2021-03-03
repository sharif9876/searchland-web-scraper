# Web Scraper

## How to use
Project is using node 14.15.4

### Quickstart
Install dependencies

    npm install

Compile TypeScript

    npx tsc src/index.ts

Run the compiled file

    node src/index.js

### Integrate in another project 

Import the `getResponse()` method from `index.ts`, it will return the `JobPlanningResponse` object.

### Run the tests

To test the CSS selectors, run the Jest tests

    jest
