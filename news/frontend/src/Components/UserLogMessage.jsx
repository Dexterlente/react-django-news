import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import API_ENDPOINT from '../config.js'

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      fetch(`${API_ENDPOINT}/api/user/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  if (!Cookies.get("token")) {
    return null;
  }


  if (!user) {
    return <div>Loading user...</div>;
  }

  return (
    <div>
      <h2>Welcome, {user.first_name.charAt(0).toUpperCase() + user.first_name.slice(1).toLowerCase()} {user.last_name.charAt(0).toUpperCase() + user.last_name.slice(1).toLowerCase()}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;
