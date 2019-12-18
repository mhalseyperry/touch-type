import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(theme => ({
  box: {
    position: 'relative',
    width: '50rem',
    height: '50rem',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    transition: 'background 200ms ease-in-out',
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
    zIndex: 1,
    marginLeft: '20px',
    opacity: '0.33',
  },

  main: {
    zIndex: 1,
    marginLeft: '20px',
  },

  status: {
    opacity: 0,
    width: '100%',
    height: '100%',
    position: 'absolute',
    transition: 'opacity 200ms ease',
  },

  correct: {
    opacity: 1,
    background:
      ' radial-gradient(ellipse at center, rgba(10,199,0,1) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)',
  },

  incorrect: {
    opacity: 1,
    background:
      ' radial-gradient(ellipse at center, rgba(179,11,11,1) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)',
  },
}));
