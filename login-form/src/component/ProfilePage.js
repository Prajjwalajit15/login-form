import React, { useState, useEffect } from 'react';

function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user details based on the saved ID from local storage
    const userId = JSON.parse(localStorage.getItem('user')).id;

    fetch(`https://dummyjson.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        // Save the user object with details in local storage
        localStorage.setItem('user', JSON.stringify(data));
        setUser(data);
      })
      .catch((error) => console.error('Error fetching user details:', error));
  }, []);

  return (
    <div>
      <h2>Profile Page</h2>
      {user && (
        <div>
          <p>User ID: {user.id}</p>
          <p>Username: {user.username}</p>
          {/* Display other user information as needed */}
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
 