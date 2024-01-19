import React, { useContext } from 'react';
import { ApiDataContext } from '../context/Movies';

const Favorites = () => {
  const apiData = useContext(ApiDataContext);

  if (apiData === null) {
    // Handle the case when data is still being fetched
    return <p className='bg-red-500'>Loading...</p>;
  }

  // Assuming apiData.results is an array of objects and you want to display a property named 'name'
  return (
    <div>
      {apiData.results.map((item, index) => (
        <div className=' bg-red-400' key={index}>{item.original_title}</div>
      ))}
    </div>
  );
};

export default Favorites;
