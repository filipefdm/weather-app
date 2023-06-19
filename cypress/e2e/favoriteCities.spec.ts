/// <reference types="cypress" />

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
        win.useSelector = useSelector
        cy.stub(win, 'useSelector')
          .callThrough()
          .withArgs(getFavoriteCities)
          .returns([city1, city2])
      },
    })
  })

  it('displays the section title', () => {
    cy.get('[data-testid="section-title"]').should(
      'contain.text',
      'Cidades Favoritas'
    )
  })

  it('displays a FavoriteCity card for each favorite city', () => {
    cy.get('[data-testid="search-input"]').type('London')
    cy.get('[data-testid="submit-button"]').click()
    cy.get('[data-testid="search-history-item"]').should(
      'have.length.greaterThan',
      0
    )
    cy.get('[data-testid="star-icon"]').click()
    cy.wait(1000)
    cy.get('[data-testid="favorite-city-card"]').should('have.length', 1)
  })

  it('deletes a FavoriteCity card for each favorite city', () => {
    cy.get('[data-testid="search-input"]').type('London')
    cy.get('[data-testid="submit-button"]').click()
    cy.get('[data-testid="search-history-item"]').should(
      'have.length.greaterThan',
      0
    )
    cy.get('[data-testid="star-icon"]').click()
    cy.wait(1000)
    cy.get('[data-testid="favorite-city-card"]').should('have.length', 1)
    cy.get('[data-testid="trash-icon"]').click()
  })
})
