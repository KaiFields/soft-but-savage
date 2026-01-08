import React, { useState } from 'react';

// Mock API for authentication
const authAPI = {
  login: async (username, password) => {
    // In a real app, this would make a request to your backend
    console.log('Logging in with:', { username, password });
    if (password === 'password') { // Example of a successful login
      return { token: 'fake-jwt-token', user: { username } };
    } else {
      throw new Error('Invalid credentials');
    }
  },
  signup: async (username, password) => {
    // In a real app, this would create a new user
    console.log('Signing up with:', { username, password });
    return { token: 'fake-jwt-token', user: { username } };
  }
};


export default function UserAuth({ onAuth }) {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({ username: '', password: '' });
  const [mode, setMode] = useState('login');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const { username, password } = form;
      let authResponse;
      if (mode === 'login') {
        authResponse = await authAPI.login(username, password);
      } else {
        authResponse = await authAPI.signup(username, password);
      }
      setUser(authResponse.user);
      onAuth(authResponse.user);
      // In a real app, you would store the token (e.g., in localStorage)
      // and use it for subsequent API requests.
      console.log('Auth successful, token:', authResponse.token);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function handleLogout() {
    setUser(null);
    onAuth(null);
    // In a real app, you would also clear the stored token.
  }

  if (user) {
    return (
      <div className="user-auth">
        <span>Welcome, {user.username}!</span>
        <button onClick={handleLogout}>Log out</button>
      </div>
    );
  }

  return (
    <form className="user-auth-form" onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
      {error && <p className="error" style={{ color: 'red' }}>{error}</p>}
      <input
        name="username"
        value={form.username}
        onChange={handleChange}
        placeholder="Username"
        required
        disabled={loading}
      />
      <input
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
        required
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        {loading ? '...' : (mode === 'login' ? 'Log In' : 'Sign Up')}
      </button>
      <button type="button" onClick={() => setMode(mode === 'login' ? 'signup' : 'login')} disabled={loading}>
        {mode === 'login' ? 'Need an account? Sign Up' : 'Have an account? Log In'}
      </button>
    </form>
  );
}
