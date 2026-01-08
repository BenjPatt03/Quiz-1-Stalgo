import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginStart, loginSuccess, loginFailure, logout } from '../features/authSlice';

const mockLogin = (username, password) => {
  // Simulate an API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'admin' && password === 'password') {
        resolve({ user: { username: 'admin' }, token: 'mock-token-123' });
      } else {
        reject('Invalid credentials');
      }
    }, 1000);
  });
};

const AuthDemo = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { user, loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const data = await mockLogin(username, password);
      dispatch(loginSuccess(data));
    } catch (err) {
      dispatch(loginFailure(err));
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div style={{ textAlign: 'center', margin: '2rem' }}>
      <h2>Auth State Demo</h2>
      {user ? (
        <>
          <p>Welcome, {user.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <form onSubmit={handleLogin} style={{ display: 'inline-block' }}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ marginLeft: '1rem' }}
          />
          <button type="submit" disabled={loading} style={{ marginLeft: '1rem' }}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
          {error && <div style={{ color: 'red', marginTop: '1rem' }}>{error}</div>}
        </form>
      )}
    </div>
  );
};

export default AuthDemo;
