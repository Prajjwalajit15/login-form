 
import React, { useState, useEffect } from 'react'; 

const Profile = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/users/${userId}`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, [userId]);

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      {user ? (
        <div className="profile-info">
          <div className="profile-item">
            <label>Name:</label>
            <p>{user.username}</p>
          </div> 
          <div className="profile-item">
            <label>Email:</label>
            <p>{user.email}</p>
          </div>
          {/* Display other user information as needed */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Profile;

