import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders brand name', () => {
  render(<App />);
  const linkElement = screen.getByText(/Soft But Savage/i);
  expect(linkElement).toBeDefined();
});
