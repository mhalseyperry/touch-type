import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(theme => ({
  box: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '50rem',
    height: '50rem',
  },

  carousel: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },

  text: {
    color: theme.text,
    fontSize: '18rem',
  },

  textSmall: {
    color: theme.text,
    fontSize: '5rem',
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
    transition: 'opacity 0ms ease',
  },

  correct: {
    opacity: 1,
    color: 'green',
    // background:
    //   ' radial-gradient(ellipse at center, rgba(10,199,0,1) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)',
  },

  incorrect: {
    color: 'red',
    opacity: 1,
    // background:
    //   ' radial-gradient(ellipse at center, rgba(179,11,11,1) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)',
  },

  scoreBox: {
    color: theme.text,
  },
}));
