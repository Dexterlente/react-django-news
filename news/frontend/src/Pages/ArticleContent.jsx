import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ArticleContent = () => {
    const { id } = useParams();
    const [ArticleContent, setArticleContent] = useState({});
    const [loading, setLoading] = useState(true);
  
    const fetchArticleContent = (id) => {
      fetch(`http://127.0.0.1:8000/api/articles/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setArticleContent(data);
            setLoading(false);
        });
    };
  
    useEffect(() => {
        fetchArticleContent(id);
    }, [id]);
  
    return (
      <div>
        {loading ? (
          <p>Loading...................</p>
        ) : (
          <div className='text-center'>
            <h1 className='font-bold text-[40px] mx-4 mb-4 mt-8'>{ArticleContent.title}</h1>
            <p className='mt-4 text-sm text-start md:mx-24 mx-8'>
              By: {ArticleContent.author.first_name} {ArticleContent.author.last_name}
          </p>
          <p className='mt-4 text-sm text-start md:mx-24 mx-8'>
          {new Date(ArticleContent.time_created).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
          </p>
            <p className='text-[16px] md:m-24 m-8'>{ArticleContent.content}</p>
          </div>
        )}
      </div>
    ); 
}

export default ArticleContent