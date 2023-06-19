import { City } from '../../src/types/weatherTypes'
import { getFavoriteCities } from '../../src/store/selectors/favoritesSelectors'
import { useSelector } from 'react-redux'

interface WindowWithRedux extends Cypress.AUTWindow {
  useSelector: typeof useSelector
}

describe('FavoriteCities', () => {
  const city1: City = {
    id: 1,
    name: 'San Francisco',
    temperature: 20,
    description: 'Sunny',
    isFavorite: true,
  }
  const city2: City = {
    id: 2,
    name: 'New York',
    temperature: 25,
    description: 'Sunny',
    isFavorite: true,
  }

  beforeEach(() => {
    cy.visit('/', {
      onBeforeLoad(win: WindowWithRedux) {
        // Mock the return value of `useSelector` to return favorite cities
        // that we define above
        win.useSelector = useSelector
        cy.stub(win, 'useSelector')
          .withArgs(getFavoriteCities)
          .returns([city1, city2])
      },
    })
  })

  it('displays favorite city titles', () => {
    cy.get('[data-testid="favorite-city-title"]')
      .should('have.length', 2)
      .and('contain', city1.name)
      .and('contain', city2.name)
  })

  it('displays a section title', () => {
    cy.get('[data-testid="section-title"]').should(
      'have.text',
      'Cidades Favoritas'
    )
  })

  it('displays a FavoriteCity card for each favorite city', () => {
    cy.get('[data-testid="favorite-city-card"]').should('have.length', 2)
  })

  it('calls onRemoveFavorite when remove button is clicked', () => {
    const removeCity = cy.stub().as('removeCity')
    cy.get('[data-testid="favorite-city-card"]')
      .first()
      .find('[role="button"]')
      .click()
      .then(() => {
        expect(removeCity).to.be.calledOnceWith(city1)
      })
  })
})
