import requireAuth from '../Contexts/requireAuth'
import React, { useState, } from "react";
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
  const navigate = useNavigate();
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

    const postData = {
      title_post: title,
      content_post: content,
      image_post: imageUrl
    };
    
console.log(Cookies.get('csrftoken'));
const csrftoken = Cookies.get("csrftoken");
//const sessionid = Cookies.get("sessionid");
const token = Cookies.get('token');
const requestOptions = {
  method: "POST",
  headers: {
    // Accept: "application/json",
    "Content-Type": "application/json",
    'Authorization': `Token ${token}`,
     "X-CSRFToken": csrftoken,
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
        navigate("/");
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
