import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import withAuth from '../Contexts/withAuth';
import API_ENDPOINT from '../config.js'

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { username: username, password: password };
    console.log(Cookies.get('csrftoken'));
    fetch(`${API_ENDPOINT}/api/login/`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Successful login logic here
          Cookies.set("csrftoken", data.csrftoken);
          Cookies.set('token', data.token);
          // Cookies.set('access_token', data.access); // Save access token in a cookie
          // Cookies.set('refresh_token', data.refresh); // Save refresh token in a cookie
         // Cookies.set('sessionid', data.sessionid); // Save session ID in a cookie
          window.location.reload(true); // hard refresh to render the logout button
          navigate('/'); // Redirect to dashboard page
          
        } else {
          // Failed login logic here
          console.log(data.error);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default withAuth(Login);


