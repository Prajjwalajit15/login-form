 
import React, { useState } from 'react';
import Login from './Login';
import Profile from './Profile';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');

  const handleLogin = async (username, password) => {
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.id);
        setLoggedIn(true);
        setUserId(data.id);
      } else {
        const errorData = await response.json();
        alert(errorData.error); // Show error message from API
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('An error occurred during login.');
    }
  };

  return (
    <div>
      {!loggedIn ? (
        <Login handleLogin={handleLogin} />
      ) : (
        <Profile userId={userId} />
      )}
    </div>
  );
};

export default App;

