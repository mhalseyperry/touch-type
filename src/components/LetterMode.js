import React, { useState } from 'react';
import { useEventListener } from '../hooks/useEventListener';
import { useKeyboardLayouts } from '../contexts/KeyboardLayoutContext';
import { LetterModeStyles } from './LetterMode.styles';

function getRandKey(keyMap) {
  const keys = Object.keys(keyMap);
  const key = keys[Math.floor(Math.random() * keys.length)];

  return parseInt(key, 10);
}

export const LetterMode = props => {
  const { primaryKeymap, secondaryKeymap } = useKeyboardLayouts();
  const classes = LetterModeStyles();

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
    <div className={classes.box}>
      <p className={classes.text}>{primaryKeymap[key]}</p>
      <p className={classes.textSmall}>({secondaryKeymap[key]})</p>
      <p className={classes.textSmall}>{primaryKeymap[input]}</p>
    </div>
  );
};
