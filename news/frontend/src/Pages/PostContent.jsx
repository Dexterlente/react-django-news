import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PostContent = () => {
    const { id } = useParams();
    const [PostContent, setPostContent] = useState({});
    const [loading, setLoading] = useState(true);
  
    const fetchPostContent = (id) => {
      fetch(`http://127.0.0.1:8000/api/posts/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setPostContent(data);
          setLoading(false);
        });
    };
  
    useEffect(() => {
      fetchPostContent(id);
    }, [id]);
  
    return (
      <div>
        {loading ? (
          <p>Loading...................</p>
        ) : (
          <div className='text-center'>
            <h1 className='font-bold text-[40px] mt-8'>{PostContent.title_post}</h1>
            <p className='text-[16px] mb-6'>{PostContent.content_post}</p>
          </div>
        )}
      </div>
    ); 
}

export default PostContent