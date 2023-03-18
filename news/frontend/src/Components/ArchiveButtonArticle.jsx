import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie';

function ArchiveButtonArticle({ id, archived, onArchiveChange }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user is logged in on component mount
  useEffect(() => {
    //const sessionId = Cookies.get('sessionid');
    const token = Cookies.get('token');
    //const sessionToken = sessionStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  // Handle click on archive/unarchive button
  const handleArchiveClick = async () => {
    //const sessionId = Cookies.get('sessionid');
    const token = Cookies.get('token');
    //const sessionToken = sessionStorage.getItem("token");
    console.log("Token value:", token);
    if (!token) {
      //alert("You must be logged in to perform this action.");
      return;
    }

    const response = await fetch(`http://127.0.0.1:8000/api/articles/${id}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify({ archived: !archived }),
    });

    if (response.ok) {
      onArchiveChange(id, !archived);
    } else {
      alert("There was an error archiving/unarchiving the item.");
    }
  };

  return (
    <button onClick={handleArchiveClick}
    className={`py-2 mb-10 px-4 font-semibold rounded-lg shadow-md text-white hover:opacity-70 ${
      archived ? "bg-[red]" : "bg-[green]"
    }`}
    >
      {archived ? "Unarchive" : "Archive"}
    </button>
  );
}

export default ArchiveButtonArticle;
