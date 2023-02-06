import React from 'react'
import car from '../Assets/car.png'

const MainBody = () => {
  return (
    <div className='border-b-2'>
      <div className='flex justify-center'>
        <div className='w-1/5'>
            <h1 className='font-bold'>
              TIELEREQRWQEWQEQW EVQWEQWEVW@EWQRVQWERQETRQ WERQCWEQWXEQWE
            </h1>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
             when an unknown printer took a galley of type and scrambled it to make a type 
             specimen book. It has survived not only five centuries, but also the leap into 

            </p>
        </div>
        <div className='h-[300px] w-[440px]'>
            <img src={ car } alt='car' />
        </div>
      </div>
    </div>
  )
}
//timestap feb 5 may internet na!!
export default MainBody