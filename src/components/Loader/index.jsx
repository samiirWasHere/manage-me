import React from 'react';
import { FadeLoader } from 'react-spinners';

const Loader = ({ loadingText }) => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center bg-white bg-opacity-75">
      <FadeLoader color="#4A90E2" />
      <p className="mt-3 text-lg text-gray-600">{loadingText}</p>
    </div>
  );
};

export default Loader;
