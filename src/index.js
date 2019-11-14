import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const keyMap = {
  81: 'й',
  87: 'ц',
  69: 'у',
  82: 'к',
  84: 'е',
  89: 'н',
  85: 'г',
  73: 'ш',
  79: 'щ',
  80: 'з',
  219: 'х',
  221: 'ъ',
};

ReactDOM.render(<App keyMap={keyMap} />, document.getElementById('root'));
