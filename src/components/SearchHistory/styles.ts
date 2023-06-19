import { Theme } from '@mui/material'
import { styled } from '@mui/system'

export const SearchHistoryContainer = styled('div')({
  backgroundColor: '#FFFFFF',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
  borderRadius: '15px',
  padding: '1.5rem 2rem',
  display: 'flex',
  flexDirection: 'column',
  transition: 'box-shadow 0.3s ease',
  '&:hover': {
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
  },
})

export const SectionTitle = styled('h2')(({ theme }: { theme: Theme }) => ({
  fontWeight: 500,
  fontSize: '1.125rem',
  color: theme.panelTitleColor,
  marginBottom: '1rem',
}))
