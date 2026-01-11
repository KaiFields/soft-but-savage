import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer.js';

// Mock the entire firebase module
vi.mock('./firebase', () => ({
  db: {
    collection: vi.fn(() => ({
      onSnapshot: vi.fn(callback => callback({ docs: [] })),
      orderBy: vi.fn(() => ({
        onSnapshot: vi.fn(callback => callback({ docs: [] }))
      }))
    }))
  },
  auth: {}, // Mock auth object
  provider: {} // Mock provider object
}));

test('renders user display name when logged in', () => {
  const loggedInState = {
    ...initialState,
    user: { displayName: 'Test User', email: 'test@example.com', photoURL: 'https://example.com/avatar.jpg' },
  };

  render(
    <StateProvider initialState={loggedInState} reducer={reducer}>
      <App />
    </StateProvider>
  );
  const userElements = screen.getAllByText(/Test User/i);
  expect(userElements.length).toBeGreaterThan(0);
});
