import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Loading from '../Components/Loading'

const PostPage = () => {
  const [post, setPost] =useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  const postPerPage = 2;
  const pageCount = Math.ceil(post.length / postPerPage);

    useEffect(() => {
    fetch("http://127.0.0.1:8000/api/posts/")
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      });
  }, []);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * postPerPage;
  const currentPost = post.slice(offset, offset + postPerPage);

  return (
    <div>
            {loading ? (
                      <Loading />
                    ) : (
                      <div>
                        <div className='hidden sm:block mt-28'>
                          {currentPost    //filter archived false
                           .filter(post => !post.archived)
                           .map((post, index) => (
                          <div key={post.id} className={`grid grid-cols-2 content-center pb-4 border-b-2  border-[#795C34] my-10 ${
                            index === currentPost.length - 1 ? 'border-b-0' : ''
                          }`}> 
                                <Link to={`/post/${post.id}`}>
                                    <div className='ml-28'>
                                      <h1 className='font-bold text-2xl hover:opacity-60 mr-2 content-center'>{post.title_post}
                                      <br/>
                                        <p className='mt-4 text-sm'>
                                            By: {post.author_post.first_name} {post.author_post.last_name}
                                        </p>
                                        <p className='mt-4 text-sm'>
                                        {new Date(post.time_created_post).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                              })}
                                        </p>
                                      </h1>
                                    </div>
                                    </Link>
                              <img className='h-[150px] w-[300px]' src={ post.image_post } alt='Image' />
                          
                          </div>
                          
                          ))}
                          </div>
                          <div className='block sm:hidden mt-28'>
                          {currentPost    //filter archived false
                           .filter(post => !post.archived)
                           .map((post, index) => (
                          <div key={post.id} className={`flex-row border-b-2 pb-4 ml-6 content-center border-[#795C34] my-10 ${
                            index === currentPost.length - 1 ? 'border-b-0' : ''
                          }`}> 
                                <Link to={`/post/${post.id}`}>
                                    <div>
                                      <h1 className='font-bold text-2xl hover:opacity-60 mr-10 content-center'>{post.title_post}
                                      <br/>
                                        <p className='mt-4 text-sm'>
                                            By: {post.author_post.first_name} {post.author_post.last_name}
                                        </p>
                                        <p className='mt-4 text-sm'>
                                        {new Date(post.time_created_post).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                              })}
                                        </p>
                                      </h1>
                                    </div>
                                    </Link>
                              <img className='h-[150px] w-[300px]' src={ post.image_post } alt='Image' />
                          </div>
                          
                          ))}

                          </div>
                          <ReactPaginate
                            breakLabel={<span className="mr-4">...</span>}
                            pageCount={pageCount}
                            onPageChange={handlePageChange}
                            pageRangeDisplayed={3}
                            containerClassName={'flex items-center justify-center mt-8 mb-4'}
                            activeClassName={'bg-[#F4F0DB] text-black'}
                            pageClassName={"border-dotted border-2 border-[#F4F0DB] rounded-full hover:bg-[#F4F0DB] w-10 h-10 flex items-center justify-center rounded-full mr-4"}
                            renderOnZeroPageCount={null}
                            nextLabel={<span className="w-10 h-10 flex items-center justify-center bg-[#F4F0DB] rounded-full">
                            <BsChevronRight /></span>}
                            previousLabel={<span className="w-10 h-10 flex items-center justify-center bg-[#F4F0DB] rounded-full mr-4">
                            <BsChevronLeft /></span>}
                              />
                      </div>
                    )}
    </div>
  )
}


export default PostPage