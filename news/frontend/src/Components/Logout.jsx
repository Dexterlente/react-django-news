// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie';

// function Logout() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     fetch('http://127.0.0.1:8000/api/logout/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'X-CSRFToken': Cookies.get('csrftoken') // Include CSRF token
//       },
//     })
//       .then(() => {
//         Cookies.remove('sessionid'); // Remove session ID cookie
//         navigate('/login'); // Redirect to login page
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   };

//   return (
//     <div>
//       <p>Are you sure you want to logout?</p>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// }

// export default Logout;
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
    return navigate('/login'); // or return an alternative component
  }
  

  return (
    <div>
      <p>Welcome back, user!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;

