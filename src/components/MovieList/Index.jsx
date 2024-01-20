import  { useEffect, useState,useContext } from 'react';
import axios from 'axios';
import MovieListItem from '../MovieListItem/Index';
import {  InputDataContext } from '../../context/InputData';

const MovieList = () => {
  const [responseData, setResponseData] = useState(null);
  const { input} = useContext(InputDataContext);
  const URL = input === "" ? "https://api.themoviedb.org/3/discover/movie" : `https://api.themoviedb.org/3/search/movie?query=${input}&include_adult=false&language=en-US&page=1`
  const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGUzMzg2ODc5YTQ5YjM4NmY0NTk5NzM5MDZkYzYwMiIsInN1YiI6IjY1MGFjMTgyOTY2MWZjMDFlNzZjYmQ3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZdYUYURrv_ryy8Y6kL4sZS8RKC164X9V0mMXmQ3lNIc"

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          URL,
          {
            params: {
              api_key: API_KEY, // API anahtarınızı buraya ekleyin
              language: 'en-US',
              sort_by: 'popularity.desc', // Popülerliğe göre sıralama (Dilerseniz başka bir sıralama kullanabilirsiniz)
              include_adult: false,
              include_video: false,
              page: 1,
            },
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGUzMzg2ODc5YTQ5YjM4NmY0NTk5NzM5MDZkYzYwMiIsInN1YiI6IjY1MGFjMTgyOTY2MWZjMDFlNzZjYmQ3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZdYUYURrv_ryy8Y6kL4sZS8RKC164X9V0mMXmQ3lNIc'
              }
          }
        );
        setResponseData(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [input]);

  return (
    <div>
      <div className='text-primary'>Explore the Movies!.</div>
      <div className='grid md:grid-cols-2   lg:grid-cols-6 lg:gap-2 text-center '>
        {
          responseData===null ? <p className='text-white'>Loading</p> : responseData.map((item,index) => <div className=' text-white' key={index}><MovieListItem item={item}/></div>)
        }
        
      </div>
    </div>
  );
};

export default MovieList;
