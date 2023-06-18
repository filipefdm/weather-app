import React from 'react'
import { render } from '@testing-library/react'
import { expect, it, test, vi } from 'vitest'
import { useSelector } from 'react-redux'
import Temperature from '../../../src/components/WeatherCard/Temperature'

vi.mock('react-redux', () => ({
  useSelector: vi.fn(),
}))

const mockedUseSelector = useSelector as jest.Mock

test('Temperature', () => {
  it('renders the temperature in Celsius by default', () => {
    const value = 25

    mockedUseSelector.mockReturnValueOnce({ degreeType: 'Celsius' })

    const { getByText } = render(<Temperature value={value} />)

    const temperatureElement = getByText(value.toString())
    expect(temperatureElement).toBeInTheDocument()
  })

  it('renders the temperature in Fahrenheit when degreeType is Fahrenheit', () => {
    const value = 25
    const fahrenheitValue = 77

    mockedUseSelector.mockReturnValueOnce({ degreeType: 'Fahrenheit' })

    const { getByText } = render(<Temperature value={value} />)

    const temperatureElement = getByText(fahrenheitValue.toString())
    expect(temperatureElement).toBeInTheDocument()
  })
})
