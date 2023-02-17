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
            <h1 className='font-bold text-[40px] mx-4 mb-4 mt-8'>{PostContent.title_post}</h1>
            <p className='mt-4 text-sm text-start md:mx-24 mx-8'>
              By: {PostContent.author_post.first_name} {PostContent.author_post.last_name}
          </p>
          <p className='mt-4 text-sm text-start md:mx-24 mx-8'>
          {new Date(PostContent.time_created_post).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
          </p>
            <p className='text-[16px] md:m-24 m-8'>{PostContent.content_post}</p>
          </div>
        )}
      </div>
    ); 
}

export default PostContent