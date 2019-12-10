import { createUseStyles } from 'react-jss';

export const DrawerStyles = createUseStyles(theme => ({
  drawer: {
    display: 'flex',
    flexDirection: 'column',
    background: theme.ui,
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '-15rem',
    width: '15rem',
    transition: 'left 0.2s ease-in',
    color: theme.text,
  },

  button: {
    background: 'transparent',
    border: 'none',
    outline: 'none',
  },

  open: {
    left: '0',
  },
}));
