import requireAuth from '../Contexts/requireAuth'
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate, useParams } from 'react-router-dom'
import Loading from '../Components/Loading'
import API_ENDPOINT from '../config.js'


const EditArticle = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const token = Cookies.get('token');
      const response = await fetch(`${API_ENDPOINT}/api/articles/${id}/`, {
        headers: {
          'Authorization': `Token ${token}`
        }
      });
      const data = await response.json();
      setTitle(data.title);
      setContent(data.content);
      setImageUrl(data.image);
      setIsLoading(false);
    }
    fetchData();
  }, [id]);

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

    const putData = {
      title: title,
      content: content,
      image: imageUrl
    };

    const csrftoken = Cookies.get("csrftoken");
    const token = Cookies.get('token');
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Token ${token}`,
        "X-CSRFToken": csrftoken,
      },
      body: JSON.stringify(putData),
    };

    fetch(`${API_ENDPOINT}/api/articles/${id}/`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("Post updated:", data);
        setTitle("");
        setContent("");
        setImageUrl("");
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  if (isLoading) {
    return <div><Loading /></div>;
  }
  return (
    <div className='mx-3 font-bold'>
      <h2 className='text-[32px] my-8'>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={handleTitleChange} className='w-11/12 mx-3 mb-4 border-2 border-gray-600 border-solid rounded-md' required  />
        </label>
        <br />
        <label>
          <div>
          Content:
          </div>
          <textarea value={content} onChange={handleContentChange} className='w-11/12 h-[300px] mx-3 border-2 my-1 border-solid border-gray-600 rounded-md'required  />
        </label>
        <br />
        <label>
          Image URL:
          <input type="url" value={imageUrl} onChange={handleImageUrlChange} className='w-11/12 mx-3 mb-4 border-2 border-gray-600  border-solid rounded-md mt-3'required  />
        </label>
        <br />
        <button type="submit" className="inline-block px-6 mr-18 py-2 border-2 border-yellow-500 text-yellow-500 font-medium text-xs leading-tight uppercase rounded-sm hover:bg-yellow mb-3"> Submit Edited Article </button>
        </form>
    </div>
  );
};

export default requireAuth(EditArticle);
