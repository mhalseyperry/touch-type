import React, { useState } from 'react';
import './ToggleButton.css';

export const ToggleButton = props => {
  const { isOn, setIsOn } = useState(false);

  function toggle() {
    props.toggle(!props.on);
  }

  return (
    <div>
      <button className="switch" onClick={toggle}></button>
    </div>
  );
};
