describe('SearchHistory Component', () => {
  beforeEach(() => {
    cy.visit('/') // Altere a rota conforme necessário
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
    cy.location('href').should('include', `/search?city=${cityName}`)
    // Adicione mais verificações ou asserções necessárias para testar o resultado da pesquisa
  })

  it('should display the search history items', () => {
    cy.get('[data-testid="search-history-item"]').should(
      'have.length.greaterThan',
      0
    )
  })

  it('should trigger the onSearch callback when clicking on the "Exibir" button', () => {
    cy.get('[data-testid="search-history-item"]')
      .first()
      .contains('Exibir')
      .click()
    // Faça asserções ou verificações adicionais necessárias após o clique no botão "Exibir"
  })

  it('should trigger the onAddFavorite callback when clicking on the Star button', () => {
    cy.get('[data-testid="search-history-item"]')
      .first()
      .contains('Adicionar aos Favoritos')
      .click()
    // Faça asserções ou verificações adicionais necessárias após o clique no botão "Adicionar aos Favoritos"
  })
})
