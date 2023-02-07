import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    // 1rem = 10px
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Rubik', sans-serif;
  }

  input {
    outline: none;
  }

  input:focus {
    outline: none;
  }

  // remove "X" icon from search input
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
  appearance: none;
}
`;
