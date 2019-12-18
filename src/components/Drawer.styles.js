import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(theme => ({
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
    padding: '1rem',
    boxShadow: `0 25px 50px -12px ${theme.shadow}`,
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
