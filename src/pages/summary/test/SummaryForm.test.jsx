import { queryByRole, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import SummaryForm from '../SummaryForm'

test('inital conditions', async () => {
  render(<SummaryForm />)

  const checkbox = await screen.findByRole('checkbox', { name: 'I agree to Terms and Conditions' })
  const btn = await screen.findByRole('button', { name: 'Confirm order' })
  
  expect(checkbox).not.toBeChecked()
  expect(btn).toBeDisabled()
})

test('should enable the button when is checked and disable him again', async () => {
  const user = userEvent.setup()
  render(<SummaryForm />)

  const checkbox = await screen.findByRole('checkbox', { name: 'I agree to Terms and Conditions' })
  const btn = await screen.findByRole('button', { name: 'Confirm order' })

  await user.click(checkbox)
  expect(checkbox).toBeChecked()
  expect(btn).toBeEnabled()

  await user.click(checkbox)
  expect(checkbox).not.toBeChecked()
  expect(btn).toBeDisabled()
})

test('popover responds to hover', async () => {
  const user = userEvent.setup()
  render(<SummaryForm />)

  const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i)
  expect(nullPopover).not.toBeInTheDocument()

  // simulate the mousehover and appears the popover
  const termsAndConditions = screen.getByText(/terms and conditions/i)
  
  await user.hover(termsAndConditions)
  const popover = screen.getByText(/no ice cream will actually be delivered/i)
  expect(popover).toBeInTheDocument()

  await user.unhover(termsAndConditions)
  expect(popover).not.toBeInTheDocument()
})