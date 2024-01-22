import  { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import MovieListItem from '../MovieListItem/Index';
import { InputDataContext } from '../../context/InputData';

const MovieList = () => {
  const [searchResponseData, setSearchResponseData] = useState([]);
  const [discoverResponseData, setDiscoverResponseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchPage, setSearchPage] = useState(1);
  const [discoverPage, setDiscoverPage] = useState(1);
  const { input } = useContext(InputDataContext);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const baseURL = 'https://api.themoviedb.org/3';
        const apiKey = 'b0e3386879a49b386f459973906dc602'; // API anahtarınızı buraya ekleyin

        const searchURL = `${baseURL}/search/movie?query=${input}&include_adult=false&language=en-US&page=${searchPage}&api_key=${apiKey}`;
        const discoverURL = `${baseURL}/discover/movie?page=${discoverPage}&api_key=${apiKey}`;

        const response = await axios.get(input ? searchURL : discoverURL);

        if (input) {
          setSearchResponseData(prevItems => [...prevItems, ...response.data.results]);
        } else {
          setDiscoverResponseData(prevItems => [...prevItems, ...response.data.results]);
        }

        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(true);
      }
    };

    fetchMovies();
  }, [input, searchPage, discoverPage]);

  if (loading) return (<div className='text-white text-3xl font-black text-center h-[30vh] mt-10'>Loading</div>);

  return (
    <div className='h-full overflow-hidden'>
      <div className='text-primary font-black text-4xl p-2 text-center '>Explore the Movies</div>

      <div >
        {input ? (
          <div className=' grid grid-cols-4 gap-4' >
            <h2 className='text-2xl col-span-4 text-center text-primary font-extrabold'>Search Results</h2>
            {searchResponseData.map((item, index) => (
              <div className='text-white' key={index}><MovieListItem item={item} /></div>
            ))}
          </div>
        ) : (
          <div className=' grid grid-cols-4 gap-4'>
            <h2 className='text-2xl col-span-4 text-center text-primary font-extrabold'>Discover Results</h2>
            {discoverResponseData.map((item, index) => (
              <div className='text-white' key={index}><MovieListItem item={item} /></div>
            ))}
          </div>
        )}
      </div>

      <div className='h-full w-full flex justify-center items-center p-2 mt-2'>
        {input && <button className='bg-primary text-white p-2 rounded-lg inline-block' onClick={() => setSearchPage(searchPage + 1)}>Load More Search</button>}
        {!input && <button className='bg-primary text-white p-2 rounded-lg inline-block' onClick={() => setDiscoverPage(discoverPage + 1)}>Load More Discover</button>}
      </div>
    </div>
  );
};

export default MovieList;
