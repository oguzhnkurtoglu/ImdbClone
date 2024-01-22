import axios from "axios";
import { CiBookmarkPlus } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";


const MovieListItem = ({item}) => {
  const options = {
    method: 'POST',
    url: 'https://api.themoviedb.org/3/account/20466368/watchlist',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGUzMzg2ODc5YTQ5YjM4NmY0NTk5NzM5MDZkYzYwMiIsInN1YiI6IjY1MGFjMTgyOTY2MWZjMDFlNzZjYmQ3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZdYUYURrv_ryy8Y6kL4sZS8RKC164X9V0mMXmQ3lNIc'
    },
    data: {"media_type":"movie", "media_id": item.id, "watchlist": "true"}};
  
    const addWatchList = () => {axios
      .request(options)
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function (error) {
        console.error(error);
      })

    }
  return (
    <div className={`text-white bg-buttonHover rounded-sm leading-normal mx-auto w-full h-full  ${item.poster_path === null ? 'hidden' : ''}`}>
      <div className="relative" >
              <img
                className="w-full h-full object-cover hover:opacity-30 transition-opacity duration-300 ease-in-out"
                src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                alt={item.title}
              />

 
              <div className=" cursor-pointer">
              <CiBookmarkPlus size={74} onClick={()=>{ addWatchList}} className="absolute top-[-5px] left-[-14px]" />
     </div>
      </div>
      <div className="flex flex-col justify-center items-center">

      <p className="max-w-[100%] overflow-hidden whitespace-nowrap overflow-ellipsis">{item.title}</p>
      <div className="flex items-center justify-center">{Number(item.vote_average).toFixed(1)} <FaStar color="gold" /></div>
      <Link to={`/${item.id}`}>Detail Page</Link>
      </div>
    </div>) }
  


export default MovieListItem