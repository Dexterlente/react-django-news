import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function Logout() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const sessionId = Cookies.get('sessionid');
    if (sessionId) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      navigate('/');
    }
  }, []);


  const handleLogout = () => {
    fetch('http://127.0.0.1:8000/api/logout/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
    })
      .then(() => {
        Cookies.remove('sessionid');
        setIsLoggedIn(false);
        navigate('/');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  if (!isLoggedIn) {
    return null; // or return an alternative component
  }
  

  return (
    <div>
      <p>Welcome back, user!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;

