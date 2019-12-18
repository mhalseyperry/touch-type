import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(theme => ({
  switch: {
    position: 'relative',
    outline: 'none',
    width: '60px',
    height: '30px',
    backgroundColor: theme.text,
    border: `4px solid ${theme.text}`,
    borderRadius: '30px',
    boxSizing: 'content-box',
    margin: '5px',
  },

  switchOn: {
    backgroundColor: '#42A5F5',
    border: '4px solid #42A5F5',
  },

  innerCircle: {
    border: '5px',
    width: '30px',
    height: '30px',
    background: theme.bg,
    borderRadius: '50%',
    transition: 'margin-left 200ms ease-in-out',
  },

  innerCircleOn: {
    marginLeft: '30px',
  },
}));
