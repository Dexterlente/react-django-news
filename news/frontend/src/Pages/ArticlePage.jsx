import React from 'react'
import car from '../Assets/car.png'

const ArticlePage = () => {
  return (
    <>
    <div className='flex justify-center mt-10 border-b-4 mb-5 border-[#9A7B4F]'>
      <div className='w-2/5 mr-2 ml-3'>
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
              <img src={ car } alt='car' />
      </div>
    </div>
    <div className='flex justify-center mt-10 border-b-4 mb-5 border-[#9A7B4F]'>
      <div className='w-2/5 mr-2 ml-3'>
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
              <img src={ car } alt='car' />
      </div>
    </div>
    </>
  )
}

export default ArticlePage