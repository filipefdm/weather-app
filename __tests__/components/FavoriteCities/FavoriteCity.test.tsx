import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import { expect, it, test, vi, afterEach } from 'vitest'

import { FavoriteCity } from '../../../src/components/FavoriteCities/FavoriteCity'
import { Provider } from 'react-redux'
import { store } from '../../../src/store/store'

test('FavoriteCity', () => {
  const favorite = {
    id: 1,
    name: 'City 1',
  }
  const onRemoveFavorite = vi.fn()

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('renders the favorite city name', () => {
    const { getByText } = render(
      <Provider store={store}>
        <FavoriteCity favorite={favorite} onRemoveFavorite={onRemoveFavorite} />
      </Provider>
    )

    const cityNameElement = getByText(favorite.name)
    expect(cityNameElement).toBeInTheDocument()
  })

  it('calls onRemoveFavorite when remove button is clicked', () => {
    const { getByRole } = render(
      <FavoriteCity favorite={favorite} onRemoveFavorite={onRemoveFavorite} />
    )

    const removeButton = getByRole('button', { name: /remove/i })
    fireEvent.click(removeButton)

    expect(onRemoveFavorite).toHaveBeenCalledTimes(1)
    expect(onRemoveFavorite).toHaveBeenCalledWith(favorite)
  })
})
