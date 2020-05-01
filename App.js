import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <GlobalStyles />
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/series" component={SeriesPage} />
            <Route path="/movies" component={MoviesPage} />
            <Route component={PageNotFoundPage} />
          </Switch>
          <Footer />
        </Wrapper>
      </ThemeProvider>
    );
  }
}
export default App;
