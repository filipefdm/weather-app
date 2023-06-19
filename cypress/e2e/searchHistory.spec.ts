describe('SearchHistory Component', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display the search history section title', () => {
    cy.get('[data-testid="section-history-title"]')
      .should('have.length', 1)
      .contains('Histórico de Cidades Pesquisadas')
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

  it('should display the search history items', () => {
    const cityName = 'New York'

    cy.get('[data-testid="search-input"]').type(cityName)
    cy.get('[data-testid="search-history-item"]').should(
      'have.length.greaterThan',
      0
    )
  })

  it('should trigger the onSearch callback when clicking on the "Exibir" button', () => {
    const cityName = 'New York'

    cy.get('[data-testid="search-input"]').type(cityName)
    cy.get('[data-testid="submit-button"]').click()
    cy.get('[data-testid="search-history-item"]')
      .first()
      .contains('Exibir')
      .click()
  })

  it('should trigger the onAddFavorite callback when clicking on the Star button', () => {
    const cityName = 'New York'

    cy.get('[data-testid="search-input"]').type(cityName)
    cy.get('[data-testid="submit-button"]').click()
    cy.get('[data-testid="search-history-item"]').should(
      'have.length.greaterThan',
      0
    )
    cy.get('[data-testid="star-icon"]').click()
  })
})
