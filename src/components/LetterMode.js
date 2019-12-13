import React, { useState } from 'react';
import { useEventListener } from '../hooks/useEventListener';
import { useKeyboardLayouts } from '../contexts/KeyboardLayoutContext';
import { LetterModeStyles } from './LetterMode.styles';

function getRandKey(keyMap) {
  const keys = Object.keys(keyMap);
  const key = keys[Math.floor(Math.random() * keys.length)];
  const regEx = new RegExp(/[~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g);
  const isPunctuation = regEx.test(keyMap[key]);
  return parseInt(isPunctuation ? getRandKey(keyMap) : key, 10);
}

export const LetterMode = props => {
  const { primaryKeymap, secondaryKeymap } = useKeyboardLayouts();
  const classes = LetterModeStyles();

  const [currentKey, setCurrentKey] = useState(getRandKey(primaryKeymap));
  const [futureKey, setFutureKey] = useState(getRandKey(primaryKeymap));
  const [pastKey, setPastKey] = useState(getRandKey(primaryKeymap));
  const [input, setInput] = useState('');

  useEventListener(
    'keydown',
    e => {
      if (e.keyCode === currentKey) {
        props.onSuccesfulGuess();
        setPastKey(currentKey);
        setCurrentKey(futureKey);
        setFutureKey(getRandKey(primaryKeymap));
      } else {
        props.onIncorrectGuess();
      }
      setInput(e.keyCode);
    },
    [currentKey, primaryKeymap, pastKey, futureKey],
  );

  return (
    <>
      <div className={classes.box}>
        <div className={classes.outer}>
          <p className={classes.textSmall}>{primaryKeymap[pastKey]}</p>
        </div>
        <div className={classes.main}>
          <p className={classes.text}>{primaryKeymap[currentKey]}</p>
        </div>
        <div className={classes.outer}>
          <p className={classes.textSmall}>{primaryKeymap[futureKey]}</p>
        </div>
      </div>
    </>
  );
};
