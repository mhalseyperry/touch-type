import { createUseStyles } from 'react-jss';

export const LetterModeStyles = createUseStyles(theme => ({
  box: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  },

  text: {
    color: theme.text,
    fontSize: '2000%',
  },

  textSmall: {
    color: theme.text,
    fontSize: '500%',
  },
}));
