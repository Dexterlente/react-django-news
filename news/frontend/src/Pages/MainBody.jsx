import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ScrollToTopButton from '../Components/ScrollToTopButton'
import Loading from '../Components/Loading'



const MainBody = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [articlesLoading, setArticlesLoading] = useState(true);


  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/posts/")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/articles/")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setArticlesLoading(false);
      });
  }, []);


  return (
    <div>
    <div className='pb-4 pt-10 mb-6'>
      <div className='hidden lg:block'>
        <div className='text-center font-bold text-[70px] mt-10 mb-32'>
          Top Stories
        </div>
        <div className='grid grid-cols-2 w-screen justify-center ml-4 relative'>
          <div>
          {loading ? (
            <Loading />
              ) : (
                    <div>

                        {posts.map((post) => (
                          <div key={post.id} className='border-b-2 border-[#795C34] last:border-b-0 border-r-2 mb-4 pb-4 grid grid-cols-2'> 
                                    <Link to={`/post/${post.id}`}>
                            <div className='ml-8'>
                              <h1 className='font-bold text-xl hover:opacity-60'>{post.title_post}</h1>
                              <p className='mt-4 text-sm'>
                                By: {post.author_post.first_name} {post.author_post.last_name}
                                  </p>
                              </div>
                              </Link>
                            <img className='h-[150px] w-[300px] pr-2' src={ post.image_post } alt='Image' />
                        </div>
                        ))}
                    </div>
                          )}
                          <div className='flex flex-col justify-center items-center'>
                            <Link to={`/postpage`}>
                          <button type="button" className="inline-block px-6 py-2 border-2 border-yellow-500 text-yellow-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-yellow-500 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                            Read More</button>
                            </Link>
                          </div>
          </div>
{/* so hard */}
            <div>
                        {articlesLoading ? (
                                  <Loading />
                                ) : (
                                  <div>
                                      {articles.map((article) => (
                                        <div key={article.id} className='grid grid-cols-2 border-b-2 last:border-b-0 ml-10 border-[#795C34] mb-4 pb-4'> 
                                        <Link to={`/articles/${article.id}`}>
                                            <div>
                                            <h1 className='font-bold text-xl mr-6 hover:opacity-60'>{article.title}</h1>
                                            <p className='mt-4 text-sm'>
                                              By: {article.author.first_name} {article.author.last_name}
                                                </p>
                                            </div>
                                            </Link>
                                          <img className='h-[150px] w-[300px] mr-4' src={ article.image } alt='Image' />
                                      </div>
                                      ))}
                                  </div>
                                )} 
                                <div className='absolute bottom-0 right-12'>
                                <ScrollToTopButton />
                                </div>
            </div>
        </div>
        
      </div>
              {/* md up */}
      <div className='hidden md:block lg:hidden'>
            <div className='text-center font-bold text-[70px] mb-6'>
            Top Stories
            </div>
                {loading ? (
              <Loading />
                  ) : (
            <div>
                  {posts.map((post) => (
                    <div key={post.id} className='grid grid-cols-2 justify-center pl-2 ml-12 border-b-2 last:border-b-0 border-[#795C34] mb-4 pb-4 align-middle'> 
                              <Link to={`/post/${post.id}`}>
                    <div className='mr-6'>
                        <h1 className='font-bold text-xl mt-8'>
                        {post.title_post}
                        </h1>
                        <p className='text-sm'>
                        By: {post.author_post.first_name} {post.author_post.last_name}
                        </p>
                    </div>
              </Link>
                <div className='h-[300px] w-[400px] mr-24'>
                    <img src={ post.image_post } className='align-middle' alt='image' />
                </div>
          </div>
          ))}
        </div>
                  )}
                          <div className='flex justify-center items-center'>
                            <Link to={`/postpage`}>
                            <button type="button" className="inline-block px-6 mr-18 py-2 border-2 border-yellow-500 text-yellow-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-yellow-500 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                              Read More
                              </button>
                            </Link>
                          </div>
                          <div className='flex justify-end mr-10'>
                                <ScrollToTopButton />
                                </div>
        </div>
        {/* smallest */}

        <div className='block md:hidden'>
        <div className='text-center font-bold text-[30px] mb-6'>
            Top Stories
            </div>

                {loading ? (
              <Loading />
                  ) : (
            <div>
                  {posts.map((post) => (
                    <div key={post.id} className='flex-row justify-center ml-5 border-b-4 last:border-b-0 border-[#795C34] mb-4 pb-4 align-middle'> 
                              <Link to={`/post/${post.id}`}>
                      <div className='mr-6'>
                          <h1 className='font-bold text-[18px] mb-3'>
                          {post.title_post}
                          </h1>
                          <p className='text-[14px] mb-3'>
                          By: {post.author_post.first_name} {post.author_post.last_name}
                          </p>
                      </div>
              </Link>
              <div className='h-[280px] w-[380px]'>
              <img src={ post.image_post } className='align-middle' alt='image' />
              </div>
          </div>
            ))}
        </div>
    )}
                          <div className='flex justify-center items-center'>
                            <Link to={`/postpage`}>
                            <button type="button" className="inline-block px-6 mr-18 py-2 border-2 border-yellow-500 text-yellow-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-yellow-500 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                              Read More
                              </button>
                            </Link>
                          </div>
                          <div className='flex justify-end mr-10'>
                                <ScrollToTopButton />
                                </div>
      </div>
      </div>        
    </div>
  );
}
//timestap feb 5 may internet na!!
export default MainBody