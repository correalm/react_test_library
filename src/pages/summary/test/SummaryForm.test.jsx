import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from '../SummaryForm'

test('checkbox is disable by default and enables the button when is checked', async () => {
  render(<SummaryForm />)

  const checkbox = await screen.findByRole('checkbox', { name: 'I agree to Terms and Conditions' })
  const btn = await screen.findByRole('button', { name: 'Confirm order' })
  
  expect(checkbox).not.toBeChecked()
  expect(btn).toBeDisabled()

  fireEvent.click(checkbox)
  expect(checkbox).toBeChecked()
  expect(btn).toBeEnabled()

  fireEvent.click(checkbox)
  expect(checkbox).not.toBeChecked()
  expect(btn).toBeDisabled()
})