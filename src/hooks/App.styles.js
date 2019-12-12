import { createUseStyles } from 'react-jss';

export const AppStyles = createUseStyles(theme => ({
  wrapper: {
    background: theme.bg,
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },

  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },

  correct: {
    background: 'green',
  },

  incorrect: {
    background: 'red',
  },
}));
