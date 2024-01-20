import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';

function App() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });

      if (response.ok) {
        const user = await response.json();
        // Save user object in local storage
        localStorage.setItem('user', JSON.stringify(user));
        // Navigate to the profile page
        history.push('/profile');
      } else {
        // Handle error or show error message to the user
        console.error('Authentication failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error during authentication:', error);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <p>Welcome back! 👋</p>
        <h2>Sign in to your account</h2>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Continue</button>

        <p className="forget-password">Forget your password?</p>
      </form>
    </div>
  );
}

export default App;
