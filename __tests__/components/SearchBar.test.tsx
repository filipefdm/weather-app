import React from 'react'
import { expect, it, test } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import SearchBar from '../../src/components/SearchBar/SearchBar'
import { Provider } from 'react-redux'
import { store } from '../../src/store/store'

test('SearchBar', () => {
  it('calls onSearch when button is clicked with a non-empty city', () => {
    // Mock onSearch function
    const mockOnSearch = jest.fn()

    // Render the SearchBar component
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <SearchBar onSearch={mockOnSearch} />
      </Provider>
    )

    // Get the input element and change its value
    const inputElement = getByPlaceholderText('Digite uma cidade')
    fireEvent.change(inputElement, { target: { value: 'London' } })

    // Get the button element and click it
    const buttonElement = getByText('Pesquisar')
    fireEvent.click(buttonElement)

    // Check if onSearch is called with the correct city
    expect(mockOnSearch).toHaveBeenCalledWith('London')
  })

  test('does not call onSearch when button is clicked with an empty city', () => {
    // Mock onSearch function
    const mockOnSearch = jest.fn()

    // Render the SearchBar component
    const { getByText } = render(
      <Provider store={store}>
        <SearchBar onSearch={mockOnSearch} />
      </Provider>
    )

    // Get the button element and click it
    const buttonElement = getByText('Pesquisar')
    fireEvent.click(buttonElement)

    // Check if onSearch is not called
    expect(mockOnSearch).not.toHaveBeenCalled()
  })
})
