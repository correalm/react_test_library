import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByRole('link', { name: /learn react/i });
  expect(linkElement).toBeInTheDocument();
});

test('renders learn test library', () => {
  render(<App />);
  const learElement = screen.getByText('Learn test library');
  expect(learElement).toBeInTheDocument();
});