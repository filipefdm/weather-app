import { styled } from '@mui/system'
import { Theme } from '@mui/material'

export const SearchElement = styled('div')(({ theme }: { theme: Theme }) => ({
  position: 'relative',
  height: '3.25rem',
  borderRadius: '26px',
  background: theme.panelBgColor,
  boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
  marginBottom: '1.4rem',
  display: 'flex',
  alignItems: 'center',
  zIndex: 1,
}))

export const SearchInput = styled('input')(({ theme }: { theme: Theme }) => ({
  flex: 1,
  marginLeft: '1rem',
  height: '3.25rem',
  border: 'none',
  backgroundColor: theme.panelBgColor,
  fontSize: '1.125rem',
  color: theme.searchInput.color,
  width: '100%',
  '&:focus': {
    outline: 'none',
  },
  '&::placeholder': {
    color: theme.searchInput.placeholderColor,
  },
}))

export const SearchIcon = styled('svg')({
  marginLeft: '1.2rem',
  fill: '#4a6fa1',
})

export const LocationButton = styled('button')(
  ({ theme }: { theme: Theme }) => ({
    border: 'none',
    cursor: 'pointer',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderRadius: '5rem',
    padding: theme.spacing(1, 2),
    marginRight: '1rem',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
    '&:disabled': {
      cursor: 'not-allowed',
      backgroundColor: theme.palette.grey[300],
      color: theme.palette.text.disabled,
    },
  }),
)

export const LocationIcon = styled('svg')({
  marginRight: '1.2rem',
  fill: '#4a6fa1',
})

export const SearchResult = styled('div')(({ theme }: { theme: Theme }) => ({
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
}))

export const SuggestionItem = styled('a')(({ theme }: { theme: Theme }) => ({
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
}))

export const Outlined = styled('div')(({ theme }: { theme: Theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(0.5),
}))
