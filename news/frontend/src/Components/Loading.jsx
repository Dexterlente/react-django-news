import React from 'react';
import white from '../Assets/white.png';

const Loading = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex items-center justify-center">
        <div className="inline-block w-64 h-64 relative">
        <div className="absolute top-0 bottom-0 left-0 right-0 m-auto h-48 border-solid border-8  border-t-8 rounded-full animate-spin border-black border-gradient-to-r"></div>
          <div className="absolute top-0 bottom-0 left-0 right-0 m-auto w-48 h-48 border-8 border-t-8 rounded-full animate-spin bg-gradient-to-br from-gray-200 to-black"></div>
          <img src={white} alt="white" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[120px] w-[120px]" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
