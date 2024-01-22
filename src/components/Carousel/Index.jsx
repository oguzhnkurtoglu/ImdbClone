import { Carousel } from 'antd';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';




const Slider = () => {
  const [responseData, setResponseData] = useState(null);
  const URL =  "https://api.themoviedb.org/3/movie/popular"
  const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGUzMzg2ODc5YTQ5YjM4NmY0NTk5NzM5MDZkYzYwMiIsInN1YiI6IjY1MGFjMTgyOTY2MWZjMDFlNzZjYmQ3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZdYUYURrv_ryy8Y6kL4sZS8RKC164X9V0mMXmQ3lNIc"

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          URL,
          {
            params: {
              api_key: API_KEY, 
              language: 'en-US',
              sort_by: 'popularity.desc', 
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
  }, []);

  return (
    <Carousel autoplay >
       {
         responseData===null ? <p className='text-white'>Loading</p> : responseData.map((item,index) => 
         (<Link  key={index} to={`/${item.id}`}>
          <div  className='relative w-full h-full '>
          <img className='w-full h-full object-cover mx-auto' src={`https://image.tmdb.org/t/p/w1280${item.backdrop_path}`} alt="" />
            <div className=' hidden absolute bottom-0 left-2 max-h-[200px] w-full md:flex bg-slate-400/40 text-black text-2xl font-black items-center '>
            <img className='h-[200px] object-fill' src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt="" />
            <div className=' w-full h-full flex flex-col items-center text-4xl justify-end'>
              <span className=' text-black'>{item.title}</span>
              <div className='flex items-center justify-center'>
              {Number(item.vote_average).toFixed(1)} <FaStar color="gold" />
              </div>
           </div>
          </div>
        </div>
        </Link>))

        }
  </Carousel>
  )
}

export default Slider