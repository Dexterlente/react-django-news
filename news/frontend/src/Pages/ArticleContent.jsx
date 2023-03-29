import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ArchiveButtonArticle from '../Components/ArchiveButtonArticle'
import Cookies from 'js-cookie';
import Loading from '../Components/Loading'
import API_ENDPOINT from '../config.js'

const ArticleContent = () => {
    const { id } = useParams();
    const [ArticleContent, setArticleContent] = useState({});
    const [loading, setLoading] = useState(true);
    const [archived, setArchived] = useState(false);
    const [sessionID, setSessionID] = useState('');

    //format \n into line break for the db
    // const formatText = (text) => {
    //   return text.replace(/\n/g, "<br>")
    //              .replace(/(\*[^*]*\*)/g, "<b>$1</b>");
    // };
  
    const fetchArticleContent = (id) => {
      fetch(`${API_ENDPOINT}/api/articles/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setArticleContent(data);
            setArchived(data.archived);
            setLoading(false);
        });
    };
  
    useEffect(() => {
        fetchArticleContent(id);
        setSessionID(Cookies.get('token'));
    }, [id]);
  
    const handleArchiveChange = (id, archived) => {
      setArchived(archived);
    }



    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div className='text-center md:w-8/12 lg:w-6/12 mx-auto'>
            <h1 className='font-bold text-[40px] mx-4 mb-4 mt-8'>{ArticleContent.title}</h1>
            <p className='mt-4 text-sm text-start md:mx-24 mx-8'>
              By: {ArticleContent.author.first_name.charAt(0).toUpperCase() + ArticleContent.author.first_name.slice(1).toLowerCase() } {ArticleContent.author.last_name.charAt(0).toUpperCase()+ ArticleContent.author.last_name.slice(1).toLowerCase()}
          </p>
          <p className='mt-4 text-sm text-start md:mx-24 mx-8'>
          {new Date(ArticleContent.time_created).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
          </p>
            <p className='text-[16px] md:m-24 m-8 text-left' dangerouslySetInnerHTML={{ __html: (ArticleContent.content) }}></p>
            {sessionID && (
              <>
            <ArchiveButtonArticle
              id={id}
              archived={archived}
              onArchiveChange={handleArchiveChange}
            />
            <Link to={`/edit-article/${id}`} className="py-2 mb-10 px-4 font-semibold rounded-lg shadow-md text-black hover:opacity-70">
            Edit Article
          </Link>  
            </> 
            )}
          </div>
        )}
      </div>
    ); 
}

export default ArticleContent