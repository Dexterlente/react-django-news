import React from 'react'
import car from '../Assets/car.png'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ScrollToTopButton from '../Components/ScrollToTopButton'



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
    <div className='pb-4 pt-10 mb-6 bg-[#FAF9F6]'>
      <div className='hidden lg:block'>
        <div className='text-center font-bold text-[70px] mt-10 mb-32'>
          Top Stories
        </div>
        <div className='grid grid-cols-2 w-screen justify-center ml-4 relative'>
          <div>
          {loading ? (
          <p>Loading...</p>
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
                            <img className='h-[150px] w-[300px] mr-2' src={ post.image_post } alt='Image' />
                        </div>
                        ))}
                    </div>
                          )}
                          <div className='flex flex-col justify-center items-center'>
                            <Link to={`/postpage`}>
                          <button type="button" class="inline-block px-6 py-2 border-2 border-yellow-500 text-yellow-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-yellow-500 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                            Read More</button>
                            </Link>
                          </div>
          </div>
{/* so hard */}
            <div>
                        {articlesLoading ? (
                                  <p>Loading...</p>
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
            <div className='flex justify-center ml-4'>
              <div className='w-2/5 mr-6'>
                  <h1 className='font-bold'>
                    TIELEREQRW QEWQEQW EVQWEQWE VW@EWQRV QWERQETRQ WERQCWE QWXEQWE
                  </h1>
                  <p className='text-sm'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type 
                  specimen book. It has survived not only five centuries, but also the leap into 

                  </p>
              </div>
              <div className='h-[300px] w-[400px] ml-3 mr-4'>
                  <img src={ car } className='align-middle' alt='car' />
              </div>
          </div>
        </div>
        {/* smallest */}

        <div className='block md:hidden'>
        <div className='text-center font-bold text-[30px] mb-6'>
            Top Stories
            </div>
            <div className='justify-center p-3'>
              <div className='mr-6'>
                  <h1 className='font-bold text-[18px]'>
                    TIELEREQRW QEWQEQW EVQWEQWE VW@EWQRV QWERQETRQ WERQCWE QWXEQWE
                  </h1>
                  <p className='text-[14px]'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type 
                  specimen book. It has survived not only five centuries, but also the leap into 

                  </p>
              </div>
              <div className='h-[300px] w-[400px]'>
                  <img src={ car } className='align-middle' alt='car' />
              </div>
          </div>
        </div>
 
      </div>

    </div>
  );
}
//timestap feb 5 may internet na!!
export default MainBody