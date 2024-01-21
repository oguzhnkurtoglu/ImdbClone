import  { useEffect, useState,useContext } from 'react';
import axios from 'axios';
import MovieListItem from '../MovieListItem/Index';
import {  InputDataContext } from '../../context/InputData';

const MovieList = () => {
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { input} = useContext(InputDataContext);
  const URL = input === "" ? "https://api.themoviedb.org/3/discover/movie" : `https://api.themoviedb.org/3/search/movie?query=${input}&include_adult=false&language=en-US&page=1`

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          URL,
          {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGUzMzg2ODc5YTQ5YjM4NmY0NTk5NzM5MDZkYzYwMiIsInN1YiI6IjY1MGFjMTgyOTY2MWZjMDFlNzZjYmQ3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZdYUYURrv_ryy8Y6kL4sZS8RKC164X9V0mMXmQ3lNIc'
              }
          }
        );
        setResponseData(response.data.results);
        setLoading(false)
      } catch (error) {
        console.error(error);
        setLoading(true)
      }
    };

    fetchMovies();
  }, [input]);

  if((loading)) return (<div className='text-white text-3xl font-black text-center h-[30vh] mt-10'>Loading</div>)

  return (

    <div>
      <div className='text-primary'>Explore the Movies!.</div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-2 p-2 text-center  '>
        {
         responseData.map((item,index) => <div className=' text-white' key={index}><MovieListItem item={item}/></div>)
        }
        
      </div>
    </div>
  );
};

export default MovieList;
