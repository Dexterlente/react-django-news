import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie';

function ArchiveButton({ id, archived_post, onArchiveChange }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user is logged in on component mount
  useEffect(() => {
    const sessionId = Cookies.get('sessionid');
    //const sessionToken = sessionStorage.getItem("token");
    setIsLoggedIn(!!sessionId);
  }, []);

  // Handle click on archive/unarchive button
  const handleArchiveClick = async () => {
    const sessionId = Cookies.get('sessionid');
    //const sessionToken = sessionStorage.getItem("token");

    if (!sessionId) {
      alert("You must be logged in to perform this action.");
      return;
    }

    const response = await fetch(`http://127.0.0.1:8000/api/posts/${id}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionId}`,
      },
      body: JSON.stringify({ archived_post: !archived_post }),
    });

    if (response.ok) {
      onArchiveChange(id, !archived_post);
    } else {
      alert("There was an error archiving/unarchiving the item.");
    }
  };

  return (
    <button onClick={handleArchiveClick}
    className={`py-2 mb-10 px-4 font-semibold rounded-lg shadow-md text-white hover:opacity-70 ${
      archived_post ? "bg-[red]" : "bg-[green]"
    }`}
    >
      {archived_post ? "Unarchive" : "Archive"}
    </button>
  );
}

export default ArchiveButton;
