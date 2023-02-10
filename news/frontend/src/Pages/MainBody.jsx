import React from 'react'
import car from '../Assets/car.png'


const MainBody = () => {
  return (
    <div className='border-b-4 border-color-white pt-10 mb-6 bg-[#FAF9F6]'>
      <div className='hidden lg:block'>
        <div className='text-center font-bold text-[70px] mb-6'>
          Top Stories
        </div>
        <div className='flex justify-center ml-4'>
          <div className='w-1/5 mr-6'>
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
          <div className='w-1/5 mr-4'>
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
          <div className='h-[300px] w-[400px] ml-3 mr-3'>
              <img src={ car } alt='car' />
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
  )
}
//timestap feb 5 may internet na!!
export default MainBody