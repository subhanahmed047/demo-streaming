import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  HomePage,
  SeriesPage,
  MoviesPage,
  PageNotFoundPage,
} from './src/pages';
import Header from './src/components/header';
import Footer from './src/components/footer';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/series" component={SeriesPage} />
          <Route path="/movies" component={MoviesPage} />
          <Route component={PageNotFoundPage} />
        </Switch>
        <Footer />
      </>
    );
  }
}
export default App;
