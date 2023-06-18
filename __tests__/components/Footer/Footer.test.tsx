import React from 'react'
import { render } from '@testing-library/react'
import { expect, it, test } from 'vitest'
import Footer from '../../../src/components/Footer/Footer'

test('Footer', () => {
  it('renders the footer with developer name', () => {
    const { getByText } = render(<Footer />)
    const developerNameElement = getByText(/Developed By/i)
    expect(developerNameElement).toBeInTheDocument()
  })

  it('renders the developer name as a link', () => {
    const { getByText } = render(<Footer />)
    const developerNameLinkElement = getByText(/Filipe Motta/i)
    expect(developerNameLinkElement).toBeInTheDocument()
    expect(developerNameLinkElement).toHaveAttribute(
      'href',
      'https://github.com/filipefdm'
    )
  })
})
