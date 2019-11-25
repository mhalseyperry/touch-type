import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(theme => ({
  wrapper: {
    background: theme.bg,
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: theme.text,
  },
}));
