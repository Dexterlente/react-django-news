import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate';

const ArticlePage = () => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/articles/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setArticle(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {article.map((article) => (
            <div key={article.id} className='flex place-content-center border-b-2 border-[#795C34] my-10 last:border-b-0'>
              <Link to={`/articles/${article.id}`}>
                <div>
                  <h1 className='w-3/5 font-bold text-2xl hover:opacity-60 mr-12 content-center'>{article.title}
                    <br />
                    <p className='mt-4 text-sm'>
                      By: {article.author.first_name} {article.author.last_name}
                    </p>
                  </h1>
                </div>
              </Link>
              <img className='h-[150px] w-[300px] border-black mb-4' src={article.image} alt='Image' />
            </div>
          ))}
          <Pagination data={article} />
        </div>
      )}
    </div>
  )
}

const Pagination = (props) => {
  const { data } = props; 
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 1;

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
    };
    
    return (
    <ReactPaginate
    previousLabel={'previous'}
    nextLabel={'next'}
    breakLabel={'...'}
    breakClassName={'break-me'}
    pageCount={pageCount}
    marginPagesDisplayed={2}
    pageRangeDisplayed={5}
    onPageChange={handlePageClick}
    containerClassName={'pagination'}
    subContainerClassName={'pages pagination'}
    activeClassName={'active'}
    />
    );
    };
    
    export default ArticlePage;
