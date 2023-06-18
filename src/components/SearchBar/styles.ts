import { makeStyles } from 'tss-react/mui'
import { Theme } from '@mui/system'

export const useStyles = makeStyles()((theme: Theme) => {
  return {
    searchElement: {
      position: 'relative',
      height: '3.25rem',
      borderRadius: '26px',
      background: theme.palette.background.default,
      boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
      marginBottom: '1.4rem',
      display: 'flex',
      alignItems: 'center',
      zIndex: 1,
    },
    searchInput: {
      flex: 1,
      marginLeft: '1rem',
      height: '3.25rem',
      border: 'none',
      backgroundColor: theme.palette.background.default,
      fontSize: '1.125rem',
      color: theme.palette.text.primary,
      width: '100%',
      '&:focus': {
        outline: 'none',
      },
      '&::placeholder': {
        color: theme.palette.text.secondary,
      },
    },
    searchIcon: {
      marginLeft: '1.2rem',
      fill: '#4a6fa1',
    },
    locationButton: {
      border: 'none',
      cursor: 'pointer',
      height: '100%',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      borderRadius: theme.shape.borderRadius,
      padding: theme.spacing(1, 2),
      transition: 'background-color 0.3s ease',
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
      '&:disabled': {
        cursor: 'not-allowed',
        backgroundColor: theme.palette.grey[300],
        color: theme.palette.text.disabled,
      },
    },
    locationIcon: {
      marginRight: '1.2rem',
      fill: '#4a6fa1',
    },
    searchResult: {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      background: theme.palette.background.paper,
      boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
      width: '98%',
      left: '1%',
      top: '3.35rem',
      borderRadius: '5px',
      overflow: 'hidden',
    },
    suggestionItem: {
      color: '#2079c9',
      textDecoration: 'none',
      padding: '0.6rem 1rem',
      display: 'block',
      textAlign: 'left',
      borderBottom: `1px dotted ${theme.palette.divider}`,
      fontSize: '1rem',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: theme.palette.action.hover,
      },
    },
    outlined: {
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: theme.shape.borderRadius,
      padding: theme.spacing(0.5),
    },
  }
})
