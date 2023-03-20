import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Loading from '../Components/Loading'

const ArticlePage = () => {
  const [data, setData] =useState([]);
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  // const articlesPerPage = 10;
  // const pageCount = Math.ceil(article.length / articlesPerPage);

  //   useEffect(() => {
  //   fetch("http://127.0.0.1:8000/api/articles/")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setArticle(data);
  //       setLoading(false);
  //     });
  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(`http://127.0.0.1:8000/api/articles/?page=${currentPage + 1}`);
        const data = await result.json();
        console.log(data);
        setData(data.results);
        setPageCount(Math.ceil(data.count / 10));
        console.log(setPageCount);
        setLoading(false);
      }catch (error) {
        console.log(error);
        setLoading(true);
      }    
    };
    fetchData();
  }, [currentPage]);
  // const handlePageChange = ({ selected }) => {
  //   setCurrentPage(selected);
  // };

  // const offset = currentPage * articlesPerPage;
  // const currentArticles = article.slice(offset, offset + articlesPerPage);
    const handlePageChange = (data) => {
      const selectedPage = data.selected;
      // Check if the requested page exists before making the API request
        if (selectedPage < pageCount) {
          console.log(pageCount);
          setCurrentPage(data.selected);
      }
    };
  return (
    <div>
            {loading ? (
                      <Loading />
                    ) : (
                      <div>
                        <div className='text-center text-[48px] md:text-[68px] font-bold mt-4'> 
                          Crypto101
                        </div>
                        <div className='hidden sm:block mt-8'>
                          {data    //filter archived false
                          //  .filter(article => article.archived)
                           .map((article, index) => (
                          <div key={article.id} className={`grid grid-cols-2 border-b-2 pb-4 content-center border-[#795C34] my-10 ${
                            index === data.length - 1 ? 'border-b-0' : ''
                          }`}> 
                                <Link to={`/articles/${article.id}`}>
                                    <div className='ml-28'>
                                      <h1 className='font-bold text-2xl hover:opacity-60 mr-10 content-center'>{article.title}
                                      <br/>
                                        <p className='mt-4 text-sm'>
                                            By: {article.author.first_name} {article.author.last_name}
                                        </p>
                                        <p className='mt-4 text-sm'>
                                        {new Date(article.time_created).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                              })}
                                        </p>
                                      </h1>
                                    </div>
                                    </Link>
                              <img className='h-[150px] w-[300px]' src={ article.image } alt='article' />
                          </div>
                          
                          ))}

                          </div>
                          <div className='block sm:hidden mt-8'>
                          {data    //filter archived false
                           .filter(article => !article.archived)
                           .map((article, index) => (
                          <div key={article.id} className={`flex-row border-b-2 pb-4 ml-6 content-center border-[#795C34] my-10 ${
                            index === data.length - 1 ? 'border-b-0' : ''
                          }`}> 
                                <Link to={`/articles/${article.id}`}>
                                    <div>
                                      <h1 className='font-bold text-2xl hover:opacity-60 mr-10 content-center'>{article.title}
                                      <br/>
                                        <p className='mt-4 text-sm'>
                                            By: {article.author.first_name} {article.author.last_name}
                                        </p>
                                        <p className='mt-4 text-sm'>
                                        {new Date(article.time_created).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                              })}
                                        </p>
                                      </h1>
                                    </div>
                                    </Link>
                              <img className='h-[150px] w-[300px]' src={ article.image } alt='article' />
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

export default ArticlePage