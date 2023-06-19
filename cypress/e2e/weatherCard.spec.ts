import {
  celciusToFahrenheit,
  kelvinToCelcius,
} from '../../src/utils/unitConversion'

describe('WeatherCard', () => {
  it('displays the current weather information correctly', () => {
    cy.intercept('GET', 'https://api.openweathermap.org/data/2.5/weather*').as(
      'getWeatherData'
    )

    const cityName = 'Jaboatão dos Guararapes'

    cy.visit('/')
    cy.get('[data-testid="search-input"]').type(cityName)
    cy.get('[data-testid="submit-button"]').click()

    cy.wait('@getWeatherData', { timeout: 500 }).then(({ response }) => {
      if (response?.statusCode === 200) {
        cy.get('[data-testid="location-name"]').should('contain', cityName)

        cy.wait(2000)
        cy.get('[data-testid="current-temperature"]').should(
          'contain',
          `${kelvinToCelcius(response.body.main.temp)}`
        )
        cy.get('[data-testid="weather-description"]').should(
          'contain',
          response.body.weather[0].description
        )
        cy.get('[data-testid="feels-like"]').should(
          'contain',
          `Feels like: ${kelvinToCelcius(response.body.main.feels_like)}`
        )
        cy.get('[data-testid="temp-min"]').should(
          'contain',
          `${kelvinToCelcius(response.body.main.temp_min)}`
        )
        cy.get('[data-testid="temp-max"]').should(
          'contain',
          `${kelvinToCelcius(response.body.main.temp_max)}`
        )
        cy.get('[data-testid="humidity"]').should(
          'contain',
          `${response.body.main.humidity}%`
        )
        cy.get('[data-testid="wind-speed"]').should(
          'contain',
          `${response.body.wind.speed} km/h`
        )
        cy.get('[data-testid="pressure"]').should(
          'contain',
          `${response.body.main.pressure} hPa`
        )
      } else {
        throw new Error('Failed to retrieve weather data')
      }
    })
  })

  it('toggles temperature unit when the toggle switch is clicked', () => {
    cy.intercept('GET', 'https://api.openweathermap.org/data/2.5/weather*').as(
      'getWeatherData'
    )

    cy.visit('/')

    cy.wait('@getWeatherData', { timeout: 10000 }).then(({ response }) => {
      const body = response?.body

      const celsiusTemperature = `${kelvinToCelcius(body.main.temp)}`
      const fahrenheitTemperature = `${celciusToFahrenheit(body.main.temp)}`

      cy.get('[data-testid="current-temperature"]').should(
        'contain',
        celsiusTemperature
      )

      cy.get('[data-testid="toggle-switch"]').click({ multiple: true })

      cy.get('[data-testid="current-temperature"]').should(
        'contain',
        celsiusTemperature
      )

      cy.get('[data-testid="toggle-switch"]').click({ multiple: true })

      cy.get('[data-testid="current-temperature"]').should(
        'contain',
        celsiusTemperature
      )
    })
  })
})
