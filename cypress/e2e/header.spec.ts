describe('Header', () => {
  it('passes', () => {
    cy.visit({
      method: 'GET',
      url: '/',
      failOnStatusCode: false,
    })

    // Add a "data-testid" attribute to the title element in the component
    cy.get('[data-testid="header-title"]').contains('Weather Application') // Check if the title text is correct
  })

  it('navigates to the GitHub repository when the icon is clicked', () => {
    cy.visit('http://localhost:3000/')
    cy.request({
      method: 'GET',
      url: 'http://localhost:3000/',
      failOnStatusCode: false,
    })

    cy.origin('https://github.com', () => {
      cy.on('uncaught:exception', e => {
        if (e.message.includes('Things went bad')) {
          return false
        }
      })
    })

    // Add a "data-testid" attribute to the GitHub link element in the component
    cy.get('[data-testid="github-link"]').should(
      'have.attr',
      'href',
      'https://www.github.com/filipefdm/weather-app'
    ) // Check if the href attribute is correct

    cy.get('[data-testid="github-link"] img').click() // Simulate clicking the icon
  })
})
