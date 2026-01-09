import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer.js';

test('renders brand name', () => {
  const loggedInState = {
    ...initialState,
    user: { displayName: 'Test User', email: 'test@example.com' },
  };

  render(
    <StateProvider initialState={loggedInState} reducer={reducer}>
      <App />
    </StateProvider>
  );
  const linkElement = screen.getByText(/Soft But Savage/i);
  expect(linkElement).toBeInTheDocument();
});
