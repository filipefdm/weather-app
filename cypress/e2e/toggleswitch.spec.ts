describe('ToggleSwitch Component', () => {
  beforeEach(() => {
    cy.visit('/') // Altere a rota conforme necessário
  })

  it('should toggle the switch when clicked', () => {
    cy.get('[data-testid="toggle-switch"]').should('not.have.class', 'on')

    cy.get('[data-testid="toggle-switch"]').click()

    cy.get('[data-testid="toggle-switch"]').should('have.class', 'on')

    cy.get('[data-testid="toggle-switch"]').click()

    cy.get('[data-testid="toggle-switch"]').should('not.have.class', 'on')
  })

  it('should trigger the onClick callback when clicked', () => {
    cy.window().then(win => {
      cy.stub(win, 'alert')
    })

    cy.get('[data-testid="toggle-switch"]').click()

    cy.window().its('alert').should('have.been.calledOnce')
  })
})
