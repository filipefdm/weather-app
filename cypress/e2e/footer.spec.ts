/// <reference types="cypress" />

describe('Footer', () => {
  beforeEach(() => {
    cy.visit('/') // Altere a URL de acordo com a rota do seu componente Footer
  })

  it('should display the developer name and link in the footer', () => {
    cy.get('footer').should('be.visible')
    cy.get('footer')
      .find('a')
      .should('have.attr', 'href', 'https://github.com/filipefdm')
  })

  // Exemplo adicional: Teste de clique no link do desenvolvedor no rodapé
  it('should navigate to the developer GitHub profile when clicking on the developer link', () => {
    cy.get('footer').contains('Filipe Motta').click()
    cy.url().then(url => {
      expect(url).to.include('github.com/filipefdm') // Verifica se a URL inclui 'github.com/filipefdm'
    })
    // Faça mais verificações ou asserções necessárias para testar a página do perfil do GitHub
  })
})
