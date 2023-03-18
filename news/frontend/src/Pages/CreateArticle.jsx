import requireAuth from '../Contexts/requireAuth'
import React, { useState, } from "react";
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom'

const CreateArticle = () => {
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
      title: title,
      content: content,
      image: imageUrl
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

    fetch("http://127.0.0.1:8000/api/articles/", requestOptions)

      .then((response) => response.json())
      .then((data) => {
        console.log(requestOptions);
        console.log("New article created:", data);
        setTitle("");
        setContent("");
        setImageUrl("");
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className='mx-3 font-bold'>
      <h2 className='text-[32px] my-8'>Create a new post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={handleTitleChange} className='w-11/12 mx-3 mb-4 border-2 border-gray-600 border-solid rounded-md' />
        </label>
        <br />
        <label>
          <div>
          Content:
          </div>
          <textarea value={content} onChange={handleContentChange} className='w-11/12 h-[300px] mx-3 border-2 my-1 border-solid border-gray-600 rounded-md' />
        </label>
        <br />
        <label>
          Image URL:
          <input type="url" value={imageUrl} onChange={handleImageUrlChange} className='w-11/12 mx-3 mb-4 border-2 border-gray-600  border-solid rounded-md mt-3' />
        </label>
        <br />
        <button type="submit" className="inline-block px-6 mr-18 py-2 border-2 border-yellow-500 text-yellow-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-yellow-500 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out mb-3" >Create Post</button>
      </form>
    </div>
  );
};

export default requireAuth(CreateArticle);
