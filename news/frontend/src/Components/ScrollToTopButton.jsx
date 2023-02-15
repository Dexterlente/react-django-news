import React from 'react';
import { TiArrowUpThick } from 'react-icons/ti'

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button onClick={scrollToTop} className='p-3 mt-6 bg-[#C4A484] rounded-full hover:opacity-80'>
      <TiArrowUpThick className='h-[30px] w-[30px]' color='white' />
    </button>
  );
};

export default ScrollToTopButton;
