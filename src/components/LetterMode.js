import React, { useState, useEffect } from 'react';
import './LetterMode.css';
import { useEventListener } from '../hooks/useEventListener';
import { useKeyboardLayouts } from '../contexts/KeyboardLayoutContext';
import { useThemes } from '../contexts/ThemeContext';

function getRandKey(keyMap) {
  const keys = Object.keys(keyMap);
  const key = keys[Math.floor(Math.random() * keys.length)];

  return parseInt(key, 10);
}

export const LetterMode = props => {
  const { primaryKeymap, secondaryKeymap } = useKeyboardLayouts();
  const { theme } = useThemes();

  const [key, setKey] = useState(getRandKey(primaryKeymap));
  const [input, setInput] = useState('');

  useEventListener(
    'keydown',
    e => {
      if (e.keyCode === key) {
        props.onSuccesfulGuess();
        setKey(getRandKey(primaryKeymap));
      } else {
        props.onIncorrectGuess();
      }
      setInput(e.keyCode);
    },
    [key, primaryKeymap],
  );

  return (
    <div className="box">
      <p id="letter" style={{ color: theme.text }}>
        {primaryKeymap[key]}
      </p>
      <p id="letter-small" style={{ color: theme.text }}>
        ({secondaryKeymap[key]})
      </p>
      <p id="letter-small" style={{ color: theme.text }}>
        {primaryKeymap[input]}
      </p>
    </div>
  );
};
