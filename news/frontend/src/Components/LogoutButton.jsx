import React from "react";

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

function LogoutButton() {
  const handleLogout = () => {
    fetch('/api/logout/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': getCookie('csrftoken') // assuming you have implemented getCookie() function to get the CSRF token
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to logout')
      }
      // redirect to login page or refresh the current page
      window.location.href = '/login/';
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}

export default LogoutButton;
