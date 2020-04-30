import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: "Raleway", "Helvetica Neue", "Oxygen", "Segoe UI", "Roboto", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font: 16px/1.5 "Dosis", sans-serif;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    a {
      font-weight: 550;
      color: #edf0f1;
      text-decoration: none;
    } 
`;

export default GlobalStyle;
