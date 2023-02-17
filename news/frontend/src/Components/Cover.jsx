import React, { useState, useEffect } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import MainBody from '../Pages/MainBody';

const Cover = () => {
  const slides = [
    {
      url: require("../Assets/1.png"),
    },
    {
      url: require("../Assets/2.png"),
    },
    {
      url: require("../Assets/3.png"),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  // params for auto change
  const autoScroll = true;
  let slideInterval;
  let intervalTime = 10000;


  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
//auto
  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }
  // fire autoscroll with interval every currentindex change
    useEffect(() => {
      if (autoScroll) {
        auto();
      }
      return () => clearInterval(slideInterval);
    },[currentIndex]);

  return (
    <>
    <div className='mb-16'>
      <div className='h-[585px] hidden lg:block'>
        <div className='max-w-[1280] w-11/12 m-auto py-6 h-screen px-4 relative group'>
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className='w-full h-4/6 rounded-2xl bg-center bg-contain  duration-500'
          ></div>
          {/* Left Arrow */}
          <div className='hidden group-hover:block absolute top-[33%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className='hidden group-hover:block absolute top-[33%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className='flex top-4 justify-center'>
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`slide ${slideIndex === currentIndex ? "" : ""} transition-opacity duration-1000 ease-in-out`}
                style={{ opacity: slideIndex === currentIndex ? 1 : 0.3 }}
              >
                <RxDotFilled className='text-2xl opacity-100 cursor-pointer' />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* md size */}
      <div className='h-[470px] hidden md:block lg:hidden'>
        <div className='w-11/12 m-auto py-6 h-screen px-4 relative group'>
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className='w-full h-3/6 rounded-2xl bg-center bg-contain  duration-500'
          ></div>
          {/* Left Arrow */}
          <div className='hidden group-hover:block absolute top-[26%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className='hidden group-hover:block absolute top-[26%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className='flex top-4 justify-center'>
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`slide ${slideIndex === currentIndex ? "current" : ""} transition-opacity duration-1000 ease-in-out`}
                style={{ opacity: slideIndex === currentIndex ? 1 : 0.3 }}
              >
                <RxDotFilled className='text-2xl opacity-100 cursor-pointer' />
              </div>
            ))}
          </div>
        </div>
      </div>
              {/* sm size */}
              <div className='h-[320px] block md:hidden'>
        <div className='w-full m-auto py-6 h-screen relative group'>
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className='w-full h-2/6 rounded-2xl bg-center bg-contain  duration-500'
          ></div>
          {/* Left Arrow */}
          <div className='hidden group-hover:block absolute top-[18%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={20} />
          </div>
          {/* Right Arrow */}
          <div className='hidden group-hover:block absolute top-[18%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={20} />
          </div>
          <div className='flex top-4 justify-center'>
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`slide ${slideIndex === currentIndex ? "current" : ""}  transition-opacity duration-1000 ease-in-out`}
                style={{ opacity: slideIndex === currentIndex ? 1 : 0.3 }}
              >
                <RxDotFilled className='text-2xl opacity-100 cursor-pointer' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <MainBody />  
    </>
  );
}


export default Cover