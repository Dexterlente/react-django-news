import requireAuth from '../Contexts/requireAuth'
import React, { useState } from "react";
import Cookies from "js-cookie";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const sessionid = Cookies.get("sessionid");
    if (!sessionid) {
      alert("You must be logged in to create a post.");
      return;
    }

    const postData = {
      title,
      content,
      image_url: imageUrl,
    };
    const csrfToken = Cookies.get('csrftoken');
    
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${sessionid}`,
        "Content-Type": "application/json",
        'X-CSRFToken': csrfToken,
      },
      body: JSON.stringify(postData),
    };

    fetch("http://127.0.0.1:8000/api/posts/", requestOptions)

      .then((response) => response.json())
      .then((data) => {
        console.log(requestOptions);
        console.log("New post created:", data);
        setTitle("");
        setContent("");
        setImageUrl("");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Create a new post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <br />
        <label>
          Content:
          <textarea value={content} onChange={handleContentChange} />
        </label>
        <br />
        <label>
          Image URL:
          <input type="url" value={imageUrl} onChange={handleImageUrlChange} />
        </label>
        <br />
        <button type="submit">Create post</button>
      </form>
    </div>
  );
};

export default requireAuth(CreatePost);
