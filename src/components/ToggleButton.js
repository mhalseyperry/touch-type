import React from 'react';
import { useStyles } from './ToggleButton.styles';

export const ToggleButton = props => {
  const classes = useStyles();

  function toggle() {
    props.toggle(!props.on);
  }

  return (
    <div>
      <button
        //prettier-ignore
        className={`${classes.switch} ${props.on ? classes.switchOn : classes.switchOff}`}
        onClick={toggle}
      >
        <div
          className={`${classes.innerCircle} ${
            props.on ? classes.innerCircleOn : classes.innerCircleOff
          }`}
        ></div>
      </button>
    </div>
  );
};
