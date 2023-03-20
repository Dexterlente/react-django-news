import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='mt-52 h-screen text-[22px] text-center font-bold'>
      <p>
      PageNotFound
      </p>
      <p>
        Broken or invalid link
      </p>
      <p className='text-[60px]'>
        Error 404
      </p>
      <Link to={"/"} 
    className="inline-block px-6 mr-18 py-2 border-2 border-yellow-500 text-yellow-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-yellow-500 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out mb-3">Home
      </Link>
    </div>
  )
}

export default PageNotFound