import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArchiveButtonArticle from '../Components/ArchiveButtonArticle'
import Cookies from 'js-cookie';
import Loading from '../Components/Loading'

const ArticleContent = () => {
    const { id } = useParams();
    const [ArticleContent, setArticleContent] = useState({});
    const [loading, setLoading] = useState(true);
    const [archived, setArchived] = useState(false);
    const [sessionID, setSessionID] = useState('');
  
    const fetchArticleContent = (id) => {
      fetch(`http://127.0.0.1:8000/api/articles/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setArticleContent(data);
            setArchived(data.archived);
            setLoading(false);
        });
    };
  
    useEffect(() => {
        fetchArticleContent(id);
        setSessionID(Cookies.get('sessionid'));
    }, [id]);
  
    const handleArchiveChange = (id, archived) => {
      setArchived(archived);
    }



    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div className='text-center md:mx-32'>
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
            {sessionID && (
            <ArchiveButtonArticle
              id={id}
              archived={archived}
              onArchiveChange={handleArchiveChange}
            />
            )}
          </div>
        )}
      </div>
    ); 
}

export default ArticleContent