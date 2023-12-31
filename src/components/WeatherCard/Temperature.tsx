import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { celciusToFahrenheit, TempUnit } from '../../utils/unitConversion'

interface ITemperatureProps {
  value: number
}

const Temperature: React.FC<ITemperatureProps> = (props) => {
  const { degreeType } = useSelector((state: RootState) => ({
    degreeType: state.app.tempUnit,
  }))

  if (degreeType === TempUnit.FAHRENHEIT) {
    return <>{celciusToFahrenheit(props.value)}</>
  }
  return <>{props.value}</>
}

export default Temperature
