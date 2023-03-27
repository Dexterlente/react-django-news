import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ArchiveButtonPost from '../Components/ArchiveButtonPost'
import Cookies from 'js-cookie';
import Loading from '../Components/Loading'
import API_ENDPOINT from '../config.js'

const PostContent = () => {
    const { id } = useParams();
    const [PostContent, setPostContent] = useState({});
    const [loading, setLoading] = useState(true);
    const [archived, setArchived] = useState(false);
    const [sessionID, setSessionID] = useState('');


    const fetchPostContent = (id) => {
      fetch(`${API_ENDPOINT}/api/posts/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setPostContent(data);
          setArchived(data.archived_post);
          setLoading(false);
        });
    };
  
    useEffect(() => {
      fetchPostContent(id);
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
            <h1 className='font-bold text-[40px] mx-4 mb-4 mt-8'>{PostContent.title_post}</h1>
            <p className='mt-4 text-sm text-start md:mx-24 mx-8'>
              By: {PostContent.author_post.first_name.charAt(0).toUpperCase() + PostContent.author_post.first_name.slice(1).toLowerCase() } {PostContent.author_post.last_name.charAt(0).toUpperCase()+ PostContent.author_post.last_name.slice(1).toLowerCase()}
          </p>
          <p className='mt-4 text-sm text-start md:mx-24 mx-8'>
          {new Date(PostContent.time_created_post).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
          </p>
            <p className='text-[16px] md:m-24 text-left m-8'>{PostContent.content_post}</p>
            {sessionID && (
              <>
            <ArchiveButtonPost
              id={id}
              archived_post={archived}
              onArchiveChange={handleArchiveChange}
              />  
            <Link to={`/edit-post/${id}`} className="py-2 mb-10 px-4 font-semibold rounded-lg shadow-md text-black hover:opacity-70">
              Edit Post
            </Link>   
              </>      
            )}
          </div>
        )}
      </div>
    ); 
}

export default PostContent