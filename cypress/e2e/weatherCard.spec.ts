describe('WeatherCard', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the current weather information correctly', () => {
    cy.intercept('GET', 'https://api.openweathermap.org/**', {
      fixture: 'weatherData.json',
    }).as('getWeatherData')

    cy.wait('@getWeatherData')

    cy.get('[data-testid="location-name"]').should('contain', 'London')
    cy.get('[data-testid="current-temperature"]').should('contain', '22°C')
    cy.get('[data-testid="weather-description"]').should('contain', 'Cloudy')
    cy.get('[data-testid="feels-like"]').should('contain', 'Feels like: 20°C')
    cy.get('[data-testid="temp-min"]').should('contain', '20°C')
    cy.get('[data-testid="temp-max"]').should('contain', '24°C')
    cy.get('[data-testid="humidity"]').should('contain', '70%')
    cy.get('[data-testid="wind-speed"]').should('contain', '10 km/h')
    cy.get('[data-testid="pressure"]').should('contain', '1012 hPa')
  })

  it('toggles temperature unit when the toggle switch is clicked', () => {
    cy.intercept('GET', 'https://api.openweathermap.org/**', {
      fixture: 'weatherData.json',
    }).as('getWeatherData')

    cy.wait('@getWeatherData')

    cy.get('[data-testid="current-temperature"]').should('contain', '22°C')

    cy.get('[data-testid="toggle-switch"]').click()

    cy.get('[data-testid="current-temperature"]').should('contain', '68°F')
  })
})
