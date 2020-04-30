import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import {
  HomePage,
  SeriesPage,
  MoviesPage,
  PageNotFoundPage,
} from './src/pages';
import Header from './src/components/header';
import Footer from './src/components/footer';
import { GlobalStyles, theme } from './src/theme';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/series" component={SeriesPage} />
          <Route path="/movies" component={MoviesPage} />
          <Route component={PageNotFoundPage} />
        </Switch>
        <Footer />
      </ThemeProvider>
    );
  }
}
export default App;
