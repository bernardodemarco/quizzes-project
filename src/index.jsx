// react.js
import React from 'react';
import ReactDOM from 'react-dom/client';

// styled-components
import { GlobalStyles } from './styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <h1>Hey there</h1>
    </ThemeProvider>
  </React.StrictMode>,
);
