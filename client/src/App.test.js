import { render, screen } from '@testing-library/react';
import App from './App';

test('should show a heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading');
  expect(heading).toBeInTheDocument();
});
