/// <reference types="cypress" />

describe('Footer', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display the developer name and link', () => {
    cy.contains('Developed By')
      .should('be.visible')
      .within(() => {
        cy.get('a')
          .should('have.attr', 'href', 'https://github.com/filipefdm')
          .and('have.text', 'Filipe Motta')
      })
  })
})
