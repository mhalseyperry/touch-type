import { createUseStyles } from 'react-jss';

export const LetterModeStyles = createUseStyles(theme => ({
  text: {
    color: theme.text,
    display: 'flex',
    fontSize: '2000%',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  textSmall: {
    color: theme.text,
    textAlign: 'center',
    fontSize: '500%',
  },
}));
