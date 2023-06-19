describe('ToggleSwitch', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('renders the component', () => {
    cy.get('[data-testid="toggle-switch"]').should('exist')
  })

  it('toggles the switch when clicked', () => {
    cy.get('[data-testid="toggle-switch"]').click({ multiple: true })
  })
})
