import axios from 'axios';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailContent from '../components/DetailContent/Index';


const Detail = () => {
  const { itemId } = useParams()
  const [responseData, setResponseData] = useState("")
  const URL =  `https://api.themoviedb.org/3/movie/${itemId}`



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
        setResponseData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, [itemId]);

  return (
    <div className=' bg-layoutBg h-screen'>
      

     { responseData=== null ? <p className='text-white'>Loading</p> : console.log(responseData)}
      <DetailContent item={responseData} />
     
    </div>
    )
}

export default Detail