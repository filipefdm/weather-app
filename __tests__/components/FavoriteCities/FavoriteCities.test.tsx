import React from 'react'
import { render } from '@testing-library/react'
import { useSelector } from 'react-redux'
import { City } from '../../../src/types/weatherTypes'
import FavoriteCities from '../../../src/components/FavoriteCities/FavoriteCities'
import { expect, it, test, vi, beforeEach, afterEach } from 'vitest'

vi.mock('react-redux', () => ({
  useSelector: vi.fn(),
}))

const mockedUseSelector = useSelector as jest.Mock

test('FavoriteCities', () => {
  const favorites: City[] = [
    { id: 1, name: 'City 1' },
    { id: 2, name: 'City 2' },
    { id: 3, name: 'City 3' },
  ]

  const onRemoveFavorite = vi.fn()

  beforeEach(() => {
    mockedUseSelector.mockImplementation(selector =>
      selector({
        favorites: {
          favorites,
        },
      })
    )
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('renders the favorite cities', () => {
    const { getByText } = render(
      <FavoriteCities
        favorites={favorites}
        onRemoveFavorite={onRemoveFavorite}
      />
    )

    favorites.forEach(favorite => {
      const cityElement = getByText(favorite.name)
      expect(cityElement).toBeInTheDocument()
    })
  })

  it('calls onRemoveFavorite when a favorite city is removed', () => {
    const { getAllByTestId } = render(
      <FavoriteCities
        favorites={favorites}
        onRemoveFavorite={onRemoveFavorite}
      />
    )

    const removeButtons = getAllByTestId('remove-favorite-button')

    removeButtons.forEach((button, index) => {
      button.click()
      expect(onRemoveFavorite).toHaveBeenCalledWith(favorites[index])
    })
  })
})
