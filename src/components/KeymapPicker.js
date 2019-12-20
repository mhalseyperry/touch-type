import React from 'react';
import { useKeyboardLayouts } from '../contexts/KeyboardLayoutContext';
import { ToggleButton } from './ToggleButton';

export const KeymapPicker = () => {
  const {
    keymaps,
    primaryKeymapKey,
    setPrimaryKeymap,
    punctuation,
    setPunctuation,
  } = useKeyboardLayouts();

  console.log(punctuation);

  return (
    <>
      <div>
        <select
          value={primaryKeymapKey}
          onChange={e => setPrimaryKeymap(e.target.value)}
        >
          {Object.keys(keymaps).map(keymap => (
            <option key={keymap} value={keymap}>
              {keymap}
            </option>
          ))}
        </select>
        <p>Punctuation toggle: </p>
        <ToggleButton on={punctuation} toggle={setPunctuation} />
      </div>
    </>
  );
};
