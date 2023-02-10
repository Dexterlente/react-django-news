import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const ArticlePage = () => {
  const [article, setArticle] =useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
    fetch("http://127.0.0.1:8000/api/articles/")
      .then((res) => res.json())
      .then((data) => {
        setArticle(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className='items-center justify-center'>
            {loading ? (
                      <p>Loading...</p>
                    ) : (
                      <div>
                          {article.map((article) => (
                            <div key={article.id} className=' flex border-b-2 border-[#795C34]'> 
                            <Link to={`/articles/${article.id}`}>
                                <div>
                                <h1 className='font-bold text-2xl hover:opacity-60'>{article.title}</h1>
                                </div>
                                </Link>
                              <img className='h-[150px] w-[300px]' src={ article.image } alt='Image' />
                          </div>
                          ))}
                      </div>
                    )}
    </div>
  )
}

export default ArticlePage