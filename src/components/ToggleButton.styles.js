import { createUseStyles } from 'react-jss';

export const ToggleButtonStyles = createUseStyles(theme => ({
  switch: {
    position: 'relative',
    outline: 'none',
    width: '50px',
    height: '30px',
    backgroundColor: theme.text,
    border: `1px solid ${theme.text}`,
    borderRadius: '50px',
    padding: '2px',
    transition: 'margin-left 100ms ease-in-out',
  },

  switchOn: {
    backgroundColor: 'blue',
  },

  innerCircle: {
    width: '25px',
    height: '25px',
    background: theme.bg,
    borderRadius: '50%',
  },

  innerCircleOn: {
    marginLeft: '19px',
  },
}));
