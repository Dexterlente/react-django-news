import requireAuth from '../Contexts/requireAuth'
import React, { useState } from "react";
import Cookies from "js-cookie";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const sessionId = Cookies.get("sessionId");
    if (!sessionId) {
      alert("You must be logged in to create a post.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("body", body);
    formData.append("image", image);

    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${sessionId}`,
      },
      body: formData,
    };

    fetch("http://127.0.0.1:8000/api/posts/", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("New post created:", data);
        setTitle("");
        setBody("");
        setImage("");
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
          Body:
          <textarea value={body} onChange={handleBodyChange} />
        </label>
        <br />
        <label>
          Image:
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        <br />
        <button type="submit">Create post</button>
      </form>
    </div>
  );
};

export default requireAuth(CreatePost);
