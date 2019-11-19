import React, { useState, useEffect } from 'react';
import './App.css';
import { useEventListener } from './hooks/useEventListener';
import { Drawer } from './components/Drawer';
import { KeymapPicker } from './components/KeymapPicker';
import { useKeyboardLayouts } from './contexts/KeyboardLayoutContext';
import { useThemes } from './contexts/ThemeContext';

function getRandKey(keyMap) {
  const keys = Object.keys(keyMap);
  const key = keys[Math.floor(Math.random() * keys.length)];

  return parseInt(key, 10);
}

function App(props) {
  const { primaryKeymap, secondaryKeymap } = useKeyboardLayouts();
  const { isLightTheme, dark, light } = useThemes();
  const theme = isLightTheme ? light : dark;
  console.log(theme);
  const [key, setKey] = useState(getRandKey(primaryKeymap));
  const [className, setClassName] = useState('');
  const [input, setInput] = useState('');

  useEventListener(
    'keydown',
    e => {
      if (e.keyCode === key) {
        setClassName('correct');
        setKey(getRandKey(primaryKeymap));
      } else {
        setClassName('incorrect');
      }
      setInput(e.keyCode);
    },
    [key, primaryKeymap],
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
    <div className={`wrapper ${className}`} style={{ background: theme.bg }}>
      <Drawer />
      <KeymapPicker />
      <main>
        <div className="box">
          <p id="letter">{primaryKeymap[key]}</p>
          <p id="letter-small">({secondaryKeymap[key]})</p>
          <p id="letter-small">{primaryKeymap[input]}</p>
        </div>
      </main>
    </div>
  );
}

export default App;
