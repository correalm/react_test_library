import { render, screen, fireEvent } from '@testing-library/react';
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
