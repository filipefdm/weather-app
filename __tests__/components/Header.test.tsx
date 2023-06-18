import React from 'react'
import { expect, it, test } from 'vitest'
import { render } from '@testing-library/react'
import Header from '../../src/components/Header/Header'

test('Header', () => {
  it('renders the title', () => {
    const { getByText } = render(<Header />)
    const titleElement = getByText('Weather Application')
    expect(titleElement).toBeInTheDocument()
  })
})
