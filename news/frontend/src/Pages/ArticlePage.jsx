import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const ArticlePage = () => {
  const [article, setArticle] =useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  const articlesPerPage = 1;
  const pageCount = Math.ceil(article.length / articlesPerPage);

    useEffect(() => {
    fetch("http://127.0.0.1:8000/api/articles/")
      .then((res) => res.json())
      .then((data) => {
        setArticle(data);
        setLoading(false);
      });
  }, []);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * articlesPerPage;
  const currentArticles = article.slice(offset, offset + articlesPerPage);

  return (
    <div>
            {loading ? (
                      <p>Loading...</p>
                    ) : (
                      <div>
                          {currentArticles    //filter archived false
                           .filter(article => !article.archived)
                           .map((article) => (
                          <div key={article.id} className=' flex place-content-center border-b-2 border-[#795C34] my-10 last:border-b-0'> 
                                <Link to={`/articles/${article.id}`}>
                                    <div>
                                      <h1 className='w-3/5 font-bold text-2xl hover:opacity-60 mr-12 content-center'>{article.title}
                                      <br/>
                                        <p className='mt-4 text-sm'>
                                            By: {article.author.first_name} {article.author.last_name}
                                        </p>
                                      </h1>
                                    </div>
                                    </Link>
                              <img className='h-[150px] w-[300px] border-black mb-4' src={ article.image } alt='Image' />
                          
                          </div>
                          
                          ))}
                          <ReactPaginate
                            breakLabel={<span className="mr-4">...</span>}
                            pageCount={pageCount}
                            onPageChange={handlePageChange}
                            pageRangeDisplayed={3}
                            containerClassName={'flex items-center justify-center mt-8 mb-4'}
                            activeClassName={'bg-gray-600 text-black'}
                            pageClassName={"border-solid border-gray-200 hover:bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full mr-4"}
                            renderOnZeroPageCount={null}
                            nextLabel={<span className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
                            <BsChevronRight /></span>}
                            previousLabel={<span className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full mr-4">
                            <BsChevronLeft /></span>}
                              />
                      </div>
                    )}
    </div>
  )
}


// pagination needed

export default ArticlePage