import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { expect, it, test } from 'vitest'
import SearchHistory from '../../../src/components/SearchHistory/SearchHistory'
import { Provider } from 'react-redux'
import { store } from '../../../src/store/store'

test('SearchHistory', () => {
  it('renders the search history with cities', () => {
    const history = [
      { id: 1, name: 'City 1' },
      { id: 2, name: 'City 2' },
      { id: 3, name: 'City 3' },
    ]

    const onSearch = jest.fn()
    const onAddFavorite = jest.fn()

    const { getByText } = render(
      <Provider store={store}>
        <SearchHistory
          history={history}
          onSearch={onSearch}
          onAddFavorite={onAddFavorite}
        />
      </Provider>
    )

    history.forEach(city => {
      const cityElement = getByText(city.name)
      expect(cityElement).toBeInTheDocument()
    })
  })

  it('calls onSearch when "Exibir" button is clicked', () => {
    const history = [
      { id: 1, name: 'City 1' },
      { id: 2, name: 'City 2' },
      { id: 3, name: 'City 3' },
    ]

    const onSearch = jest.fn()
    const onAddFavorite = jest.fn()

    const { getAllByText } = render(
      <Provider store={store}>
        <SearchHistory
          history={history}
          onSearch={onSearch}
          onAddFavorite={onAddFavorite}
        />
      </Provider>
    )

    const showButtons = getAllByText('Exibir')

    showButtons.forEach((button, index) => {
      fireEvent.click(button)
      expect(onSearch).toHaveBeenCalledWith(history[index].name)
    })
  })

  it('calls onAddFavorite when "Adicionar aos Favoritos" button is clicked', () => {
    const history = [
      { id: 1, name: 'City 1' },
      { id: 2, name: 'City 2' },
      { id: 3, name: 'City 3' },
    ]

    const onSearch = jest.fn()
    const onAddFavorite = jest.fn()

    const { getAllByTestId } = render(
      <Provider store={store}>
        <SearchHistory
          history={history}
          onSearch={onSearch}
          onAddFavorite={onAddFavorite}
        />
      </Provider>
    )

    const addButtons = getAllByTestId('add-favorite-button')

    addButtons.forEach((button, index) => {
      fireEvent.click(button)
      expect(onAddFavorite).toHaveBeenCalledWith(history[index])
    })
  })
})
