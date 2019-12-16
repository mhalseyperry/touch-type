import { createUseStyles } from 'react-jss';

export const LetterModeStyles = createUseStyles(theme => ({
  box: {
    width: '50rem',
    height: '50rem',
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

  correct: {
    background:
      ' radial-gradient(ellipse at center, rgba(10,199,0,1) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)',
  },

  incorrect: {
    background:
      ' radial-gradient(ellipse at center, rgba(179,11,11,1) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)',
  },
}));
