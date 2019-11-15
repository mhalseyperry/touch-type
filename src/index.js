import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { KeyboardLayoutProvider } from './contexts/KeyboardLayoutContext';

ReactDOM.render(
  <KeyboardLayoutProvider>
    <App />
  </KeyboardLayoutProvider>,
  document.getElementById('root'),
);
