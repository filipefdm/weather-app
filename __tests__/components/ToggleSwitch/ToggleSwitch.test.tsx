import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { expect, it, test } from 'vitest'
import ToggleSwitch from '../../../src/components/ui/ToggleSwitch/ToggleSwitch'

test('ToggleSwitch', () => {
  it('renders the toggle switch with "C" and "F"', () => {
    const onClick = jest.fn()

    const { getByText } = render(<ToggleSwitch onClick={onClick} />)

    const cElement = getByText('C')
    expect(cElement).toBeInTheDocument()

    const fElement = getByText('F')
    expect(fElement).toBeInTheDocument()
  })

  it('calls onClick when the switch is clicked', () => {
    const onClick = jest.fn()

    const { getByTestId } = render(<ToggleSwitch onClick={onClick} />)

    const switchElement = getByTestId('toggle-switch')

    fireEvent.click(switchElement)

    expect(onClick).toHaveBeenCalled()
  })
})
