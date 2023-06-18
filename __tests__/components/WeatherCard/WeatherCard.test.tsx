import React from 'react'
import { expect, it, test } from 'vitest'
import { render } from '@testing-library/react'
import WeatherCard from '../../../src/components/WeatherCard/WeatherCard'
import { Provider } from 'react-redux'
import { store } from '../../../src/store/store'

test('WeatherCard', () => {
  const mockWeatherData = {
    main: {
      temp: 290,
      feels_like: 288,
      temp_min: 288,
      temp_max: 292,
      humidity: 80,
      pressure: 1000,
      sea_level: 1010,
      grnd_level: 990,
    },
    name: 'London',
    weather: [{ id: 1, main: 'Clouds', icon: '01d', description: 'Cloudy' }],
  }

  it('renders the weather card with correct data', () => {
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <WeatherCard weatherData={mockWeatherData} />
      </Provider>
    )

    expect(getByText('Clima Atual')).toBeInTheDocument()
    expect(getByText('London')).toBeInTheDocument()
    expect(getByText('Cloudy')).toBeInTheDocument()
    const feelsLikeElement = getByTestId('feels-like')
    expect(feelsLikeElement).toBeInTheDocument()
    expect(feelsLikeElement.textContent).toMatch('Feels like: 15°')
    expect(getByText('15°C')).toBeInTheDocument()
    expect(getByText('13°C')).toBeInTheDocument()
    expect(getByText('17°C')).toBeInTheDocument()
    expect(getByText('80%')).toBeInTheDocument()
    expect(getByText('10 km/h')).toBeInTheDocument()
    expect(getByText('5 mm')).toBeInTheDocument()
  })
})
