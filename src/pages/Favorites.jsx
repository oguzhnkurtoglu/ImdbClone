import axios from 'axios';
import { useEffect, useState } from 'react';

const Favorites = () => {
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    const fetchWatchlistMovies = async () => {
      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/account/20466368/watchlist/movies',
        params: {
          language: 'en-US',
          page: '1',
          sort_by: 'created_at.asc'
        },
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGUzMzg2ODc5YTQ5YjM4NmY0NTk5NzM5MDZkYzYwMiIsInN1YiI6IjY1MGFjMTgyOTY2MWZjMDFlNzZjYmQ3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZdYUYURrv_ryy8Y6kL4sZS8RKC164X9V0mMXmQ3lNIc'
        }
      };

      try {
        const response = await axios(options);
        setResponseData(response.data.results);
      } catch (error) {
        console.error('Watchlist movies fetch error:', error);
      }
    };

    fetchWatchlistMovies();
  }, []);

  return (
    <div>
      {/* responseData içindeki film verilerini kullan */}
      {responseData.map((movie) => (
        <div className='text-white' key={movie.id}>
          <p>{movie.title}</p>
          {/* Diğer film bilgileri */}
        </div>
      ))}
    </div>
  );
};

export default Favorites;
