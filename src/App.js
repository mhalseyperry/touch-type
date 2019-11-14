import React, { useState, useEffect } from 'react';
import './App.css';
import { useEventListener } from './useEventListener';
import { Drawer } from './components/Drawer';

function getRandKey(keyMap) {
  const keys = Object.keys(keyMap);
  const key = keys[Math.floor(Math.random() * keys.length)];

  return parseInt(key, 10);
}

function App(props) {
  const [key, setKey] = useState(getRandKey(props.keyMap));
  const [className, setClassName] = useState('');

  useEventListener(
    'keydown',
    e => {
      if (e.keyCode === key) {
        setClassName('correct');
        setKey(getRandKey(props.keyMap));
      } else {
        setClassName('incorrect');
      }
    },
    [key, props.keyMap],
  );

  useEffect(() => {
    let timeout = setTimeout(() => {
      if (className) {
        setClassName('');
      }
    }, 600);

    return () => clearTimeout(timeout);
  }, [className]);

  return (
    <div className={`wrapper ${className}`}>
      <Drawer />
      <main>
        <div className="box">
          <p id="letter">{props.keyMap[key]}</p>
        </div>
      </main>
    </div>
  );
}

export default App;
