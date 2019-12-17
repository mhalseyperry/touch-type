import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(theme => ({
  letter: {
    width: '2.5rem',
    height: '2.5rem',
    background: theme.bg,
    color: theme.text,
    border: `2px solid ${theme.ui}`,
    padding: '.2rem',
    margin: '.05rem',
  },

  row: {
    display: 'flex',
    flexDirection: 'row',

    '&:nth-child(2)': {
      marginLeft: '1rem',
    },

    '&:nth-child(3)': {
      marginLeft: '2rem',
    },
  },

  keyboard: {},
}));
