import React, { useState, useEffect } from 'react';
import './LetterMode.css';
import { useEventListener } from '../hooks/useEventListener';
import { useKeyboardLayouts } from '../contexts/KeyboardLayoutContext';
import { useStyles } from '../hooks/useStyles';

function getRandKey(keyMap) {
  const keys = Object.keys(keyMap);
  const key = keys[Math.floor(Math.random() * keys.length)];

  return parseInt(key, 10);
}

export const LetterMode = props => {
  const { primaryKeymap, secondaryKeymap } = useKeyboardLayouts();
  const classes = useStyles();

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
      <p className={classes.text} id="letter">
        {primaryKeymap[key]}
      </p>
      <p className={classes.text} id="letter-small">
        ({secondaryKeymap[key]})
      </p>
      <p className={classes.text} id="letter-small">
        {primaryKeymap[input]}
      </p>
    </div>
  );
};
