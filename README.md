## **DEMO Streaming Application**

## Introduction

A simple streaming app that shows `series` and `movies` in a grid. The app is built using [Parcel](https://parceljs.org/) to gain more control over the build configurations like naming conventions without having to eject the app.

## Project Structure

The app is divided into two parts; Client and Server.

    .
    ├── client
    ├── server
    ├── ...
    └── README.md

The `client` directory contains the presentational logic built using React JS, while the `server` directory contains an `express JS` based server that is responsible for providing [/api/movies](https://demostreaming.herokuapp.com/api/movies), and [/api/series](https://demostreaming.herokuapp.com/api/series) endpoints. The server is also responsible for adding filters and sorting on the data. The client is being served over express server using express proxy which creates a full stack environment.

## Installation Instructions

After you successfully clone the application to your local machine, you need to run the following commands to build and run the application:

1.  Install the dependencies
    ```
    yarn install
    ```
2.  Start the Development server _(Runs tests, builds the app in the `dist` folder and serves it over the express server)_
    ```
    yarn dev
    ```

## Tests

To run the tests run the following command:

    yarn test


The app uses [Jest](https://jestjs.io/) to run the tests.
