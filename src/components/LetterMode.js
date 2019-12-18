import React, { useState, useEffect } from 'react';
import { useEventListener } from '../hooks/useEventListener';
import { useKeyboardLayouts } from '../contexts/KeyboardLayoutContext';
import { useStyles } from './LetterMode.styles';

function getRandKey(keyMap) {
  const keys = Object.keys(keyMap);
  const key = keys[Math.floor(Math.random() * keys.length)];
  const regEx = new RegExp(/[~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g);
  const isPunctuation = regEx.test(keyMap[key]);
  return parseInt(isPunctuation ? getRandKey(keyMap) : key, 10);
}

export const LetterMode = props => {
  const { primaryKeymap, secondaryKeymap } = useKeyboardLayouts();
  const styles = useStyles();

  const [currentKey, setCurrentKey] = useState(getRandKey(primaryKeymap));
  const [futureKey, setFutureKey] = useState(getRandKey(primaryKeymap));
  const [pastKey, setPastKey] = useState(getRandKey(primaryKeymap));
  const [input, setInput] = useState('');
  const [className, setClassName] = useState('');

  useEventListener(
    'keydown',
    e => {
      if (e.keyCode === currentKey) {
        setClassName('correct');
        setPastKey(currentKey);
        setCurrentKey(futureKey);
        setFutureKey(getRandKey(primaryKeymap));
      } else {
        setClassName('incorrect');
      }
      setInput(e.keyCode);
    },
    [currentKey, primaryKeymap, pastKey, futureKey],
  );

  useEffect(() => {
    let timeout = setTimeout(() => {
      if (className) {
        setClassName('');
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [className]);

  return (
    <>
      <div className={styles.box}>
        <div
          className={`${styles.status} ${className ? styles[className] : ''}`}
        />
        <div className={styles.outer}>
          <p className={styles.textSmall}>{primaryKeymap[pastKey]}</p>
        </div>
        <div className={styles.main}>
          <p className={styles.text}>{primaryKeymap[currentKey]}</p>
        </div>
        <div className={styles.outer}>
          <p className={styles.textSmall}>{primaryKeymap[futureKey]}</p>
        </div>
      </div>
    </>
  );
};
