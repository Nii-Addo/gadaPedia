import React from 'react';
import AltSearchBar from './altSearchBar';

const Introduction = () => {
  return (
    <div className='relative w-full min-h-0 md:h-auto md:max-h-full py-4 md:bg-gray-300 md:py-16 md:rounded-lg'>
      <div className='w-2/3 md:w-1/2 ml-2 md:ml-0 text-left h-auto md:ml-40'>
        <h1 className='font-md md:font-semibold text-5xl text-intro leading-none md:break-normal md:font-mono '>
          Welcome to ga-dangme.org, a place to learn more about the Ga-Dangme, the tribe at the center of the world.
        </h1>
      </div>

      <div className='w-3/5 md:w-1/3 mt-8 ml-2 md:ml-40 h-28 md:h-25 mb-4 md:mb-8 py-4'>
        <h3 className='text-xl font-medium text-intro'>
          What do you want to learn about us? Learn our language, history, culture and more.
        </h3>
      </div>
      <div className='absolute md:relative bottom-0 md:bottom-12 py-2 md:mb-0 md:w-2/5 mt-4 px-4 bg-purple-600 md:bg-transparent w-full md:ml-36'>
        <AltSearchBar />
      </div>
    </div>
  );
};

export default Introduction;