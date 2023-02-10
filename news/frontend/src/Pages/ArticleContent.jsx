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
            <h1 className='font-bold text-[40px] mt-8'>{ArticleContent.title}</h1>
            <p className='text-[16px] mb-6'>{ArticleContent.content}</p>
          </div>
        )}
      </div>
    ); 
}

export default ArticleContent