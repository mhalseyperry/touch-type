import { createUseStyles } from 'react-jss';

export const LetterModeStyles = createUseStyles(theme => ({
  box: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
  },

  text: {
    color: theme.text,
    fontSize: '2000%',
  },

  textSmall: {
    color: theme.text,
    fontSize: '500%',
  },

  outer: {
    marginLeft: '20px',
    opacity: '0.33',
  },

  main: {
    marginLeft: '20px',
  },
}));
