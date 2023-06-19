/// <reference types="cypress" />

describe('SearchBar', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display the search input', () => {
    cy.get('[data-testid="search-input"]').should('be.visible')
  })

  it('should allow entering a city name in the search input', () => {
    const cityName = 'New York'

    cy.get('[data-testid="search-input"]').type(cityName)
    cy.get('[data-testid="search-input"]').should('have.value', cityName)
  })

  it('should trigger a search when the search button is clicked', () => {
    const cityName = 'New York'

    cy.get('[data-testid="search-input"]').type(cityName)
    cy.get('[data-testid="submit-button"]').click()
  })

  it('should trigger a search when the Enter key is pressed', () => {
    const cityName = 'New York'

    cy.get('[data-testid="search-input"]').type(cityName).type('{enter}')
  })
})
