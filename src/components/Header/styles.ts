import { styled } from '@mui/system'
import { Theme } from '@mui/material'

export const HeaderContainer = styled('header')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '8rem',
})

export const Title = styled('h1')(({ theme }: { theme: Theme }) => ({
  color: theme.appTitleColor,
  fontSize: '2.2rem',
}))

export const GithubLink = styled('a')(({ theme }: { theme: Theme }) => ({
  marginLeft: '1rem',
  '& svg': {
    fill: theme.appTitleColor,
  },
  '&:hover svg': {
    fill: '#20546a',
  },
}))

export const HeaderIconsContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
})
