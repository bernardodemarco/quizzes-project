// react.js
import React from 'react';
import ReactDOM from 'react-dom/client';

// styled-components
import { GlobalStyles } from './styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

// react-router-dom
import { routes } from './routes';
import { RouterProvider } from 'react-router-dom';

// components
import { AuthProvider } from './contexts/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={routes} />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
);
