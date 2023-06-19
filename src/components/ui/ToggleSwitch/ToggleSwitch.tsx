import React, { useState } from 'react'
import { lightTheme } from '../../../styles/theme'
import { Slider, Switch } from './styles'

interface IToggleSwitchProps {
  onClick: Function
}

const ToggleSwitch: React.FC<IToggleSwitchProps> = props => {
  const [toggled, setToggled] = useState(false)

  return (
    <Switch
      theme={lightTheme}
      onClick={() => {
        setToggled(checked => !checked)
        props.onClick()
      }}
      data-testid="toggle-switch"
    >
      {toggled && <span className="on">C</span>}
      {!toggled && <span className="off">F</span>}
      <Slider
        theme={lightTheme}
        style={{
          transform: toggled ? ' translateX(28px)' : ' translateX(0px)',
        }}
      ></Slider>
    </Switch>
  )
}

export default ToggleSwitch
