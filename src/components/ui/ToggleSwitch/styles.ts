import { styled } from '@mui/system'
import { Theme } from '@mui/material'

export const Switch = styled('label')(({ theme }: { theme: Theme }) => ({
  position: 'relative',
  display: 'inline-block',
  width: '50px',
  height: '20px',
  cursor: 'pointer',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  transition: '0.4s',
  borderRadius: '55px',
  backgroundColor: theme.temperatureSwitch.backgroundColor,
  '& .on, & .off': {
    color: theme.temperatureSwitch.textColor,
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: '50%',
    fontSize: '1rem',
    fontWeight: 500,
    display: 'flex',
    '& svg': {
      width: '20px',
      fill: 'white',
    },
  },
  '& .on': {
    paddingRight: '15px',
  },
  '& .off': {
    paddingLeft: '15px',
  },
}))

export const Slider = styled('div')(({ theme }: { theme: Theme }) => ({
  position: 'absolute',
  height: '16px',
  width: '18px',
  left: '2px',
  top: '2px',
  backgroundColor: theme.temperatureSwitch.sliderColor,
  transition: '0.4s',
  borderRadius: '44px',
}))
