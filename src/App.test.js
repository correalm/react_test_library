import { render, screen, fireEvent } from '@testing-library/react';
import { replaceCamelCaseWithSpaces } from './App';
import App from './App';

test('button has a correct initial color and updates when clicked', async () => {
  render(<App />)

  const button = await screen.findByRole('button', { name: 'Change to blue'})
  
  expect(button).toHaveStyle({
    backgroundColor: 'red'
  })

  fireEvent.click(button)
  expect(button).toHaveStyle({ backgroundColor: 'blue' })
  expect(button).toHaveTextContent('Change to blue')
})

test('initial conditionals', () => {
  render(<App />)

  const button = screen.getByRole('button', { name: 'Change to blue' })
  const checkbox = screen.getByRole('checkbox')

  expect(button).toBeEnabled()
  expect(checkbox).not.toBeChecked()
})

test('should disable the button when checkbox checked and enable him again', () => {
  render(<App />)

  const button = screen.getByRole('button', { name: 'Change to blue' })
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })

  expect(button).toBeEnabled()

  fireEvent.click(checkbox)
  expect(checkbox).toBeChecked()
  expect(button).toBeDisabled()

  fireEvent.click(checkbox)
  expect(checkbox).not.toBeChecked()
  expect(button).toBeEnabled()
})

test('should change the background color of button to gray and return to red', () => {
  render(<App />)

  const button = screen.getByRole('button', { name: 'Change to blue' })
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })

  fireEvent.click(checkbox)
  expect(button).toHaveStyle({
    backgroundColor: 'gray'
  })

  fireEvent.click(checkbox)
  expect(button).toHaveStyle({
    backgroundColor: 'red'
  })
})

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelCaseWithSpaces('Red')).toBe('Red')
  })

  test('Works for one inner capital letter', () => {
    expect(replaceCamelCaseWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  })

  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelCaseWithSpaces('MidiumVioletRed')).toBe('Midium Violet Red')
  })
})