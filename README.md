## **DEMO Streaming Application**

![Demo Streaming](https://circleci.com/gh/subhanahmed047/demo-streaming.svg?style=shield&circle-token=b213ce11a1e71a440547a723d6d76bec57e792ed)
![Heroku](https://heroku-badge.herokuapp.com/?app=heroku-badge)

## Introduction

A simple streaming app that shows `series` and `movies` in a grid. The app is built using [Parcel](https://parceljs.org/) to gain more control over the build configurations like naming conventions without having to eject the app.

## Project Architecture

The app is divided into two parts; Client and Server.

    .
    ├── client
    ├── server
    ├── ...
    └── README.md

The `client` directory contains the presentational logic built using React JS, while the `server` directory contains an `express JS` based server that is responsible for providing [/api/movies](https://demostreaming.herokuapp.com/api/movies), and [/api/series](https://demostreaming.herokuapp.com/api/series) endpoints. The server is also responsible for adding filters and sorting on the data. The client is being served over express server using express proxy which creates a full stack environment.

## Tools

- [React JS](https://reactjs.org/)
- [Express JS](https://expressjs.com/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [SuperTest](https://www.npmjs.com/package/supertest) ( for http assertions )

## Installation Instructions

After you successfully clone the application to your local machine, you need to run the following commands to build and run the application:

1.  Install the dependencies
    ```
    yarn install
    ```
2.  Start the Development server _( builds the app in the `dist` folder and serves it over the express server )_
    ```
    yarn dev
    ```

## CI/CD

The app uses [Circle CI](https://circleci.com/) for continuos integration and deployments. On every push to origin, the `config.yml` file in the .circleci directory runs the pipeline to test the app, build and deploy it to Heroku.

## Tests

To run the tests run the following command:

    yarn test

The app uses [Jest](https://jestjs.io/) to run the tests. The app is integrated with circle CI that runs the tests and creates a new build on every push to make sure things run smooth. The app is automatically deployed to Heroku.

## Improvements

I believe that there is always room for improvements. If given more time, I will:

- Write more unit tests for the components.
- Tweak mobile UI to be more user friendly.
- Add code spliting for faster loading.
- Refactor the components folder to be more tidy.
