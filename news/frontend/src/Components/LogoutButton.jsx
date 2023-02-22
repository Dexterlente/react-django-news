import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

function LogoutButton({ onLogout }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const sessionId = Cookies.get('sessionid');
    if (sessionId) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  // const sessionId = Cookies.get('sessionid');
  // const csrfToken = Cookies.get('csrftoken');

  const handleLogout = () => {
    fetch('http://127.0.0.1:8000/api/logout/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${sessionId}`,
        // 'X-CSRFToken': csrfToken,
      },
    })
      .then(() => {
        Cookies.remove('sessionid');
        setIsLoggedIn(false);
        onLogout();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  if (!isLoggedIn) {
    return null; // or return an alternative component
  }

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}

LogoutButton.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default LogoutButton;