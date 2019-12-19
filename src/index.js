import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { KeyboardLayoutProvider } from './contexts/KeyboardLayoutContext';
import { ThemeContextProvider } from './contexts/ThemeContext';

ReactDOM.render(
  <ThemeContextProvider>
    <KeyboardLayoutProvider>
      <App />
    </KeyboardLayoutProvider>
  </ThemeContextProvider>,
  document.getElementById('root'),
);
