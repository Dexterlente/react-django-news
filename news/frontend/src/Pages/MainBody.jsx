import React from 'react'
import car from '../Assets/car.png'

const MainBody = () => {
  return (
    <div>
      <div className='relative flex'>
        <div className='absolute left-9 w-2/5 '>
            <h1>
              TIELEREQRWQEWQEQW EVQWEQWEVW@EWQRVQWERQETRQWERQCWEQWXEQWE
            </h1>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
             when an unknown printer took a galley of type and scrambled it to make a type 
             specimen book. It has survived not only five centuries, but also the leap into 
             electronic typesetting, remaining essentially unchanged. 
             It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recentl
              y with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
        <div className='absolute right-[200px] top-0 h-[300px] w-[440px]'>
            <img src={ car } alt='car' />
        </div>
      </div>
    </div>
  )
}

export default MainBody