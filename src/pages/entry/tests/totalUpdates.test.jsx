import { render, screen } from '@testing-library/react'
import UserEvent from '@testing-library/user-event'
import Options from '../Options'

test('update scoop subtotal when scoops change', async () => {
  const user = UserEvent.setup()
  render(<Options optionType='scoops' />)

  const scoopSubtotal = screen.getByText('Scoops total: $', { exact: false })
  expect(scoopSubtotal).toHaveTextContent('0.00')

  const vanillaInput = await screen.findByRole('spinbutton', { name: /vanilla/i })
  const chocolateInput = await screen.findByRole('spinbutton', { name: /chocolate/i })

  // Clear the input that will be tested before the test
  await user.clear(vanillaInput)
  await user.type(vanillaInput, '1')
  expect(scoopSubtotal).toHaveTextContent('2.00')

  await user.clear(chocolateInput)
  await user.type(chocolateInput, '2')
  expect(scoopSubtotal).toHaveTextContent('6.00')
})